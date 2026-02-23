# 🦋 Browserfly

<p align="center">
  <svg width="200" height="160" viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="readmeWingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#6C63FF"/>
        <stop offset="100%" style="stop-color:#00D4FF"/>
      </linearGradient>
      <linearGradient id="readmeWingGradLower" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#FF6B9D"/>
        <stop offset="100%" style="stop-color:#6C63FF"/>
      </linearGradient>
    </defs>
    <path d="M100,80 Q60,20 20,40 Q10,60 30,80 Q10,100 30,120 Q60,140 100,80" fill="url(#readmeWingGrad)"/>
    <path d="M100,80 Q140,20 180,40 Q190,60 170,80 Q190,100 170,120 Q140,140 100,80" fill="url(#readmeWingGrad)"/>
    <path d="M100,80 Q70,100 50,130 Q60,145 80,140 Q95,120 100,80" fill="url(#readmeWingGradLower)"/>
    <path d="M100,80 Q130,100 150,130 Q140,145 120,140 Q105,120 100,80" fill="url(#readmeWingGradLower)"/>
    <ellipse cx="100" cy="80" rx="6" ry="40" fill="#1A1A25"/>
  </svg>
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/tryboy869/browserfly?style=for-the-badge&logo=github&color=6C63FF" alt="GitHub Stars">
  <img src="https://img.shields.io/github/forks/tryboy869/browserfly?style=for-the-badge&logo=github&color=00D4FF" alt="GitHub Forks">
  <img src="https://img.shields.io/github/issues/tryboy869/browserfly?style=for-the-badge&color=FF6B9D" alt="GitHub Issues">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Stack-HTML%20Only-orange?style=for-the-badge&logo=html5" alt="HTML Only">
  <img src="https://img.shields.io/badge/Build-None%20Required-brightgreen?style=for-the-badge" alt="No Build">
  <img src="https://img.shields.io/badge/Design-Mobile%20First-blue?style=for-the-badge" alt="Mobile First">
  <img src="https://img.shields.io/badge/i18n-EN%20%2B%20FR-purple?style=for-the-badge" alt="Multilingual">
</p>

<p align="center">
  <img src="https://img.shields.io/badge/AI-Local%20%2B%20Cloud-ff6b9d?style=for-the-badge" alt="AI Powered">
  <img src="https://img.shields.io/github/actions/workflow/status/tryboy869/browserfly/ci.yml?style=for-the-badge&label=CI" alt="CI">
</p>

---

> **English:** Your AI agent lives in the browser. Local. Private. Yours.

> **Français:** Votre agent IA vit dans le navigateur. Local. Privé. À vous.

---

## ✨ Features / Fonctionnalités

| Feature | EN | FR |
|---------|-----|-----|
| 🦋 **Butterfly Theme** | Animated SVG butterfly mascot with wing-flap animations | Mascotte papillon SVG animée avec battements d'ailes |
| 🤖 **Multi-Provider** | Support for 8 cloud AI providers + HuggingFace local models | Support de 8 fournisseurs IA cloud + modèles locaux HuggingFace |
| 🔒 **Privacy First** | Local processing preference, IndexedDB storage | Privilège au traitement local, stockage IndexedDB |
| 🌐 **Multilingual** | Full English & French interface | Interface complète en anglais et français |
| 📱 **Mobile First** | Responsive from 320px to 4K | Responsive de 320px à 4K |
| ⚡ **Zero Build** | Single HTML file, open directly in browser | Un seul fichier HTML, ouverture directe |
| 📊 **Activity Logs** | Complete logging system with export | Système de journalisation complet avec export |
| 🔄 **Smart Routing** | Auto-route between local and cloud models | Routage automatique entre modèles locaux et cloud |

## 🚀 Quick Start / Démarrage Rapide

### English

1. **Clone or Download**
   ```bash
   git clone https://github.com/tryboy869/browserfly.git
   cd browserfly
   ```

2. **Open in Browser**
   ```bash
   # Simply open the HTML file
   open index.html
   # Or on Linux
   xdg-open index.html
   ```

