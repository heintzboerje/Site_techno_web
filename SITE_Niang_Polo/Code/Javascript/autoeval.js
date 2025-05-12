// Bentz

// Calcule la moyenne
function moyenne(list) {
  let result = 0;
  for(let i in list){
    result += i.value;
  };
  return result / 40;
};

// fonction principale
function printAverage() {
  let average = document.getElementById("average")
  average.setAttribute("value", moyenne(document.getElementsByClassName("range")));
};
