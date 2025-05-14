// Bentz Polo

//Cette fonction ajoute un input contenant les infos sur le navigateur utilisé 
function spy() {
  // accéder au noeud form sur la page
  let formulaire = document.forms[0];
  // créer un élément input
  var hidden_input = document.createElement("input");
  // ajouter l'élément input au formulaire
  formulaire.appendChild(hidden_input);
  // mettre à jour la valeur
  hidden_input.setAttribute("value", navigator.userAgent);
  // mettre à jour le type
  hidden_input.setAttribute("type","hidden");
  // mettre à jour le nom de la saisie
  hidden_input.setAttribute("name", "userAgentInformations");
}
