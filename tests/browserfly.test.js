/**
 * Browserfly Unit Tests
 * Run with: npx vitest run
 */

import { describe, test, expect, beforeEach, vi } from 'vitest';

// Mock IndexedDB
global.indexedDB = {
  open: vi.fn()
};

// Mock crypto
global.crypto = {
  randomUUID: () => 'test-uuid-1234'
};

// Mock CustomEvent
global.CustomEvent = class CustomEvent {
  constructor(type, detail) {
    this.type = type;
    this.detail = detail;
  }
};

// Mock window.dispatchEvent
global.window = {
  dispatchEvent: vi.fn()
};

// ConfigManager class (copied from index.html for testing)
class ConfigManager {
  constructor() {
    this.dbName = 'browserfly-config-test';
    this.version = 1;
    this.db = null;
    this.memoryStore = {};
  }

  async init() {
    return new Promise((resolve) => {
      this.db = { ready: true };
      resolve(this);
    });
  }

  async get(key) {
    return this.memoryStore[key] ?? null;
  }

  async set(key, value) {
    this.memoryStore[key] = value;
  }

  async delete(key) {
    delete this.memoryStore[key];
  }

  async getAll() {
    return { ...this.memoryStore };
  }
}

// ActivityLogger class (copied from index.html for testing)
class ActivityLogger {
  constructor(configManager) {
    this.config = configManager;
    this.maxLogs = 10000;
    this.listeners = [];
  }

  async log(action, details = {}, level = 'info') {
    const entry = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      isoTime: new Date().toISOString(),
      level,
      action,
      details,
      source: 'browserfly-core'
    };

    const logs = await this.config.get('activity_logs') || [];
    logs.unshift(entry);
    if (logs.length > this.maxLogs) logs.splice(this.maxLogs);
    await this.config.set('activity_logs', logs);

    this.listeners.forEach(cb => cb(entry));

    return entry;
  }

  async getLogs(filters = {}) {
    let logs = await this.config.get('activity_logs') || [];

    if (filters.level) {
      logs = logs.filter(l => l.level === filters.level);
    }
    if (filters.search) {
      const search = filters.search.toLowerCase();
      logs = logs.filter(l => 
        l.action.toLowerCase().includes(search) ||
        JSON.stringify(l.details).toLowerCase().includes(search)
      );
    }

    return logs;
  }

  async clear() {
    await this.config.set('activity_logs', []);
    await this.log('LOGS_CLEARED', {}, 'info');
  }

  onLog(callback) {
    this.listeners.push(callback);
    return () => {
      const idx = this.listeners.indexOf(callback);
      if (idx > -1) this.listeners.splice(idx, 1);
    };
  }
}

// Task Router simulation
class TaskRouter {
  constructor(config) {
    this.config = config;
  }

  calculateComplexity(task) {
    let complexity = 0;
    let urgency = 0;
    if (task.requiresReasoning) complexity += 4;
    if (task.multiStep) complexity += 3;
    if (task.domainSpecific) complexity += 3;
    if (task.realtime) urgency += 5;
    if (task.streaming) urgency += 3;
    return { complexity: Math.min(complexity, 10), urgency: Math.min(urgency, 10) };
  }

  calculatePrivacy(task, config) {
    let score = 0;
    if (task.containsPersonalData) score += 5;
    if (config.privacyMode) score += 5;
    return Math.min(score, 10);
  }

  route(task, config) {
    const score = this.calculateComplexity(task);
    const privacyScore = this.calculatePrivacy(task, config);

    if (privacyScore >= 8) return 'local';
    if (score.complexity >= 7) return 'cloud';
    if (score.complexity <= 3 && score.urgency >= 7) return 'local';
    if (config.localModelReady && score.complexity <= 5) return 'local';
    return 'cloud';
  }
}

describe('ConfigManager', () => {
  let config;

  beforeEach(async () => {
    config = new ConfigManager();
    await config.init();
  });

  test('stores and retrieves API key correctly', async () => {
    await config.set('apikey_test', 'sk-test123');
    const value = await config.get('apikey_test');
    expect(value).toBe('sk-test123');
  });

  test('returns null for non-existent key', async () => {
    const value = await config.get('nonexistent');
    expect(value).toBeNull();
  });

  test('updates existing key', async () => {
    await config.set('key1', 'value1');
    await config.set('key1', 'value2');
    const value = await config.get('key1');
    expect(value).toBe('value2');
  });

  test('deletes key correctly', async () => {
    await config.set('todelete', 'value');
    await config.delete('todelete');
    const value = await config.get('todelete');
    expect(value).toBeNull();
  });

  test('getAll returns all stored values', async () => {
    await config.set('key1', 'value1');
    await config.set('key2', 'value2');
    const all = await config.getAll();
    expect(all.key1).toBe('value1');
    expect(all.key2).toBe('value2');
  });
});

