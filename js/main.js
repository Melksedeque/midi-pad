const teclas = document.querySelectorAll('button.tecla');
const sons = document.querySelectorAll('audio');
let cont = 0;

function tocarSom(idElemento) {
    const audio = document.querySelector(idElemento);

    if(audio && audio.localName === 'audio') {
        audio.play();
    }
    else {
        alert("Elemento não encontrado ou seletor inválido!");
    }
}

for (let cont = 0; cont < teclas.length; cont ++) {
    const tecla = teclas[cont];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function() {
        tocarSom(idAudio);
    };
    
    tecla.onkeydown = function(e) {
        if(e.code === "Enter" || e.code === "Space") {
            tecla.classList.add('ativa');
        }
        else {
            tecla.classList.remove('ativa');
        }
    }
}
