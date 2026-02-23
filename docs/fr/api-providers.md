# Documentation des Fournisseurs API

## Fournisseurs Supportés

### 1. Groq

**Site Web :** [groq.com](https://groq.com)

**Point de Terminaison API :** `https://api.groq.com/openai/v1/models`

**Authentification :** Jeton Bearer dans l'en-tête Authorization

**Fonctionnalités :**
- Inférence ultra-rapide (jusqu'à 500 tokens/sec)
- Modèles Mixtral, Llama et Gemma
- API compatible OpenAI

**Obtention de la Clé API :**
1. Inscrivez-vous sur [console.groq.com](https://console.groq.com)
2. Créez une nouvelle clé API
3. Copiez la clé dans la Configuration Browserfly

---

### 2. Moonshot AI / Kimi

**Site Web :** [moonshot.ai](https://moonshot.ai)

**Point de Terminaison API :** `https://api.moonshot.ai/v1/models`

**Authentification :** Jeton Bearer dans l'en-tête Authorization

**Modèles :**
- `kimi-k2-0711-preview` - 128k contexte, agentique
- `kimi-k2-0905-preview` - 256k contexte
- `kimi-k2-thinking` - Raisonnement profond
- `moonshot-v1-8k` - Chat rapide
- `moonshot-v1-32k` - Long contexte
- `moonshot-v1-128k` - Très long contexte

**Obtention de la Clé API :**
1. Inscrivez-vous sur [platform.moonshot.ai](https://platform.moonshot.ai)
2. Générez la clé API depuis le tableau de bord
3. Ajoutez à la Configuration Browserfly

---

### 3. OpenAI

**Site Web :** [openai.com](https://openai.com)

**Point de Terminaison API :** `https://api.openai.com/v1/models`

**Authentification :** Jeton Bearer dans l'en-tête Authorization

**Modèles :**
- `gpt-4o` - Multimodal phare
- `gpt-4o-mini` - Rapide, abordable
- `gpt-4-turbo` - Raisonnement avancé
- `o1` / `o1-mini` - Modèles de raisonnement
- `o3-mini` - Dernier raisonnement

**Obtention de la Clé API :**
1. Inscrivez-vous sur [platform.openai.com](https://platform.openai.com)
2. Allez dans la section Clés API
3. Créez une nouvelle clé secrète

---

### 4. Anthropic (Claude)

**Site Web :** [anthropic.com](https://anthropic.com)

**Note :** Anthropic ne fournit pas de point de terminaison `/models`. Les modèles sont codés en dur dans Browserfly.

**Modèles :**
- `claude-opus-4-6` - Le plus puissant, 15$/M entrée
- `claude-sonnet-4-6` - Équilibré, 3$/M entrée
- `claude-haiku-4-5` - Rapide/abordable, 0,25$/M entrée

**Obtention de la Clé API :**
1. Inscrivez-vous sur [console.anthropic.com](https://console.anthropic.com)
2. Générez la clé API
3. Ajoutez à Browserfly (pas de récupération nécessaire)

---

### 5. Google Gemini

**Site Web :** [ai.google.dev](https://ai.google.dev)

**Point de Terminaison API :** `https://generativelanguage.googleapis.com/v1beta/models`

**Authentification :** Clé API comme paramètre de requête

**Modèles :**
- `gemini-1.5-pro` - Raisonnement avancé
- `gemini-1.5-flash` - Réponses rapides
- `gemini-1.0-pro` - Usage général

**Obtention de la Clé API :**
1. Allez sur [Google AI Studio](https://aistudio.google.com)
2. Créez une clé API
3. Copiez dans la Configuration Browserfly

---

### 6. Mistral AI

**Site Web :** [mistral.ai](https://mistral.ai)

**Point de Terminaison API :** `https://api.mistral.ai/v1/models`

**Authentification :** Jeton Bearer dans l'en-tête Authorization

**Modèles :**
- `mistral-large-latest` - Le plus capable
- `mistral-medium-latest` - Équilibré
- `mistral-small-latest` - Rapide, efficace
- `codestral-latest` - Génération de code

**Obtention de la Clé API :**
1. Inscrivez-vous sur [console.mistral.ai](https://console.mistral.ai)
2. Créez la clé API depuis le tableau de bord
3. Ajoutez à Browserfly

---

### 7. Together AI

**Site Web :** [together.ai](https://together.ai)

**Point de Terminaison API :** `https://api.together.xyz/v1/models`

**Authentification :** Jeton Bearer dans l'en-tête Authorization

**Fonctionnalités :**
- Accès à 100+ modèles open-source
- Capacités de fine-tuning
- Tarification compétitive

**Obtention de la Clé API :**
1. Inscrivez-vous sur [api.together.xyz](https://api.together.xyz)
2. Générez la clé API
3. Ajoutez à la Configuration Browserfly

---

### 8. Cohere

**Site Web :** [cohere.com](https://cohere.com)

**Point de Terminaison API :** `https://api.cohere.com/v1/models`

**Authentification :** Jeton Bearer dans l'en-tête Authorization

**Modèles :**
- `command-r` - Conversationnel
- `command-r-plus` - Avancé
- `embed` - Embeddings

**Obtention de la Clé API :**
1. Inscrivez-vous sur [dashboard.cohere.com](https://dashboard.cohere.com)
2. Allez dans Clés API
3. Créez et copiez la clé

---

## Comparaison des Fournisseurs

| Fournisseur | Vitesse | Coût | Contexte | Idéal Pour |
|-------------|---------|------|----------|------------|
| Groq | ⚡⚡⚡ | $ | 8k-32k | Apps critiques vitesse |
| Kimi | ⚡⚡ | $$ | 128k-256k | Documents longs |
| OpenAI | ⚡⚡ | $$$ | 128k | Usage général |
| Anthropic | ⚡⚡ | $$$ | 200k | Raisonnement complexe |
| Google | ⚡⚡ | $$ | 128k-1M | Multimodal |
| Mistral | ⚡⚡ | $$ | 32k | Conformité européenne |
| Together | ⚡ | $ | Variable | Modèles open-source |
| Cohere | ⚡⚡ | $$ | 128k | Entreprise |

## Dépannage

### 401 Non Autorisé
- Vérifiez que la clé API est correcte
- Vérifiez que la clé n'a pas expiré
- Assurez-vous que la facturation est configurée

### 429 Taux Limité
- Réduisez la fréquence des requêtes
- Vérifiez les limites de taux du fournisseur
- Envisagez de mettre à niveau le forfait

### Erreurs CORS
- Assurez-vous d'utiliser HTTPS
- Vérifiez la politique CORS du fournisseur
- Certains fournisseurs nécessitent un proxy

### Modèles Ne Se Chargent Pas
- Vérifiez que la clé API est enregistrée
- Vérifiez la connexion réseau
- Essayez d'actualiser la page
