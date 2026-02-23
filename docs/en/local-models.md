# Local Models Guide

## Overview

Browserfly supports running AI models locally through HuggingFace's model repository. This guide explains how to discover, download, and use local models.

## Benefits of Local Models

1. **Privacy** - Data never leaves your device
2. **Offline Access** - Work without internet
3. **No API Costs** - Free after download
4. **Low Latency** - No network round-trips
5. **Customization** - Fine-tune for your needs

## Recommended Models

### Quick Tasks (Mobile-Friendly)

| Model | Size | RAM | Speed | Best For |
|-------|------|-----|-------|----------|
| Qwen2.5-0.5B | ~1GB | 2GB | Very Fast | Quick responses, mobile |
| TinyLlama-1.1B | ~600MB | 2GB | Ultra Fast | Edge devices, offline |
| Phi-2 | ~1.5GB | 3GB | Fast | Coding, reasoning |

### Balanced Performance

| Model | Size | RAM | Speed | Best For |
|-------|------|-----|-------|----------|
| Qwen2.5-3B | ~2GB | 4GB | Fast | General tasks |
| Mistral-7B | ~4GB | 8GB | Medium | Quality output |
| Llama-2-7B | ~4GB | 8GB | Medium | Versatile |

### Speech Recognition

| Model | Size | RAM | Speed | Best For |
|-------|------|-----|-------|----------|
| Whisper Tiny | ~150MB | 1GB | Ultra Fast | Basic STT |
| Whisper Small | ~450MB | 2GB | Fast | Better accuracy |
| Whisper Base | ~150MB | 1GB | Fast | Balanced STT |

## Model Formats

### GGUF (Recommended)

- Quantized format for CPU inference
- Smaller file sizes
- Good quality/speed tradeoff
- Look for `Q4_K_M` or `Q5_K_M` variants

### Safetensors

- HuggingFace's native format
- Full precision (FP16/FP32)
- Requires more RAM
- Best quality

### ONNX

- Cross-platform format
- Optimized for inference
- Good for deployment

## Downloading Models

### From Recommended List

1. Go to **Models** → **Local Models**
2. Browse the "Recommended Models" section
3. Click **Download Locally**
4. Wait for progress to complete

### Searching HuggingFace

1. Enter search query in the search box
2. Optionally filter by task or size
3. Click **Search**
4. Browse results and click **Download**

### Direct Model ID

1. Find model on [huggingface.co](https://huggingface.co)
2. Copy the model ID (e.g., `microsoft/phi-2`)
3. Search for it in Browserfly
4. Click **Download**

## Storage Location

Models are stored in:
- **IndexedDB** - For metadata and small files
- **Origin Private File System** - For model weights (when available)

**Note:** Full model weight storage requires browser support for OPFS API.

## RAM Requirements

### Estimating RAM Needs

```
Minimum RAM = Model Size × 1.5
Recommended RAM = Model Size × 2
```

Examples:
- 1GB model → 1.5-2GB RAM
- 4GB model → 6-8GB RAM
- 7GB model → 10-14GB RAM

### Optimizing for Low RAM

1. Use quantized models (GGUF Q4)
2. Close other browser tabs
3. Use smaller context windows
4. Consider cloud for large tasks

## Managing Installed Models

### Viewing Installed Models

1. Go to **Configuration** → **Local Model**
2. See "Installed Models" section
3. Shows size and installation date

### Activating a Model

1. Select from "Active Local Model" dropdown
2. Status updates to "Ready"
3. Model is now used for local inference

### Removing Models

1. Find model in "Installed Models" list
2. Click **Remove** button
3. Confirm deletion
4. Frees up storage space

## Performance Tips

### For Faster Inference

1. Use smaller models (0.5B-3B parameters)
2. Enable quantization (Q4, Q8)
3. Reduce context window
4. Close unnecessary applications

### For Better Quality

1. Use larger models (7B+ parameters)
2. Use full precision (FP16)
3. Increase context window
4. Use instruction-tuned variants

## Troubleshooting

### Download Fails

- Check available storage space
- Verify internet connection
- Try smaller model first
- Check HuggingFace status

### Model Won't Load

- Verify sufficient RAM
- Check model format compatibility
- Try re-downloading
- Check browser console for errors

### Slow Inference

- Use quantized model
- Reduce context window
- Close other tabs/apps
- Consider upgrading RAM

### Out of Memory

- Use smaller model
- Enable quantization
- Increase swap/virtual memory
- Use cloud provider instead

## Advanced: Custom Models

### Adding Custom Models

1. Find model on HuggingFace
2. Note the model ID
3. Search in Browserfly
4. Download if compatible

### Model Compatibility

Browserfly supports:
- Text generation models
- Chat/instruction models
- Speech recognition (Whisper)
- Text-to-text models

Not yet supported:
- Vision models (planned)
- Embedding models (planned)
- Diffusion models (future)

## Security Considerations

### Model Sources

- Only download from trusted sources
- Verify model publisher
- Check download counts and ratings
- Review model card for details

### Local Execution

- Models run in browser sandbox
- No network access required after download
- Data stays on your device
- No telemetry or tracking
