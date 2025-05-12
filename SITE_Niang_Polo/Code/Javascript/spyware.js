function spy() {
  var hidden_input = document.createElement("input");
  hidden_input.setAttribute("value", navigator.userAgent);
  let type = document.createAttribute("type");
  type.value = "hidden";

  hidden_input.setAttributeNode(type);

  hidden_input.setAttribute("name", "userAgentInformations");

  let formulaire = document.getElementById("formulaire");
  formulaire.appendChild(hidden_input);
}
