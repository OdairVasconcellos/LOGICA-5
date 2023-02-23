
function contagem() {

    var c = 10;
    var resposta = document.getElementById('resultado');
    while (c >= 0) {
        resposta.innerHTML += c + "<br />";
        c--;

    }

}

function tabuada() {

    var c = 0;
    var resposta = document.getElementById('tabuada');
    var resultado;
    while (c <= 10) {
        resultado = c * 5
        resposta.innerHTML += c + " * " + " 5 = " + resultado + "<br />";
        c++;

    }
}

function zero() {

    var n =  ;
    var atezero = document.getElementById('zero');
    while (n >= 0) {
        atezero.innerHTML += c + "<br />";
        n--;

    }

}