# A faire
Service carte signal cartes pour avoir un tableau de cartes

- Service carte
- Meth addCarte
- Get liste de carte

- Composant de saisie :
  - Utilisation de ReadFormModule
        - Validator
  - Directive : Formatage des erreurs
  - Injecter un service
- Composant affecté :
  - Afficher la liste des cartes (recup le signal)
  - Caviardé par un Pipe
- Service Carte :
  - GET Carte -Signal-
  - ADD Carte -public-
  - DEL Carte
  - Signal des cartes
 
- (Faire 4 validatorn nom, digit, date, CCV)

---

Samedi 16 Novembre 16h le rendu
2 composants 1 service 1 directive 1 pipe

Composant 1 : ReactFormsModule pour créer la carte avec 4 validators 

Sur bouton submit 2 choses : error validator avec directive ou si tout va bien on appelle le service

Service : méthod publique addCarte(nouvelle carte saisie : Type)
Envoi de la carte -> update de la variable privée du service listCards
affCarte composant va injecter service pour récupérer la liste des cartes qui est un signal
automatiquement afficher la liste des cartes avec nouvelle carte qui s'ajoute
et on caviarde le PAN via un pipe
