const teclas = document.querySelectorAll('button.tecla');
const sons = document.querySelectorAll('audio');
let cont = 0;

function tocarSom(idElemento) {
    document.querySelector(idElemento).play();
}

for (let cont = 0; cont < teclas.length; cont ++) {
    const tecla = teclas[cont];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function() {
        // console.log(idAudio);
        tocarSom(idAudio);
    };
    // console.log(cont);
}