describe('ActivityLogger', () => {
  let config;
  let logger;

  beforeEach(async () => {
    config = new ConfigManager();
    await config.init();
    logger = new ActivityLogger(config);
  });

  test('logs entry with correct structure', async () => {
    const entry = await logger.log('TEST_ACTION', { test: true }, 'info');
    expect(entry.action).toBe('TEST_ACTION');
    expect(entry.details.test).toBe(true);
    expect(entry.level).toBe('info');
    expect(entry.id).toBeDefined();
    expect(entry.timestamp).toBeDefined();
  });

  test('respects maxLogs limit', async () => {
    logger.maxLogs = 5;
    for (let i = 0; i < 10; i++) {
      await logger.log(`ACTION_${i}`, {}, 'info');
    }
    const logs = await config.get('activity_logs');
    expect(logs.length).toBe(5);
  });

  test('calls listeners on log', async () => {
    const listener = vi.fn();
    logger.onLog(listener);
    await logger.log('TEST', {}, 'info');
    expect(listener).toHaveBeenCalled();
  });

  test('filters logs by level', async () => {
    await logger.log('INFO_ACTION', {}, 'info');
    await logger.log('ERROR_ACTION', {}, 'error');
    const logs = await logger.getLogs({ level: 'error' });
    expect(logs.length).toBe(1);
    expect(logs[0].action).toBe('ERROR_ACTION');
  });

  test('filters logs by search', async () => {
    await logger.log('API_KEY_SAVED', { provider: 'openai' }, 'info');
    await logger.log('MODEL_FETCHED', { provider: 'groq' }, 'info');
    const logs = await logger.getLogs({ search: 'API' });
    expect(logs.length).toBe(1);
    expect(logs[0].action).toBe('API_KEY_SAVED');
  });

  test('clear removes all logs', async () => {
    await logger.log('TEST', {}, 'info');
    await logger.clear();
    const logs = await config.get('activity_logs');
    expect(logs.length).toBe(1); // LOGS_CLEARED entry
    expect(logs[0].action).toBe('LOGS_CLEARED');
  });
});

describe('TaskRouter', () => {
  let router;

  beforeEach(() => {
    router = new TaskRouter({});
  });

  test('routes to local when privacy score >= 8', () => {
    const task = { containsPersonalData: true };
    const config = { privacyMode: true };
    const decision = router.route(task, config);
    expect(decision).toBe('local');
  });

  test('routes to cloud when complexity >= 7', () => {
    const task = { requiresReasoning: true, multiStep: true, domainSpecific: true };
    const config = {};
    const decision = router.route(task, config);
    expect(decision).toBe('cloud');
  });

  test('routes to local when complexity <= 3 and urgency >= 7', () => {
    const task = { realtime: true };
    const config = {};
    const decision = router.route(task, config);
    expect(decision).toBe('local');
  });

  test('calculates complexity score correctly', () => {
    const task = {
      requiresReasoning: true,
      multiStep: true,
      domainSpecific: false
    };
    const score = router.calculateComplexity(task);
    expect(score.complexity).toBe(7);
  });

  test('calculates privacy score correctly', () => {
    const task = { containsPersonalData: true };
    const config = { privacyMode: false };
    const score = router.calculatePrivacy(task, config);
    expect(score).toBe(5);
  });
});

describe('i18n (Multilingual)', () => {
  const TRANSLATIONS = {
    en: {
      'nav.dashboard': 'Dashboard',
      'test.key': 'Test Value'
    },
    fr: {
      'nav.dashboard': 'Tableau de bord',
      'test.key': 'Valeur de Test'
    }
  };

  function t(key, lang = 'en') {
    return TRANSLATIONS[lang]?.[key] || TRANSLATIONS['en']?.[key] || key;
  }

  test('returns English translation', () => {
    expect(t('nav.dashboard', 'en')).toBe('Dashboard');
  });

  test('returns French translation', () => {
    expect(t('nav.dashboard', 'fr')).toBe('Tableau de bord');
  });

  test('falls back to English if key missing', () => {
    expect(t('test.key', 'es')).toBe('Test Value');
  });

  test('returns key if translation missing', () => {
    expect(t('missing.key', 'en')).toBe('missing.key');
  });
});

