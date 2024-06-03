### Objectif du projet

- Créer une petite application web utilisant l'API Marvel pour afficher une liste de personnages et leurs détails.
- Montrer des compétences en React, TypeScript et tests.

Exigences fonctionnelles :

- Afficher une liste de personnages avec leur nom et leur vignette.
- Cliquer sur un personnage doit afficher plus de détails sur le personnage.
- Utiliser l'API Marvel pour récupérer les données.

## Choix architecturaux

- **Next.js** : J'ai choisi Next.js pour son support du rendu côté serveur (SSR), ses routes API et son linting intégré.
- Proxyfier les requêtes API via les routes API de Next.js pour éviter les problèmes de CORS et pour garder la clé API sécurisée.

## Conception de l'interface utilisateur

- Composants de navigation standard, liste et pagination utilisés de Material-UI.

## Approche

1. Faire fonctionner une application de base, avec une requête au serveur et des données affichées.
2. Sécuriser le projet avec prettier, typescript, eslint, husky et lint-staged.
3. Tester le projet avec jest et storybook.
4. Nettoyer le code, refactoriser le code dans une meilleure structure, ajouter de la documentation.
5. Extras : Tester le rendu côté serveur, nettoyer les styles, ajouter de la mise en cache aux requêtes.

## Défis et solutions

Le plus grand défi a été d'utiliser nextjs 14, car je travaille normalement avec nextjs 12. J'ai dû apprendre la nouvelle structure du projet, la nouvelle façon de gérer les routes dynamiques et la nouvelle façon de gérer les requêtes API. Storybook a également eu des problèmes avec les composants serveur React, que j'ai dû activer dans la configuration.

## Temps pris

Temps pris :
mise en place du projet, composants de base et appels API fonctionnels, ~ 40 minutes
apprentissage des composants serveur et des actions, ~ 30 minutes
refactorisation, ajout de tests, storybook, etc. - 50 minutes
nettoyage du code, stylisation, etc. - 50 minutes
Documentation, nettoyage du projet - 40 minutes
