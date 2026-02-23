# Architecture de Browserfly

## Vue d'Ensemble

Browserfly est une application HTML monofichier qui fournit une interface basée sur navigateur pour gérer des modèles d'IA de plusieurs fournisseurs cloud et des modèles locaux HuggingFace.

## Composants Principaux

### 1. ConfigManager (IndexedDB)

La classe `ConfigManager` gère tout le stockage persistant en utilisant IndexedDB :

```javascript
class ConfigManager {
  // Stocke la configuration, les clés API, les modèles et les journaux
  // Utilise les magasins d'objets : 'config', 'models', 'logs'
}
```

**Fonctionnalités :**
- Opérations asynchrones get/set/delete
- Stockage sécurisé des clés API (pas dans localStorage)
- Supporte les structures de données complexes
- Basé sur les transactions pour l'intégrité des données

### 2. ActivityLogger

Système de journalisation centralisé pour tous les événements de l'application :

```javascript
class ActivityLogger {
  // Journalise toutes les actions avec horodatage, niveau et détails
  // Supporte le filtrage par niveau, recherche, plage de dates
  // Exporte au format CSV
}
```

**Niveaux de Journal :**
- `info` - Informations générales
- `success` - Opérations réussies
- `warning` - Problèmes non critiques
- `error` - Erreurs critiques
- `debug` - Débogage de développement

### 3. Récupérateurs de Fournisseurs

Chaque fournisseur cloud a un objet de configuration définissant :
- URL de base de l'API
- En-têtes d'authentification
- Fonction d'analyse des modèles
- Modèles par défaut (si l'API ne fournit pas de liste)

**Fournisseurs Supportés :**
1. Groq - Inférence ultra-rapide
2. Moonshot/Kimi - LLM chinois avec long contexte
3. OpenAI - Modèles GPT
4. Anthropic - Modèles Claude (codés en dur)
5. Google Gemini - Modèles multimodaux de Google
6. Mistral - LLM européen
7. Together AI - Plateforme d'agrégation de modèles
8. Cohere - LLM d'entreprise

### 4. Navigateur HuggingFace

Rechercher et parcourir les modèles HuggingFace :
- Recherche par requête
- Filtrage par type de tâche
- Filtrage par taille de modèle
- Simulation de téléchargement avec progression

### 5. Routeur de Tâches (Web Worker)

Route les requêtes entre les modèles locaux et cloud basé sur :
- Exigences de confidentialité
- Complexité de la tâche
- Urgence
- Disponibilité du modèle local

## Flux de Données

```
Action Utilisateur → ActivityLogger.log() → ConfigManager (IndexedDB)
     ↓
Mise à jour UI ← Distribution d'Événement (bf:log)
     ↓
Mise à jour Temps Réel du Flux d'Activité
```

## Considérations de Sécurité

1. **Clés API** : Stockées dans IndexedDB, jamais dans localStorage
2. **Pas de Serveur** : Tout le traitement se fait côté client
3. **CORS** : Les appels API vont directement aux points de terminaison des fournisseurs
4. **HTTPS** : Requis pour la communication API sécurisée

## Optimisations de Performance

1. **Chargement Paresseux** : Les modèles sont récupérés sur demande
2. **Mise en Cache** : Les modèles récupérés sont stockés en mémoire
3. **Anti-rebond** : L'entrée de recherche est anti-rebondie
4. **Défilement Virtuel** : Les grandes listes utilisent un rendu efficace

## Compatibilité Navigateur

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

APIs Requises :
- IndexedDB
- Fetch API
- CSS Grid/Flexbox
- Propriétés CSS Personnalisées
