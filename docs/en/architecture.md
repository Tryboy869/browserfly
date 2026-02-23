# Browserfly Architecture

## Overview

Browserfly is a single-file HTML application that provides a browser-based interface for managing AI models from multiple cloud providers and local HuggingFace models.

## Core Components

### 1. ConfigManager (IndexedDB)

The `ConfigManager` class handles all persistent storage using IndexedDB:

```javascript
class ConfigManager {
  // Stores configuration, API keys, models, and logs
  // Uses object stores: 'config', 'models', 'logs'
}
```

**Features:**
- Async get/set/delete operations
- Stores API keys securely (not in localStorage)
- Supports complex data structures
- Transaction-based for data integrity

### 2. ActivityLogger

Centralized logging system for all application events:

```javascript
class ActivityLogger {
  // Logs all actions with timestamp, level, and details
  // Supports filtering by level, search, date range
  // Exports to CSV format
}
```

**Log Levels:**
- `info` - General information
- `success` - Successful operations
- `warning` - Non-critical issues
- `error` - Critical errors
- `debug` - Development debugging

### 3. Provider Fetchers

Each cloud provider has a configuration object defining:
- API base URL
- Authentication headers
- Model parsing function
- Default models (if API doesn't provide list)

**Supported Providers:**
1. Groq - Ultra-fast inference
2. Moonshot/Kimi - Chinese LLM with long context
3. OpenAI - GPT models
4. Anthropic - Claude models (hardcoded)
5. Google Gemini - Google's multimodal models
6. Mistral - European LLM
7. Together AI - Model aggregation platform
8. Cohere - Enterprise LLM

### 4. HuggingFace Browser

Search and browse HuggingFace models:
- Search by query
- Filter by task type
- Filter by model size
- Download simulation with progress

### 5. Task Router (Web Worker)

Routes requests between local and cloud models based on:
- Privacy requirements
- Task complexity
- Urgency
- Local model availability

## Data Flow

```
User Action → ActivityLogger.log() → ConfigManager (IndexedDB)
     ↓
UI Update ← Event Dispatch (bf:log)
     ↓
Real-time Activity Feed Update
```

## Security Considerations

1. **API Keys**: Stored in IndexedDB, never in localStorage
2. **No Server**: All processing happens client-side
3. **CORS**: API calls go directly to provider endpoints
4. **HTTPS**: Required for secure API communication

## Performance Optimizations

1. **Lazy Loading**: Models fetched on demand
2. **Caching**: Fetched models stored in memory
3. **Debouncing**: Search input debounced
4. **Virtual Scrolling**: Large lists use efficient rendering

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Required APIs:
- IndexedDB
- Fetch API
- CSS Grid/Flexbox
- CSS Custom Properties