3. **Configure**
   - Go to Configuration tab
   - Add your API keys for desired providers
   - Set primary and fallback models
   - Customize your Soul File

### Français

1. **Cloner ou Télécharger**
   ```bash
   git clone https://github.com/tryboy869/browserfly.git
   cd browserfly
   ```

2. **Ouvrir dans le Navigateur**
   ```bash
   # Ouvrez simplement le fichier HTML
   open index.html
   # Ou sur Linux
   xdg-open index.html
   ```

3. **Configurer**
   - Allez dans l'onglet Configuration
   - Ajoutez vos clés API pour les fournisseurs souhaités
   - Définissez les modèles principal et de secours
   - Personnalisez votre Fichier Soul

## 🤖 Supported AI Providers / Fournisseurs IA Supportés

| Provider | Status | Models Endpoint | Default Models |
|----------|--------|-----------------|----------------|
| **Groq** | ✅ Live | `/models` | Auto-fetched |
| **Moonshot/Kimi** | ✅ Live | `/models` | 6 models |
| **OpenAI** | ✅ Live | `/models` | Filtered GPT |
| **Anthropic** | ✅ Hardcoded | N/A | 3 Claude models |
| **Google Gemini** | ✅ Live | `/models` | Auto-fetched |
| **Mistral** | ✅ Live | `/models` | Auto-fetched |
| **Together AI** | ✅ Live | `/models` | Chat/Language |
| **Cohere** | ✅ Live | `/models` | Auto-fetched |
| **HuggingFace** | ✅ Search | `/api/models` | 7 recommended |

## 🏠 Local Models / Modèles Locaux

### Recommended Models / Modèles Recommandés

| Model | Size | RAM | Speed | Use Case |
|-------|------|-----|-------|----------|
| Qwen2.5-0.5B | ~1GB | 2GB | Very Fast | Quick tasks, mobile |
| Phi-2 | ~1.5GB | 3GB | Fast | Coding, reasoning |
| TinyLlama-1.1B | ~600MB | 2GB | Ultra Fast | Edge devices |
| Qwen2.5-3B | ~2GB | 4GB | Fast | Balanced |
| Mistral-7B | ~4GB | 8GB | Medium | High quality |
| Whisper Tiny | ~150MB | 1GB | Ultra Fast | Speech-to-text |
| Whisper Small | ~450MB | 2GB | Fast | Better STT |

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     BROWSERFLY (index.html)                  │
├─────────────────────────────────────────────────────────────┤
│  UI Layer                                                    │
│  ├── Header (Logo, Nav, Language Toggle)                    │
│  ├── Dashboard (Stats, Charts, Activity)                    │
│  ├── Models (Cloud + Local Browser)                         │
│  ├── Configuration (API Keys, Routing, Soul)                │
│  └── Activity Logs (Full logging system)                    │
├─────────────────────────────────────────────────────────────┤
│  Core Layer                                                  │
│  ├── ConfigManager (IndexedDB)                              │
│  ├── ActivityLogger (Event tracking)                        │
│  ├── Provider Fetchers (8 APIs)                             │
│  └── HuggingFace Browser                                    │
├─────────────────────────────────────────────────────────────┤
│  Storage Layer                                               │
│  └── IndexedDB (config, models, logs)                       │
└─────────────────────────────────────────────────────────────┘
```

## 🧪 Tests

```bash
# Install test dependencies
npm install vitest jsdom --save-dev

