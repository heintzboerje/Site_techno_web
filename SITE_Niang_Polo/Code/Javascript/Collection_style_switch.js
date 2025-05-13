
// Zeinebou
// Fonction qui active une feuille de style en désactivant les autres
function setActiveStyle(title) {
    const links = document.getElementsByTagName("link");
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
// Vérifie que c'est une feuille de style avec un attribut title
        if (
            link.getAttribute("rel").includes("stylesheet") &&
            link.getAttribute("title")
        ) {
// Active uniquement celle qui correspond au titre voulu
            link.disabled = link.getAttribute("title") !== title;
        }
    }
}

window.addEventListener("load", function () {
    const toggleButton = document.getElementById("toggle-style");
    let currentStyle = "main"; // Initialisation avec le style principal

// En cliquant sur le bouton tu vas alterner entre les deux styles
    toggleButton.addEventListener("click", function () {
        currentStyle = currentStyle === "main" ? "alternate" : "main";
        setActiveStyle(currentStyle);
    });

    setActiveStyle("main"); // Ca va forcer le style principal au chargement
})
