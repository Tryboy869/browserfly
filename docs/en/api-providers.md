# API Providers Documentation

## Supported Providers

### 1. Groq

**Website:** [groq.com](https://groq.com)

**API Endpoint:** `https://api.groq.com/openai/v1/models`

**Authentication:** Bearer token in Authorization header

**Features:**
- Ultra-fast inference (up to 500 tokens/sec)
- Mixtral, Llama, and Gemma models
- OpenAI-compatible API

**Getting API Key:**
1. Sign up at [console.groq.com](https://console.groq.com)
2. Create a new API key
3. Copy the key to Browserfly Configuration

---

### 2. Moonshot AI / Kimi

**Website:** [moonshot.ai](https://moonshot.ai)

**API Endpoint:** `https://api.moonshot.ai/v1/models`

**Authentication:** Bearer token in Authorization header

**Models:**
- `kimi-k2-0711-preview` - 128k context, agentic
- `kimi-k2-0905-preview` - 256k context
- `kimi-k2-thinking` - Deep reasoning
- `moonshot-v1-8k` - Fast chat
- `moonshot-v1-32k` - Long context
- `moonshot-v1-128k` - Very long context

**Getting API Key:**
1. Sign up at [platform.moonshot.ai](https://platform.moonshot.ai)
2. Generate API key from dashboard
3. Add to Browserfly Configuration

---

### 3. OpenAI

**Website:** [openai.com](https://openai.com)

**API Endpoint:** `https://api.openai.com/v1/models`

**Authentication:** Bearer token in Authorization header

**Models:**
- `gpt-4o` - Multimodal flagship
- `gpt-4o-mini` - Fast, affordable
- `gpt-4-turbo` - Advanced reasoning
- `o1` / `o1-mini` - Reasoning models
- `o3-mini` - Latest reasoning

**Getting API Key:**
1. Sign up at [platform.openai.com](https://platform.openai.com)
2. Go to API keys section
3. Create new secret key

---

### 4. Anthropic (Claude)

**Website:** [anthropic.com](https://anthropic.com)

**Note:** Anthropic does not provide a `/models` endpoint. Models are hardcoded in Browserfly.

**Models:**
- `claude-opus-4-6` - Most powerful, $15/M input
- `claude-sonnet-4-6` - Balanced, $3/M input
- `claude-haiku-4-5` - Fast/cheap, $0.25/M input

**Getting API Key:**
1. Sign up at [console.anthropic.com](https://console.anthropic.com)
2. Generate API key
3. Add to Browserfly (no fetch needed)

---

### 5. Google Gemini

**Website:** [ai.google.dev](https://ai.google.dev)

**API Endpoint:** `https://generativelanguage.googleapis.com/v1beta/models`

**Authentication:** API key as query parameter

**Models:**
- `gemini-1.5-pro` - Advanced reasoning
- `gemini-1.5-flash` - Fast responses
- `gemini-1.0-pro` - General purpose

**Getting API Key:**
1. Go to [Google AI Studio](https://aistudio.google.com)
2. Create API key
3. Copy to Browserfly Configuration

---

### 6. Mistral AI

**Website:** [mistral.ai](https://mistral.ai)

**API Endpoint:** `https://api.mistral.ai/v1/models`

**Authentication:** Bearer token in Authorization header

**Models:**
- `mistral-large-latest` - Most capable
- `mistral-medium-latest` - Balanced
- `mistral-small-latest` - Fast, efficient
- `codestral-latest` - Code generation

**Getting API Key:**
1. Sign up at [console.mistral.ai](https://console.mistral.ai)
2. Create API key from dashboard
3. Add to Browserfly

---

### 7. Together AI

**Website:** [together.ai](https://together.ai)

**API Endpoint:** `https://api.together.xyz/v1/models`

**Authentication:** Bearer token in Authorization header

**Features:**
- Access to 100+ open-source models
- Fine-tuning capabilities
- Competitive pricing

**Getting API Key:**
1. Sign up at [api.together.xyz](https://api.together.xyz)
2. Generate API key
3. Add to Browserfly Configuration

---

### 8. Cohere

**Website:** [cohere.com](https://cohere.com)

**API Endpoint:** `https://api.cohere.com/v1/models`

**Authentication:** Bearer token in Authorization header

**Models:**
- `command-r` - Conversational
- `command-r-plus` - Advanced
- `embed` - Embeddings

**Getting API Key:**
1. Sign up at [dashboard.cohere.com](https://dashboard.cohere.com)
2. Go to API keys
3. Create and copy key

---

## Provider Comparison

| Provider | Speed | Cost | Context | Best For |
|----------|-------|------|---------|----------|
| Groq | ⚡⚡⚡ | $ | 8k-32k | Speed-critical apps |
| Kimi | ⚡⚡ | $$ | 128k-256k | Long documents |
| OpenAI | ⚡⚡ | $$$ | 128k | General purpose |
| Anthropic | ⚡⚡ | $$$ | 200k | Complex reasoning |
| Google | ⚡⚡ | $$ | 128k-1M | Multimodal |
| Mistral | ⚡⚡ | $$ | 32k | European compliance |
| Together | ⚡ | $ | Varies | Open-source models |
| Cohere | ⚡⚡ | $$ | 128k | Enterprise |

## Troubleshooting

### 401 Unauthorized
- Check API key is correct
- Verify key has not expired
- Ensure billing is set up

### 429 Rate Limited
- Reduce request frequency
- Check provider rate limits
- Consider upgrading plan

### CORS Errors
- Ensure using HTTPS
- Check provider CORS policy
- Some providers require proxy

### Models Not Loading
- Verify API key is saved
- Check network connection
- Try refreshing the page
