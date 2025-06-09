function viraCartao(event) {
    const cartao = event.currentTarget;
    cartao.classList.toggle('active');
}

function criaCartao(categoria, pergunta, resposta) {
    const container = document.getElementById('container');
    if (!container) {
        console.error('Container não encontrado!');
        return;
    }

    const cartao = document.createElement('article');
    cartao.className = 'cartao';

    cartao.innerHTML = `
        <div class="cartao__conteudo">
            <h3>${categoria}</h3>
            <div class="cartao__conteudo__pergunta">
                <p>${pergunta}</p>
            </div>
            <div class="cartao__conteudo__resposta">
                <p>${resposta}</p>
            </div>
        </div>
    `;

    cartao.addEventListener('click', viraCartao);

    container.appendChild(cartao);
}
