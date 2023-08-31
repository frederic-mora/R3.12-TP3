/*
    Le bute de l'exercice est de transformer la carte d'identité du Lapin Crétin
    en votre carte d'identité ou celle d'un autre personnage de votre choix (décent, le choix).
    Mais cette transformation doit se faire 100% en Javascript. 
    Interdiction d'éditer les fichiers html ou css associés.
*/

/*  Cette fois encore, l'objet View vous est donné ! Mais vide. Les questions qui suivent vont
    vous amener à ajouter dans cet objet des fonctions qui permettront de mettre à jour tout ou 
    partie de l'interface html.
*/
let View = {};

/* Q1
   Ajoutez une fonction/méthode renderHead à View qui permet de modifier l'entête de la carte 
   d'identité (République des Lapins Crétins). Une fois la fonction complétée, testez-là en
   l'appelant depuis la console du navigateur pour vérifier que ça fonctionne. Par exemple 
   en appelant View.renderHead("The Old Repblic").

   Indication : l'entête est le contenu text d'un élément html h1. Il vous faut trouver un moyen
   pour identifier cet élément afin de le sélectionner de manière certaine. Puis il suffira de modifier 
   la propriété correspondant au contenu textuel de l'élément. 

   View.renderHead
   . paramètre txt : une chaine de caractères
   > valeur de retour : aucune
   La fonction fait apparaître txt en entête de la carte d'identité.
*/
View.renderHead = function( txt ){
    // ??
}

/* Q2
   Ajoutez une fonction/méthode renderIDNumber à view qui permet de modifier le numéro de la carte
   nationale d'identité. Là encore, testez votre fonction en l'appelant depuis la console du navigateur.
   Par exemple, View.renderIDNumber('112F34SE56789B')
   
   View.rendIDNumber
   . paramètre newid : une chaine de caractères
   > valeur de retour : aucune
   La fonction fait apparaître newid en numéro de la carte d'identité.
*/
View.renderIDNumber = function( newid ){
    // ?
}

/* Q3
   Ajoutez une fonction/méthode renderIDPhoto qui met à jour l'image présente sur la carte d'identité.
   Testez votre fonction depuis la console du navigateur.
   Note : pour s'assurer que votre image se place correctement dans la zone d'affichage, vous pourrez
   au passage définir la propriété de style background-size à "cover".
   
   View.rendIDPhoto
   . paramètre url : une chaine de caractères qui est l'url de la photo à utiliser
   > valeur de retour : aucune
   La fonction fait apparaître l'image en photo de la carte d'identité
*/
/* Q4
   Ajoutez une fonction/méthode renderNationality qui met à jour la nationalité mentionnée sur la carte d'identité.
   Testez votre fonction depuis la console du navigateur.
   
   View.renderNationality
   . paramètre nat : une chaine de caractères 
   > valeur de retour : aucune
   La fonction fait apparaître nat comme nationalité sur la carte d'identité
*/


/* Q5
   Ajoutez une fonction/méthode renderCivilStatus qui met à jour le nom, prénom, sexe, la date et le lieu de naissance
   sur la carte d'identité. Testez votre fonction depuis la console du navigateur.
   
   View.renderCivilStatus
   . paramètre name : une chaine de caractères, le nom à faire apparaître
   . paramètre firstname : une chaine de caractères, le prénom à faire apparaître
   . paramètre gender : une chaine de caractères ('F', 'M', ...)
   . paramètre birthdate : une chaine de caractères, la date de naissance à faire apparaître
   . paramètre birthplace : une chaine de caractères, le lien de naissance à faire apparaître
   > valeur de retour : aucune
*/

/* Q6
   Ajoutez une fonction/méthode renderSignature qui met à jour la signature mentionnée sur la carte d'identité.
   Testez votre fonction depuis la console du navigateur.
   
   View.renderSignature
   . paramètre url : une chaine de caractères, l'url de l'image à utiliser en signature sur la carte d'identité
   > valeur de retour : aucune
*/
// ?


/* Q7
   Completez l'objet data ci-dessous afin d'y regrouper/organiser toutes les informations que vous souhaitez
   faire apparaître sur votre carte d'identité
*/
let data = {
    id: 0,
    entete: "",
    nationalite: "",
    signature: "",
    photo: "",
    etatcivil: {
        /* ?? */
    }
};

/* Q8
   Ajoutez une fonction/méthode renderIdCard à l'objet View.
   Pour tester le bon fonctionnement de votre fonction, vous appelerez (à la fin de ce fichier ou depuis la console)
   View.renderIDCard(data)
   
   View.renderIDCard
   . paramètre info : un objet similaire à data qui contient toutes les données à afficher.
   > valeur de retour : aucune
*/
View.renderIDCard = function( info ){
    // A compléter en faisant bon usage de toutes les fonctions déjà ajoutées à View
}