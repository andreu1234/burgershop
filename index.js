let totaly = 0.0000000

function Comprar (nom, preu){
    document.getElementById('cistella').innerText += nom + " - " + preu +"€\n"
    totaly = totaly + preu
    totaly.toFixed(2);
    document.getElementById('PreuTotal').innerText = totaly.toFixed(2);
}




