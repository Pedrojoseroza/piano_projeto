// Nesta versão, puxei todos os caminhos do svg com o querySeletor e depois passarei um loop, com AddEventListenter
//Espero que dê certo

let listaNotas = document.getElementById('svg1').querySelectorAll('path');
for (const notaCaminho of listaNotas) {
  notaCaminho.addEventListener('click', function() {
    tocarNota(notaCaminho.id);
  })
}
function tocarNota(id) {
  let som = new Audio("SOURCE/piano-mp3/" + id + ".mp3");
  som.play();
}
