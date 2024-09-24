// Quiz: Veuillez répondre aux questions ci-dessous. (50 min) (+15 min pour les personnes bénéficiant de mesures supplémentaires)
// Lorsqu'il y a des sous-points (questions 7, 8 et 11), ils vous guident dans les diverses étapes de l'exercice.
// Le quiz est individuel. VOus avez cependant accès à tous les supports de cours, ainsi qu'internet.
// -----------------------

// 1. Expliquez ce qu'est-ce qu'une variable.
// REPONSE: c'est le nom qu'on va donner a un ellemet pour pouvoir le manipuler

// -----------------------
// 2. Déclarez une variable s'appelant "firstName" et dont la valeur est votre prénom.
const firstName = "Joëlle";
console.log(firstName);
// -----------------------
// 3. Déclarez une variable s'appelant "age" et dont la valeur est votre âge. Attention, sa valeur pourrait être modifiée par la suite.
let age = 20;
// -----------------------
// 4. Dans le code HTML (lignes 17 - 23), citez les divers éléments composant l'élément HTML <input>:
// - Balise HTML: <input>
// - Classe(s): .card-input
// - Attribut(s): texte name

// -----------------------
// 5. Expliquez la différence entre une class et un ID.
// REPONSE: un id est unique mais plusieur objet peut avoir la meme classe. et un id peut permetre de ce deplacer sur la page.

// -----------------------
// 6. A quoi sert la méthode document.querySelector("..."); ?
// REPONSE: a chercher quelle que chose dans le html

// -----------------------
// 7. A l'aide de la méthode document.querySelector("..."), sélectionnez l'élément <p> (ligne 14 du code HTML):
// 7.1 Créez une variable appelée "cardContent".
// 7.2 Assignez lui l'élément <p> (ligne 14 du code HTML) que vous avez sélectionné en 7.1.
const cardContent = document.querySelector("#card-1");
// -----------------------
// 8. Utilisez la variable "cardContent" créée à l'exercice 7:
// 8.1 Utilisez la propriété .classList pour ajouter (.add("...")) la class ".highlight" à l'élément HTML.
cardContent = classList.add(Highlight);
// -----------------------
// 9. Récupérez la valeur de l'attribut "placeholder" (.getAttribute("...")) de l'élément HTML <input> (ligne 17 du code HTML).
const inputElement = document.querySelector("#password-input");
const placeholderValue = inputElement.getAttribute("placeholder");
console.log(placeholderValue);
// -----------------------
// 10. Expliquez ce qu'est un écouteur d'événement.
// REPONSE: ce le fait de repérer un action ex: clique / pour pouvoir apre agire dessu

// -----------------------
// 11. Sur l'élément HTML button (ligne 26 du code HTML), écoutez l'événement "click":
// 11.1 : Sélectionnez l'élément HTML <button> (ligne 26 du code HTML).
// 11.2 : Utilisez la méthode .addEventListener("...", function() {...}) sur l'élément HTML sélectionné en 11.1 pour écouter l'événement "click".
// 11.3 : Lorsqu'un.e utilisateurice clique sur le bouton, ajoutez/supprimez (toggle) la class ".hide" de l'élément HTML <p> (ligne 29-31 du code HTML).
const buttonl26 = document.querySelector("#card-3");
buttonl26 = addEventListener("click", function () {
  const buttoncard = document.querySelector("#card-btn");
  buttoncard.classList.toggle("hide");
});
