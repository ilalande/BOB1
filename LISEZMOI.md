# BOARB - Le tableau pense-bête

## Table of Contents

1. [Informations générales](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Autrice](#autrice)

## Informations générales

Cette WebApp est un un tableau personnel permettant d'ajouter des tâches pense-bête sous forme de posts-its.
Il a été développé dans le cadre du CheckPoint 4 de la formation développeur Javascript de la Wild Code School de juin 2022 par [Juliane Casier](https://www.linkedin.com/in/juliane-casier-bb642832/)

### Statut du projet et état d'avancement

Ce projet a été développé en 2 jours et est un projet de fin de formation. Il fonctionne en l'état mais les fonctionnalités restent simples :

- créer un nouveau tableau de posts-its
- Créer des posts-its de 3 couleurs différentes
- Remplir un post it avec du texte
- Déplacer (en drag and drop) les post-its sur un tableau.

## Technologies

Ce projet est écrit en React

### Template

- `Template` : Application développée sur React, Node Express à partir d'un [template](https://github.com/WildCodeSchool/js-template-fullstack) développé par la Wild Code School. Seul la partie front a été utilisée

**Outils utilisés dans ce template:**

- _Concurrently_ : Permet d'exécuter plusieurs commandes dans un même terminal
- _Husky_ : Permet d'exécuter des actions en déclenchement de commandes _git_
- _Vite_ : Alternative à _Create-React-App_, embarquant moins de packages pour une expérience plus fluide
- _ESLint_ : Outil de "qualité de code", permet de s'assurer que des règles pré-configurées sont bien respectées
- _Prettier_ : Outil de "qualité de code" également, se concentre plus particulièrement sur le style du code
- _Standard Airbnb_ : L'un des "standards" les plus connus, même s'il n'est pas officiellement lié à ES/JS
- _Nodemon_ : Outil permettant de relancer un serveur à chaque fois qu'un des fichiers est modifié

### Autres librairies

- `Redux` : Redux a été utilisé pour gérer les informations liées aux utilisateurs au moment de la connexion ou de l'inscription puis tout au long de la navigation
- `React DND` : Pour gérer le Drag and Drop des posts-its, React DND a été utilisé
- `Autres librairies diverses` :
  - Styled Component a été utilisé pour gérer le style de l'application.
  - React Router pour gérer les liens entre les page.
  - Prop-types pour typer les props.

## Installation

### Pour commencer un projet

    Sur VSCode, installer les plugins Prettier - Code formatter et ESLint et les configurer
    Cloner ce dépôt, se rendre à l'intérieur
    Lancer la commande npm run setup

### Liste des commandes et signification

    setup : Initialisation du frontend et du backend ainsi que des outils
    dev : Démarrage des trois serveurs (frontend + backend + admin) dans un même terminal
    dev-front : Démarrage d'un serveur React pour le frontend
    lint : Exécute des outils de validation de code (sera exécutée automatiquement à chaque commit)
    fix : Fixe les erreurs de formatage (à lancer si lint ne passe pas)

## Autrice

Ce projet a été développé dans le cadre de la fin de formation développeur web Javascript de la Wild Code School de juin 2022 par [Juliane Casier](https://www.linkedin.com/in/juliane-casier-bb642832/)
