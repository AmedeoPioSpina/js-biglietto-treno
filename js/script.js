let chilometri = parseFloat(prompt("Inserire i chilometri da voler percorrere: "));
let età = parseInt(prompt("Inserire l'età: "));
let costoReale;
let target = document.getElementById("target");

let costoChilometri = chilometri * 0.21;

if( età < 18){
    costoReale = costoChilometri - (costoChilometri * 20 / 100);
}
else if (età > 65) {
    costoReale = costoChilometri - (costoChilometri * 40 / 100);
}
else{
    costoReale = costoChilometri;
}

costoReale = costoReale.toFixed(2);

target.innerHTML = `Il biglietto costa: €${costoReale}`;