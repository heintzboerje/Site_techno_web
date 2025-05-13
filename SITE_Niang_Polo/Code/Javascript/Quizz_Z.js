
//Zeinebou
// Quand la page est chargée, on remplit les informations sur le navigateur
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('userAgentInformations').value =
        "Navigateur: " + navigator.userAgent +
        ", Langue: " + navigator.language +
        ", Plateforme: " + navigator.platform;
});

// Vérification du formulaire quand on clique sur "Vérifier le formulaire"
function validateForm() {
    let toutRempli = true; // On suppose que tout est rempli

    // Liste des questions à vérifier
    const questions = ["theme", "movies", "movieNumber", "movieLines", "trueFalse"];

    // On regarde si l'utilisateur a répondu à chaque question
    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        const reponse = document.querySelector(`input[name="${question}"]:checked`);
        if (!reponse) {
            alert(`Veuillez répondre à la question : ${question}`);
            toutRempli = false;
        }
    }

    // Si tout est bien rempli, on passe à la correction
    if (toutRempli) {
        verifier();
    }
}

// Correction du quiz
function verifier() {
    let score = 0;
    const totalQuestions = 5;

    // Les bonnes réponses
    const bonnesReponses = {
        theme: "Films",
        movies: "Fast & Furious 2",
        movieNumber: "4",
        movieLines: "Scream",
        trueFalse: "True"
    };

    // On remet tous les labels en noir
    const labels = document.getElementsByTagName('label');
    for (let i = 0; i < labels.length; i++) {
        labels[i].style.color = "black";
    }

    // Vérifier chaque réponse donnée
    for (const question in bonnesReponses) {
        const boutons = document.getElementsByName(question);
        for (let i = 0; i < boutons.length; i++) {
            if (boutons[i].checked) {
                const label = document.querySelector(`label[for="${boutons[i].id}"]`);
                if (boutons[i].value === bonnesReponses[question]) {
                    score++;
                    if (label) label.style.color = "green"; // Bonne réponse en vert
                } else {
                    if (label) label.style.color = "red"; // Mauvaise réponse en rouge
                }
            }
        }
    }

    // Afficher le score à l'utilisateur
    let resultat = document.getElementById("resultat");
    if (!resultat) {
        resultat = document.createElement('div');
        resultat.id = "resultat";
        document.getElementById('quizz_form').appendChild(resultat);
    }

    resultat.textContent = "Votre score est " + score + " sur " + totalQuestions + ".";

    // Message d'alerte selon le score
    if (score === totalQuestions) {
        resultat.className = "correct";
        alert("Toutes les réponses sont correctes !");
    } else {
        resultat.className = "incorrect";
        alert("Certaines réponses sont incorrectes !");
    }
}
