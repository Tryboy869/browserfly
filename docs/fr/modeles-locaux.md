# Guide des Modèles Locaux

## Vue d'Ensemble

Browserfly supporte l'exécution de modèles d'IA localement via le dépôt de modèles HuggingFace. Ce guide explique comment découvrir, télécharger et utiliser des modèles locaux.

## Avantages des Modèles Locaux

1. **Confidentialité** - Les données ne quittent jamais votre appareil
2. **Accès Hors-ligne** - Travaillez sans internet
3. **Pas de Coûts API** - Gratuit après téléchargement
4. **Faible Latence** - Pas d'aller-retour réseau
5. **Personnalisation** - Fine-tuning pour vos besoins

## Modèles Recommandés

### Tâches Rapides (Mobile-Friendly)

| Modèle | Taille | RAM | Vitesse | Idéal Pour |
|--------|--------|-----|---------|------------|
| Qwen2.5-0.5B | ~1GB | 2GB | Très Rapide | Réponses rapides, mobile |
| TinyLlama-1.1B | ~600MB | 2GB | Ultra Rapide | Appareils edge, hors-ligne |
| Phi-2 | ~1.5GB | 3GB | Rapide | Codage, raisonnement |

### Performance Équilibrée

| Modèle | Taille | RAM | Vitesse | Idéal Pour |
|--------|--------|-----|---------|------------|
| Qwen2.5-3B | ~2GB | 4GB | Rapide | Tâches générales |
| Mistral-7B | ~4GB | 8GB | Moyen | Sortie qualité |
| Llama-2-7B | ~4GB | 8GB | Moyen | Polyvalent |

### Reconnaissance Vocale

| Modèle | Taille | RAM | Vitesse | Idéal Pour |
|--------|--------|-----|---------|------------|
| Whisper Tiny | ~150MB | 1GB | Ultra Rapide | STT basique |
| Whisper Small | ~450MB | 2GB | Rapide | Meilleure précision |
| Whisper Base | ~150MB | 1GB | Rapide | STT équilibré |

## Formats de Modèle

### GGUF (Recommandé)

- Format quantifié pour inférence CPU
- Tailles de fichier plus petites
- Bon compromis qualité/vitesse
- Cherchez les variantes `Q4_K_M` ou `Q5_K_M`

### Safetensors

- Format natif HuggingFace
- Précision complète (FP16/FP32)
- Nécessite plus de RAM
- Meilleure qualité

### ONNX

- Format multi-plateforme
- Optimisé pour l'inférence
- Bon pour le déploiement

## Télécharger des Modèles

### Depuis la Liste Recommandée

1. Allez dans **Modèles** → **Modèles Locaux**
2. Parcourez la section "Modèles Recommandés"
3. Cliquez sur **Télécharger en Local**
4. Attendez la fin de la progression

### Rechercher sur HuggingFace

1. Entrez la requête dans la boîte de recherche
2. Filtrez optionnellement par tâche ou taille
3. Cliquez sur **Rechercher**
4. Parcourez les résultats et cliquez sur **Télécharger**

### ID de Modèle Direct

1. Trouvez le modèle sur [huggingface.co](https://huggingface.co)
2. Copiez l'ID du modèle (ex: `microsoft/phi-2`)
3. Recherchez-le dans Browserfly
4. Cliquez sur **Télécharger**

## Emplacement de Stockage

Les modèles sont stockés dans :
- **IndexedDB** - Pour les métadonnées et petits fichiers
- **Origin Private File System** - Pour les poids du modèle (quand disponible)

**Note :** Le stockage complet des poids du modèle nécessite le support navigateur de l'API OPFS.

## Besoins en RAM

### Estimation des Besoins RAM

```
RAM Minimum = Taille Modèle × 1.5
RAM Recommandée = Taille Modèle × 2
```

Exemples :
- Modèle 1GB → 1.5-2GB RAM
- Modèle 4GB → 6-8GB RAM
- Modèle 7GB → 10-14GB RAM

### Optimisation pour Faible RAM

1. Utilisez des modèles quantifiés (GGUF Q4)
2. Fermez les autres onglets du navigateur
3. Utilisez des fenêtres de contexte plus petites
4. Envisagez le cloud pour les grandes tâches

## Gestion des Modèles Installés

### Voir les Modèles Installés

1. Allez dans **Configuration** → **Modèle Local**
2. Voir la section "Modèles Installés"
3. Affiche la taille et la date d'installation

### Activer un Modèle

1. Sélectionnez dans la liste déroulante "Modèle Local Actif"
2. Le statut passe à "Prêt"
3. Le modèle est maintenant utilisé pour l'inférence locale

### Supprimer des Modèles

1. Trouvez le modèle dans la liste "Modèles Installés"
2. Cliquez sur le bouton **Supprimer**
3. Confirmez la suppression
4. Libère l'espace de stockage

## Conseils de Performance

### Pour une Inférence Plus Rapide

1. Utilisez des modèles plus petits (0.5B-3B paramètres)
2. Activez la quantification (Q4, Q8)
3. Réduisez la fenêtre de contexte
4. Fermez les applications inutiles

### Pour une Meilleure Qualité

1. Utilisez des modèles plus grands (7B+ paramètres)
2. Utilisez la précision complète (FP16)
3. Augmentez la fenêtre de contexte
4. Utilisez des variantes instruction-tuned

## Dépannage

### Échec du Téléchargement

- Vérifiez l'espace de stockage disponible
- Vérifiez la connexion internet
- Essayez d'abord un modèle plus petit
- Vérifiez le statut HuggingFace

### Le Modèle Ne Se Charge Pas

- Vérifiez la RAM suffisante
- Vérifiez la compatibilité du format de modèle
- Essayez de re-télécharger
- Vérifiez la console du navigateur pour les erreurs

### Inférence Lente

- Utilisez un modèle quantifié
- Réduisez la fenêtre de contexte
- Fermez les autres onglets/applications
- Envisagez de mettre à niveau la RAM

### Mémoire Insuffisante

- Utilisez un modèle plus petit
- Activez la quantification
- Augmentez le swap/mémoire virtuelle
- Utilisez plutôt un fournisseur cloud

## Avancé : Modèles Personnalisés

### Ajouter des Modèles Personnalisés

1. Trouvez le modèle sur HuggingFace
2. Notez l'ID du modèle
3. Recherchez dans Browserfly
4. Téléchargez si compatible

### Compatibilité des Modèles

Browserfly supporte :
- Modèles de génération de texte
- Modèles de chat/instruction
- Reconnaissance vocale (Whisper)
- Modèles text-to-text

Pas encore supporté :
- Modèles de vision (prévu)
- Modèles d'embedding (prévu)
- Modèles de diffusion (futur)

## Considérations de Sécurité

### Sources de Modèles

- Ne téléchargez que depuis des sources de confiance
- Vérifiez l'éditeur du modèle
- Vérifiez les compteurs de téléchargement et évaluations
- Consultez la carte du modèle pour les détails

### Exécution Locale

- Les modèles s'exécutent dans le bac à sable du navigateur
- Aucun accès réseau requis après téléchargement
- Les données restent sur votre appareil
- Pas de télémétrie ni de suivi
