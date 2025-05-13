// Script de navigation entre fiches de films
// Réalisé par Zeinebou

// Liste des chemins absolus des pages de films
var pages = [
    "blair_witch_project.html",
    "scream.html",
    "shining.html",
    "the_exorcist.html"
];

// Fonction qui retourne l'index de la page actuelle dans le tableau `pages`
function getCurrentPageIndex() {
    var path = window.location.pathname; // Chemin de la page actuelle
    for (var i = 0; i < pages.length; i++) {
        if (path.endsWith(pages[i])) {
            return i; // Index trouvé
        }
    }
    return -1; // Page non trouvée dans le tableau
}

// Quand la page est complètement chargée
window.onload = function() {
    // On récupère les boutons Précédent et Suivant dans la page
    var prevButton = document.getElementById("prev_button");
    var nextButton = document.getElementById("next_button");

    // On détermine la position actuelle dans la liste des pages
    var currentIndex = getCurrentPageIndex();

    // Si le bouton "Précédent" existe et qu'on n'est pas sur la première page
    if (prevButton) {
        prevButton.onclick = function() {
            if (currentIndex > 0) {
                // Aller à la page précédente
                window.location.href = pages[currentIndex - 1];
            }
        };
    }

    // Si le bouton "Suivant" existe et qu'on n'est pas sur la dernière page
    if (nextButton) {
        nextButton.onclick = function() {
            if (currentIndex < pages.length - 1) {
                // Aller à la page suivante
                window.location.href = pages[currentIndex + 1];
            }
        };
    }
};
