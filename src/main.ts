/**
 * Application « Désinvestissement » (simulée) : la plus petite possible.
 * Démontre la rapidité de développement : identité + couleur, le kit fournit le reste.
 */
import { demarrerApp } from '@maestro/sdk/kit';

await demarrerApp({
  id: 'desinvestissement',
  nom: 'Désinvestissement',
  port: Number(process.env.PORT ?? 4105),
  jeton: process.env.JETON_APP ?? 'demo-jeton-desinvestissement',
  couleur: '#a33b3b',
  utilisateurParDefaut: 'kevin',
});