# Run tests
npx vitest run
```

## 🤝 Contributing / Contribution

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

Veuillez lire [CONTRIBUTING.md](CONTRIBUTING.md) pour plus de détails sur notre code de conduite et le processus de soumission des pull requests.

## 👤 Author / Auteur

<p align="center">
<svg width="860" height="320" viewBox="0 0 860 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="author-title author-desc">
  <title id="author-title">Daouda Abdoul Anzize — Computational Paradigm Designer</title>
  <desc id="author-desc">Animated author card for Daouda Abdoul Anzize, Nexus Studio</desc>
  <style>
    @media (prefers-reduced-motion: reduce) { * { animation: none !important; } }
    .star { animation: twinkle var(--d,3s) ease-in-out infinite; }
    @keyframes twinkle { 0%,100%{opacity:var(--o,.8)} 50%{opacity:.1} }
    @keyframes hexSpin { from{transform:rotate(0deg)translateX(0)} to{transform:rotate(360deg)translateX(0)} }
    @keyframes fadeUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
    @keyframes pulseGlow { 0%,100%{filter:drop-shadow(0 0 8px #6C63FF)} 50%{filter:drop-shadow(0 0 22px #00D4FF)} }
    @keyframes borderFlow { 0%{stroke-dashoffset:900} 100%{stroke-dashoffset:0} }
    .line1{animation:fadeUp .5s 0.3s both} .line2{animation:fadeUp .5s 0.7s both}
    .line3{animation:fadeUp .5s 1.1s both} .line4{animation:fadeUp .5s 1.4s both}
    .line5{animation:fadeUp .5s 1.7s both} .line6{animation:fadeUp .5s 2.0s both}
    .line7{animation:fadeUp .5s 2.3s both} .line8{animation:fadeUp .5s 2.6s both}
    .line9{animation:fadeUp .5s 2.9s both} .line10{animation:fadeUp .5s 3.2s both}
    .hex-outer{animation:pulseGlow 3s ease-in-out infinite}
    .border-rect{stroke-dasharray:900;animation:borderFlow 2.5s ease forwards}
  </style>
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0A0A0F"/>
      <stop offset="100%" stop-color="#12102A"/>
    </linearGradient>
    <linearGradient id="nameGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#6C63FF"/>
      <stop offset="100%" stop-color="#00D4FF"/>
    </linearGradient>
    <linearGradient id="hexGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#6C63FF"/>
      <stop offset="100%" stop-color="#FF6B9D"/>
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <!-- Background -->
  <rect width="860" height="320" rx="18" fill="url(#bgGrad)"/>
  <rect class="border-rect" width="858" height="318" x="1" y="1" rx="18" fill="none" stroke="url(#nameGrad)" stroke-width="1.5"/>
  <!-- Stars -->
  <circle class="star" cx="50" cy="30" r="1.2" fill="#6C63FF" style="--d:2.1s;--o:.7"/>
  <circle class="star" cx="120" cy="15" r="1" fill="#00D4FF" style="--d:3.4s;--o:.5"/>
  <circle class="star" cx="200" cy="45" r="1.5" fill="#FF6B9D" style="--d:2.8s;--o:.6"/>
  <circle class="star" cx="320" cy="12" r="1" fill="#6C63FF" style="--d:1.9s;--o:.8"/>
  <circle class="star" cx="500" cy="25" r="1.2" fill="#00D4FF" style="--d:3.1s;--o:.5"/>
  <circle class="star" cx="650" cy="18" r="1" fill="#FF6B9D" style="--d:2.5s;--o:.7"/>
  <circle class="star" cx="780" cy="40" r="1.5" fill="#6C63FF" style="--d:2.2s;--o:.6"/>
  <circle class="star" cx="830" cy="80" r="1" fill="#00D4FF" style="--d:3.8s;--o:.5"/>
  <circle class="star" cx="30" cy="200" r="1.2" fill="#FF6B9D" style="--d:2.7s;--o:.4"/>
  <circle class="star" cx="80" cy="280" r="1" fill="#6C63FF" style="--d:1.8s;--o:.6"/>
  <circle class="star" cx="750" cy="290" r="1.2" fill="#00D4FF" style="--d:3.3s;--o:.5"/>
  <circle class="star" cx="820" cy="250" r="1" fill="#FF6B9D" style="--d:2.0s;--o:.7"/>
  <!-- Left: Animated hexagon avatar -->
  <g transform="translate(130,160)">
    <g class="hex-outer">
      <polygon points="0,-75 65,-37 65,37 0,75 -65,37 -65,-37" fill="url(#hexGrad)" opacity="0.15"/>
      <polygon points="0,-75 65,-37 65,37 0,75 -65,37 -65,-37" fill="none" stroke="url(#hexGrad)" stroke-width="2"/>
    </g>
    <polygon points="0,-55 48,-27 48,27 0,55 -48,27 -48,-27" fill="none" stroke="#6C63FF" stroke-width="1" opacity="0.5"/>
    <!-- Initials DAA -->
    <text x="0" y="8" text-anchor="middle" font-family="'Courier New',monospace" font-size="28" font-weight="900" fill="url(#nameGrad)" filter="url(#glow)">DAA</text>
    <text x="0" y="30" text-anchor="middle" font-family="Arial,sans-serif" font-size="9" fill="#8888AA" letter-spacing="2">NEXUS STUDIO</text>
    <!-- Rotating orbit ring -->
    <circle cx="0" cy="0" r="85" fill="none" stroke="#6C63FF" stroke-width="0.5" stroke-dasharray="4 8" opacity="0.4">
      <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="12s" repeatCount="indefinite"/>
    </circle>
    <!-- Orbit dots -->
    <circle cx="85" cy="0" r="4" fill="#FF6B9D" filter="url(#glow)">
      <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="12s" repeatCount="indefinite"/>
    </circle>
    <circle cx="-85" cy="0" r="3" fill="#00D4FF" filter="url(#glow)">
      <animateTransform attributeName="transform" type="rotate" from="180" to="540" dur="12s" repeatCount="indefinite"/>
    </circle>
  </g>
  <!-- Divider -->
  <line x1="250" y1="40" x2="250" y2="280" stroke="#6C63FF" stroke-width="0.5" opacity="0.3"/>
  <!-- Right: Bio text -->
  <g transform="translate(280, 50)" font-family="'Inter','Arial',sans-serif" fill="#E8E8FF">
    <text class="line1" x="0" y="0" font-size="20" font-weight="800" fill="url(#nameGrad)" filter="url(#glow)">🌌 Daouda Abdoul Anzize</text>
    <text class="line2" x="0" y="28" font-size="13" fill="#8888AA" font-style="italic">Computational Paradigm Designer</text>
    <text class="line3" x="0" y="52" font-size="11" fill="#6C63FF">"I don't build apps. I build the clay others use to build apps."</text>
    <line x1="0" y1="65" x2="560" y2="65" stroke="#6C63FF" stroke-width="0.5" opacity="0.4"/>
    <text class="line4" x="0" y="88" font-size="12" fill="#00D4FF">📍 24 · Cotonou, Bénin → Global Remote</text>
    <text class="line5" x="0" y="112" font-size="12" fill="#E8E8FF">🧬 Meta-Architectures · Universal Protocols · AI Infrastructure · Emergent Computing</text>
    <text class="line6" x="0" y="140" font-size="11.5" fill="#8888AA" font-weight="600">🔬 Featured Research</text>
    <text class="line7" x="0" y="160" font-size="11" fill="#E8E8FF">⭐ NEXUS AXION  ·  ⚡ Nexus Backpressure Protocol  ·  🧠 Informatique Réalitaire  ·  🎮 Weak Hardware Booster</text>
    <text class="line8" x="0" y="184" font-size="11" fill="#8888AA">🛠 Python · Rust · C++ · JavaScript · Go — 40+ open-source projects</text>
    <line x1="0" y1="197" x2="560" y2="197" stroke="#6C63FF" stroke-width="0.5" opacity="0.4"/>
    <text class="line9" x="0" y="218" font-size="11" fill="#FF6B9D">📫 Open to Q1 2026 — Research labs · Protocol foundations · Fellowships · Remote roles</text>
    <text class="line10" x="0" y="242" font-size="11" fill="#8888AA">✉ anzizecontact@proton.me  ·  🐦 @Nexusstudio100  ·  🌐 tryboy869.github.io/daa</text>
  </g>
</svg>
</p>

## 📄 License / Licence

MIT License — Free to use, modify, distribute

Licence MIT — Libre d'utilisation, modification, distribution

```
Copyright (c) 2026 Daouda Abdoul Anzize (Nexus Studio)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<p align="center">
  <sub>Built with 🦋 by Daouda Abdoul Anzize — Nexus Studio — Cotonou, Bénin</sub>
</p>

<p align="center">
  <sub>2026 — Browserfly v1.0.0</sub>
</p>
