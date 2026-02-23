# Guide de Configuration

## Vue d'Ensemble

La configuration de Browserfly est stockée dans IndexedDB et persiste entre les sessions de navigateur. Ce guide explique toutes les options de configuration.

## Clés API

### Ajouter des Clés API

1. Naviguez vers **Configuration** → **Clés API**
2. Entrez votre clé API pour chaque fournisseur
3. Cliquez sur **Vérifier** pour tester la clé
4. La clé est automatiquement enregistrée lors du changement

### Sécurité

- Les clés API sont stockées dans IndexedDB (pas localStorage)
- Les clés sont masquées dans le champ de saisie
- Les clés ne sont jamais journalisées ou envoyées à aucun serveur sauf l'API du fournisseur

### Fournisseurs Supportés

Voir [Fournisseurs API](api-providers.md) pour les instructions détaillées de configuration de chaque fournisseur.

## Règles de Routage

### Fournisseurs Principal et de Secours

Configurez quels fournisseurs utiliser :

- **Fournisseur Principal** : Premier choix pour les requêtes cloud
- **Fournisseur de Secours** : Utilisé si le principal échoue

### Règles de Routage Auto

| Règle | Description |
|-------|-------------|
| Mode Confidentialité | Toujours utiliser le modèle local |
| Seuil de Complexité | Utiliser le cloud si complexité > 7/10 |
| Secours en Erreur | Basculer vers le secours en cas d'échec |
| Forcer Local | Toujours utiliser le local (mode hors-ligne) |

### Scoring de Complexité

Poids pour les décisions de routage :

| Facteur | Défaut | Description |
|---------|--------|-------------|
| Nécessite Raisonnement | +4 | Tâches logiques complexes |
| Tâche Multi-étapes | +3 | Workflows multi-étapes |
| Spécifique au Domaine | +3 | Connaissances spécialisées |
| Données Personnelles | +5 | Contenu sensible confidentialité |

**Logique de Routage :**
```
if (privacyScore >= 8) → local
else if (complexity >= 7) → cloud
else if (complexity <= 3 && urgency >= 7) → local
else if (localModelReady && complexity <= 5) → local
else → cloud
```

## Modèle Local

### Installer des Modèles

1. Allez dans **Modèles** → **Modèles Locaux (HuggingFace)**
2. Parcourez les modèles recommandés ou recherchez
3. Cliquez sur **Télécharger en Local**
4. Attendez la fin du téléchargement

### Directives de Taille de Modèle

| Taille | RAM Requise | Idéal Pour |
|--------|-------------|------------|
| <1GB | 2GB | Mobile, appareils edge |
| 1-4GB | 4GB | Laptops, tâches basiques |
| 4-8GB | 8GB | Desktops, sortie qualité |
| >8GB | 16GB+ GPU | Stations haut de gamme |

### Activer des Modèles

1. Allez dans **Configuration** → **Modèle Local**
2. Sélectionnez dans la liste déroulante **Modèle Local Actif**
3. Le statut du modèle affiche "Prêt" quand actif

## Fichier Soul

### Qu'est-ce que le Fichier Soul ?

Le Fichier Soul définit la personnalité, les objectifs et les valeurs de votre agent IA. Il est stocké en JSON et modifiable dans l'onglet Configuration.

### Structure par Défaut

```json
{
  "name": "Fly",
  "version": "1.0",
  "identity": {
    "personality": "Agent IA utile, efficace, axé sur la confidentialité",
    "language": "auto",
    "tone": "professional"
  },
  "goals": [
    "Assister l'utilisateur efficacement",
    "Protéger la confidentialité de l'utilisateur",
    "Apprendre des interactions"
  ],
  "values": ["privacy", "efficiency", "transparency"],
  "memory": {
    "maxEntries": 1000,
    "retentionDays": 30
  }
}
```

### Personnalisation

1. Allez dans **Configuration** → **Fichier Soul**
2. Éditez le JSON
3. Cliquez sur **Enregistrer**
4. Utilisez **Réinitialiser** si nécessaire

### Référence des Champs

| Champ | Type | Description |
|-------|------|-------------|
| `name` | string | Nom de l'agent |
| `identity.personality` | string | Description du caractère |
| `identity.language` | string | "auto" ou code langue |
| `identity.tone` | string | "professional", "casual", "friendly" |
| `goals` | array | Objectifs de l'agent |
| `values` | array | Principes fondamentaux |
| `memory.maxEntries` | number | Max éléments mémoire |
| `memory.retentionDays` | number | Jours de conservation mémoire |

## Intégrations

### Bot Telegram

1. Créez un bot avec [@BotFather](https://t.me/botfather)
2. Copiez le jeton du bot
3. Collez dans Configuration → Intégrations
4. Cliquez sur **Vérifier**

### GitHub

1. Allez dans Paramètres GitHub → Paramètres développeur → Jetons d'accès personnels
2. Générez un nouveau jeton avec accès repo
3. Collez dans Configuration → Intégrations
4. Cliquez sur **Vérifier**

### Autres Intégrations

Les intégrations Notion, Discord et Slack sont prévues pour les futures versions.

## Paramètres de Langue

### Changer de Langue

1. Cliquez sur **EN** ou **FR** dans l'en-tête
2. L'interface se met à jour immédiatement
3. La préférence est enregistrée dans IndexedDB

### Ajouter des Traductions

Pour ajouter une nouvelle langue :

1. Éditez l'objet `TRANSLATIONS` dans `index.html`
2. Ajoutez une nouvelle clé de langue (ex: `es` pour Espagnol)
3. Copiez toutes les clés de l'anglais
4. Traduisez les valeurs
5. Ajoutez le bouton de langue à l'en-tête

## Sauvegarde et Restauration

### Exporter la Configuration

Actuellement, exportez la configuration en :
1. Ouvrant les DevTools du navigateur (F12)
2. Allant dans Application → IndexedDB
3. Exportant la base de données `browserfly-config`

### Importer la Configuration

1. Effacez les données IndexedDB existantes
2. Importez votre sauvegarde
3. Rafraîchissez la page

## Dépannage

### Configuration Non Enregistrée
- Vérifiez que le navigateur supporte IndexedDB
- Assurez-vous de ne pas être en mode privé/incognito
- Vérifiez le quota de stockage disponible

### Clés API Non Fonctionnelles
- Vérifiez que la clé est correcte
- Vérifiez que la clé n'a pas expiré
- Assurez-vous que le compte fournisseur est actif

### Modèles Ne Se Chargent Pas
- Vérifiez la connexion internet
- Vérifiez que la clé API est enregistrée
- Vérifiez la page de statut du fournisseur
