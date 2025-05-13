
//Zeinebou
//Mets la date et heure a laquelle la page a été chargée

window.addEventListener('load', function() {
    let now = new Date();
    document.getElementById('datetime').textContent = now.toLocaleString();
});
