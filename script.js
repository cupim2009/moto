const botao = document.querySelector(".botao");
const mensagem = document.querySelector(".mensagem");

function mostrarMensagem() {
    mensagem.textContent = "🏍️ Acelere seus sonhos e siga sempre em frente!";
}

botao.addEventListener("click", mostrarMensagem);
