function trocarImagem(){
    let select = document.getElementById("moon");
    let imagemExibida = document.getElementById("imagemExibida");
    let imagemSelecionada = select.options[select.selectedIndex].value;
    imagemExibida.src = imagemSelecionada;
}