let totaly = 0.0000000
let nombreProductes = 0
// funció per el boto de comprar de cada hamburgesa i per que es posi en la cistella.
function Comprar (nom, preu) {
    document.getElementById('cistella').innerText += nom + " - " + preu + "€\n"
    totaly = totaly + preu
    totaly.toFixed(2);
    document.getElementById('PreuTotal').innerText = totaly.toFixed(2) + '€';
    localStorage.setItem('cistella', document.getElementById('cistella').innerText);
    localStorage.setItem('PreuTotal', totaly )
}
// funció per buidar la cistella.
function Buidar () {
    localStorage.setItem('cistella','' );
    localStorage.setItem('PreuTotal','');
    document.getElementById('PreuTotal').innerText = ""
    document.getElementById('cistella').innerText = ""
    totaly = totaly * 0
}
// funció per carregar la cistella i que cuant vagis a la pagina de patates es guardi la cistella i viveversa.
function carregar(){
    nombreProductes = localStorage.getItem("cistella");
    document.getElementById('cistella').innerText = nombreProductes
    totaly = parseInt(localStorage.getItem("PreuTotal"));
    if (isNaN(totaly))totaly = 0.00
    document.getElementById('PreuTotal').innerText = totaly.toFixed(2);
}
(() => {
    document.addEventListener("DOMContentLoaded", () => {
        carregar();
    });
})();

