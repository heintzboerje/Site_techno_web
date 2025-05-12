// Pages disponibles
var pages = [
    "Content/Collection/shining.html",
    "Content/Collection/blair_witch_project.html",
    "Content/Collection/scream.html",
    "Content/Collection/the_exorcist.html"
];

// Quand la page est chargée
window.onload = function() {
    var bouton = document.getElementById("random-link");

    bouton.onclick = function() {
        var aleatoire = Math.floor(Math.random() * pages.length);
        var lien = pages[aleatoire];
        window.location.href = lien;
    }
};
