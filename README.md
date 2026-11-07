# maestro-app-desinvestissement

Application **Désinvestissement** (simulée) de la PoC Maestro : thèse de sortie, évaluation,
approbation et exécution de la sortie.

C'est l'application la plus petite possible (une quinzaine de lignes) : elle démontre qu'une équipe
peut brancher une nouvelle application sur le backbone en quelques minutes. Le SDK
[`@maestro/sdk`](https://github.com/fabrice974/maestro-sdk-ts) fournit la boîte de tâches et les
formulaires générés depuis le catalogue de tâches du backbone
([maestro-v2](https://github.com/fabrice974/maestro-v2)).

## Lancer

```bash
npm install
cp .env.example .env     # facultatif
npm start                # http://localhost:4105
```

Prérequis : la passerelle de maestro-v2, ou `npm run ecosysteme -- demarrer` depuis maestro-v2.
