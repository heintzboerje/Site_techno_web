// Bentz Polo

// Calcule la moyenne
function moyenne(list) {
  let result = 0;
  for(let i = 0; i < list.length; i++){
    result += Number(list[i].value);
  };
  result /= list.length;
  return result;
};

// fonction qui met la moyenne dans l'élément input
function getAverage() {
  let inputs = document.querySelectorAll('input[type="range"]');
  let average = document.getElementById("average");
  average.setAttribute("value", moyenne(inputs));
};

// fonction qui permet de lier getAverage à l'événement "input" des inputs
function watchAverage() {
  for(let i = 0; i < document.querySelectorAll('input[type="range"]').length; i++){
    document.querySelectorAll('input[type="range"]')[i].addEventListener("input", getAverage);
  }
}

// Change le style selon la valeur de l'input range
function changeLabelStyle(label, value){
    if(value == 0){
      label.style.color = "white";
      label.style.background = "red";
    } else if (value == 100) {
      label.style.color = "white";
      label.style.background = "green";
    } else {
      label.style.color = "white";
      label.style.background = "orange";
    }
}

// chargement et usage des fonctions après chargement de la page html.
window.onload = function () {

  // Array vide qui va contenir les labels
  let labels = new Array();
  // Array des inputs
  let inputs = document.querySelectorAll('input[type="range"]');
  // Pour chaque élément de inputs on récupère le label et on l'insère dans labels.
  for(let i = 0; i < inputs.length; i++){
    labels.push(document.querySelector('label[for="' + inputs[i].id + '"]'))
  };

  getAverage();
  
  watchAverage();
  
  for(let i = 0; i < inputs.length; i++){
    // On appel la fonction une première fois pour appliquer le style initialement
    changeLabelStyle(labels[i], inputs[i].value);
    // Et on la lie à chaque input et leur labels respectif
    inputs[i].addEventListener("input", function () {
      changeLabelStyle(labels[i], inputs[i].value)
    })
  }
};