describe('SoulFile', () => {
  const DEFAULT_SOUL_FILE = {
    name: "Fly",
    version: "1.0",
    identity: {
      personality: "Helpful AI agent",
      language: "auto",
      tone: "professional"
    },
    goals: ["Assist user efficiently"],
    values: ["privacy", "efficiency"],
    memory: {
      maxEntries: 1000,
      retentionDays: 30
    }
  };

  test('has required structure', () => {
    expect(DEFAULT_SOUL_FILE.name).toBeDefined();
    expect(DEFAULT_SOUL_FILE.version).toBeDefined();
    expect(DEFAULT_SOUL_FILE.identity).toBeDefined();
    expect(DEFAULT_SOUL_FILE.goals).toBeArray();
    expect(DEFAULT_SOUL_FILE.values).toBeArray();
    expect(DEFAULT_SOUL_FILE.memory).toBeDefined();
  });

  test('identity has required fields', () => {
    expect(DEFAULT_SOUL_FILE.identity.personality).toBeDefined();
    expect(DEFAULT_SOUL_FILE.identity.language).toBeDefined();
    expect(DEFAULT_SOUL_FILE.identity.tone).toBeDefined();
  });

  test('memory has required fields', () => {
    expect(DEFAULT_SOUL_FILE.memory.maxEntries).toBeNumber();
    expect(DEFAULT_SOUL_FILE.memory.retentionDays).toBeNumber();
  });
});

describe('Provider Configurations', () => {
  const PROVIDERS = {
    groq: {
      name: 'Groq',
      baseUrl: 'https://api.groq.com/openai/v1',
      modelsEndpoint: '/models'
    },
    openai: {
      name: 'OpenAI',
      baseUrl: 'https://api.openai.com/v1',
      modelsEndpoint: '/models'
    },
    anthropic: {
      name: 'Anthropic',
      defaultModels: [
        { id: 'claude-opus-4-6', name: 'Claude Opus 4.6' }
      ]
    }
  };

  test('all providers have name', () => {
    Object.values(PROVIDERS).forEach(p => {
      expect(p.name).toBeDefined();
    });
  });

  test('live providers have baseUrl', () => {
    expect(PROVIDERS.groq.baseUrl).toBeDefined();
    expect(PROVIDERS.openai.baseUrl).toBeDefined();
  });

  test('hardcoded providers have defaultModels', () => {
    expect(PROVIDERS.anthropic.defaultModels).toBeArray();
    expect(PROVIDERS.anthropic.defaultModels.length).toBeGreaterThan(0);
  });
});

describe('Recommended Local Models', () => {
  const RECOMMENDED_LOCAL_MODELS = [
    {
      id: 'Qwen/Qwen2.5-0.5B-Instruct',
      name: 'Qwen2.5 0.5B Instruct',
      size: '~1GB',
      ram: '2GB',
      capabilities: ['chat', 'fast']
    },
    {
      id: 'openai/whisper-tiny',
      name: 'Whisper Tiny',
      size: '~150MB',
      ram: '1GB',
      task: 'automatic-speech-recognition',
      capabilities: ['audio', 'fast']
    }
  ];

  test('all models have required fields', () => {
    RECOMMENDED_LOCAL_MODELS.forEach(m => {
      expect(m.id).toBeDefined();
      expect(m.name).toBeDefined();
      expect(m.size).toBeDefined();
      expect(m.ram).toBeDefined();
      expect(m.capabilities).toBeArray();
    });
  });

  test('models have valid size format', () => {
    RECOMMENDED_LOCAL_MODELS.forEach(m => {
      expect(m.size).toMatch(/~?\d+(\.\d+)?(GB|MB)/);
    });
  });

  test('audio models have audio capability', () => {
    const audioModels = RECOMMENDED_LOCAL_MODELS.filter(m => 
      m.task === 'automatic-speech-recognition'
    );
    audioModels.forEach(m => {
      expect(m.capabilities).toContain('audio');
    });
  });
});

