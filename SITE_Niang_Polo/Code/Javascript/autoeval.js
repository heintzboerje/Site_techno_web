// Bentz
// Calcule la moyenne
function moyenne(list) {
  let result = 0;
  for(let i = 0; i < list.length; i++){
    result += list[i].value;
  };
  return result / 40;
};

// fonction principale
function getAverage() {
  let input_list = document.querySelectorAll('input[type="range"]');
  let average = document.getElementById("average");
  average.setAttribute("value", moyenne(input_list));
};

function watchAverage() {
  for(let i = 0; i < document.querySelectorAll('input[type="range"]').length; i++){
    document.querySelectorAll('input[type="range"]')[i].addEventListener("input", getAverage);
  }
}
