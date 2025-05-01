let body = document.querySelector("body");
let tenis = document.querySelector(".imagem-tenis");

function mudarVisual(cor, imagem) {
    // Remove qualquer efeito anterior
    tenis.classList.remove("visivel");

    // Aplica o efeito de saída (desaparecer)
    tenis.classList.add("troca-efeito");

    // Aguarda a transição antes de trocar a imagem
    setTimeout(() => {
        tenis.src = imagem; // Troca a imagem

        // Remove a classe de efeito e reaplica a classe "visivel" para aparecer de novo
        tenis.classList.remove("troca-efeito");
        tenis.classList.add("visivel");
        
        // Muda o fundo
        body.style.background = cor;
    }, 500); // Tempo deve ser igual à transição do CSS
}