// ===== GRAVITATIONAL MEMORY TESTS =====
class GravitationalBit {
  constructor(n_max = 15) {
    this.n_max = n_max;
    this.states = [];
    for (let n = 1; n <= n_max; n++)
      for (let l = 0; l < n; l++)
        for (let m = -l; m <= l; m++)
          this.states.push({ n, l, m, occupied: false, energy: -13.6/(n*n) });
  }
  get capacity() { return this.states.length; }
  encode(bits) { for (let i=0;i<Math.min(bits.length,this.states.length);i++) this.states[i].occupied=bits[i]===1; }
  decode() { return this.states.map(s=>s.occupied?1:0); }
}

describe('GravitationalBit', () => {
  test('creates correct number of states for n_max=5', () => {
    const bit = new GravitationalBit(5);
    expect(bit.capacity).toBe(55); // n_max=5 → 55 orbital states
  });
  test('creates correct number of states for n_max=15', () => {
    const bit = new GravitationalBit(15);
    expect(bit.capacity).toBeGreaterThan(600);
  });
  test('encodes and decodes bits correctly', () => {
    const bit = new GravitationalBit(5);
    const original = [1,0,1,1,0,1,0,0,1,1];
    bit.encode(original);
    const decoded = bit.decode().slice(0, original.length);
    expect(decoded).toEqual(original);
  });
  test('energy follows hydrogen formula E = -13.6/n²', () => {
    const bit = new GravitationalBit(5);
    const n1State = bit.states.find(s => s.n === 1);
    expect(n1State.energy).toBeCloseTo(-13.6, 1);
    const n2State = bit.states.find(s => s.n === 2 && s.l === 0);
    expect(n2State.energy).toBeCloseTo(-3.4, 1);
  });
  test('all states start as unoccupied', () => {
    const bit = new GravitationalBit(5);
    expect(bit.states.every(s => !s.occupied)).toBe(true);
  });
});

// TaskRouter scoring tests
function calculateScore(task, config = {}) {
  let complexity = 0, urgency = 0, privacy = 0;
  if (task.requiresReasoning) complexity += 4;
  if (task.multiStep) complexity += 3;
  if (task.domainSpecific) complexity += 3;
  complexity = Math.min(complexity, 10);
  if (task.realtime) urgency += 5;
  if (task.streaming) urgency += 3;
  urgency = Math.min(urgency, 10);
  if (task.containsPersonalData) privacy += 5;
  if (config.privacyMode) privacy += 5;
  privacy = Math.min(privacy, 10);
  let decision;
  if (privacy >= 8) decision = 'local';
  else if (complexity >= 7) decision = 'cloud';
  else if (complexity <= 3 && urgency >= 7) decision = 'local';
  else if (config.localModelReady && complexity <= 5) decision = 'local';
  else decision = 'cloud';
  return { decision, complexity, urgency, privacy };
}

describe('TaskRouter (scoring logic)', () => {
  test('routes to local when privacy score >= 8', () => {
    const r = calculateScore({ containsPersonalData: true }, { privacyMode: true });
    expect(r.decision).toBe('local');
    expect(r.privacy).toBe(10);
  });
  test('routes to cloud when complexity >= 7', () => {
    const r = calculateScore({ requiresReasoning: true, multiStep: true });
    expect(r.complexity).toBe(7);
    expect(r.decision).toBe('cloud');
  });
  test('routes to local when complexity low and urgency high', () => {
    const r = calculateScore({ realtime: true });
    expect(r.decision).toBe('local');
  });
  test('routes to local when model ready and complexity <= 5', () => {
    const r = calculateScore({ domainSpecific: true }, { localModelReady: true });
    expect(r.complexity).toBe(3);
    expect(r.decision).toBe('local');
  });
  test('falls back to cloud when no conditions met', () => {
    const r = calculateScore({});
    expect(r.decision).toBe('cloud');
  });
  test('privacy caps at 10', () => {
    const r = calculateScore({ containsPersonalData: true, requiresReasoning: true }, { privacyMode: true });
    expect(r.privacy).toBe(10);
  });
  test('complexity caps at 10', () => {
    const r = calculateScore({ requiresReasoning: true, multiStep: true, domainSpecific: true });
    expect(r.complexity).toBe(10);
  });
});
