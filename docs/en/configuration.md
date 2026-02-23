# Configuration Guide

## Overview

Browserfly configuration is stored in IndexedDB and persists across browser sessions. This guide explains all configuration options.

## API Keys

### Adding API Keys

1. Navigate to **Configuration** → **API Keys**
2. Enter your API key for each provider
3. Click **Verify** to test the key
4. Key is automatically saved on change

### Security

- API keys are stored in IndexedDB (not localStorage)
- Keys are masked in the input field
- Keys are never logged or sent to any server except the provider's API

### Supported Providers

See [API Providers](api-providers.md) for detailed setup instructions for each provider.

## Routing Rules

### Primary and Fallback Providers

Configure which providers to use:

- **Primary Provider**: First choice for cloud requests
- **Fallback Provider**: Used if primary fails

### Auto-Routing Rules

| Rule | Description |
|------|-------------|
| Privacy Mode | Always use local model |
| Complexity Threshold | Use cloud if complexity > 7/10 |
| Fallback on Error | Switch to fallback on failure |
| Force Local | Always use local (offline mode) |

### Complexity Scoring

Weights for routing decisions:

| Factor | Default | Description |
|--------|---------|-------------|
| Requires Reasoning | +4 | Complex logical tasks |
| Multi-step Task | +3 | Multi-stage workflows |
| Domain-specific | +3 | Specialized knowledge |
| Personal Data | +5 | Privacy-sensitive content |

**Routing Logic:**
```
if (privacyScore >= 8) → local
else if (complexity >= 7) → cloud
else if (complexity <= 3 && urgency >= 7) → local
else if (localModelReady && complexity <= 5) → local
else → cloud
```

## Local Model

### Installing Models

1. Go to **Models** → **Local Models (HuggingFace)**
2. Browse recommended models or search
3. Click **Download Locally**
4. Wait for download to complete

### Model Size Guidelines

| Size | RAM Required | Best For |
|------|--------------|----------|
| <1GB | 2GB | Mobile, edge devices |
| 1-4GB | 4GB | Laptops, basic tasks |
| 4-8GB | 8GB | Desktops, quality output |
| >8GB | 16GB+ GPU | High-end workstations |

### Activating Models

1. Go to **Configuration** → **Local Model**
2. Select from **Active Local Model** dropdown
3. Model status shows "Ready" when active

## Soul File

### What is the Soul File?

The Soul File defines your AI agent's personality, goals, and values. It's stored as JSON and editable in the Configuration tab.

### Default Structure

```json
{
  "name": "Fly",
  "version": "1.0",
  "identity": {
    "personality": "Helpful, efficient, privacy-focused AI agent",
    "language": "auto",
    "tone": "professional"
  },
  "goals": [
    "Assist user with tasks efficiently",
    "Protect user privacy",
    "Learn from interactions"
  ],
  "values": ["privacy", "efficiency", "transparency"],
  "memory": {
    "maxEntries": 1000,
    "retentionDays": 30
  }
}
```

### Customizing

1. Go to **Configuration** → **Soul File**
2. Edit the JSON
3. Click **Save**
4. Use **Reset to Default** if needed

### Fields Reference

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Agent name |
| `identity.personality` | string | Character description |
| `identity.language` | string | "auto" or language code |
| `identity.tone` | string | "professional", "casual", "friendly" |
| `goals` | array | Agent objectives |
| `values` | array | Core principles |
| `memory.maxEntries` | number | Max memory items |
| `memory.retentionDays` | number | Days to keep memory |

## Integrations

### Telegram Bot

1. Create bot with [@BotFather](https://t.me/botfather)
2. Copy bot token
3. Paste in Configuration → Integrations
4. Click **Verify**

### GitHub

1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate new token with repo access
3. Paste in Configuration → Integrations
4. Click **Verify**

### Other Integrations

Notion, Discord, and Slack integrations are planned for future releases.

## Language Settings

### Switching Language

1. Click **EN** or **FR** in the header
2. Interface updates immediately
3. Preference is saved to IndexedDB

### Adding Translations

To add a new language:

1. Edit `TRANSLATIONS` object in `index.html`
2. Add new language key (e.g., `es` for Spanish)
3. Copy all keys from English
4. Translate values
5. Add language button to header

## Backup and Restore

### Exporting Configuration

Currently, export configuration by:
1. Opening browser DevTools (F12)
2. Going to Application → IndexedDB
3. Exporting the `browserfly-config` database

### Importing Configuration

1. Clear existing IndexedDB data
2. Import your backup
3. Refresh the page

## Troubleshooting

### Configuration Not Saving
- Check browser supports IndexedDB
- Ensure not in private/incognito mode
- Check available storage quota

### API Keys Not Working
- Verify key is correct
- Check key hasn't expired
- Ensure provider account is active

### Models Not Loading
- Check internet connection
- Verify API key is saved
- Check provider status page
