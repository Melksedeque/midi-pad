const btn_pom = document.querySelector('button.tecla_pom');
const som_pom = document.querySelector('audio#som_tecla_pom');

const btn_clap = document.querySelector('button.tecla_clap');
const som_clap = document.querySelector('audio#som_tecla_clap');

const btn_tim = document.querySelector('button.tecla_tim');
const som_tim = document.querySelector('audio#som_tecla_tim');

function playPom() {
    som_pom.play();
}

btn_pom.onclick = playPom;