// Bentz

// Calcule la moyenne
function moyenne(list) {
  let result = 0;
  for(let i in list){
    result += i.value
  };
  return result / 40
}

document.querySelector('input[type="range"]')

// fonction principale
function printAverage() {
  document.getElementById("average").value = moyenne(document.querySelector('input[type="range"]'))
}
