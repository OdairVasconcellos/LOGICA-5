
function contagem() {

    var c = 10;
    var texto;
    var resposta = document.getElementById('contagem');
    while (c >= 0) {
        texto = c;
        resposta.innerHTML += texto + "<br />";
        c--;

    }

}

function tabuada()

var c = 1 * 5;
var texto;
var resposta = document.getElementById('tabuada');
while (c < 5 * 10) {

    texto = c;
    resposta.innerHTML += texto + "<br />";
    c--;

}