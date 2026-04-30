const kitsGrid = document.getElementById("kitsGrid");
const itensGrid = document.getElementById("itensGrid");
const servicosGrid = document.getElementById("servicosGrid");

// CRIAR CARD
function criarCard(item) {
    return `
        ${item.badge ? `<div class="badge ${item.tipo || ""}">${item.badge}</div>` : ""}

        <div class="product-image" style="background-image:url('${item.imagem}')"></div>

        <h3>${item.nome}</h3>
        <p class="description">${item.desc}</p>

        <div class="price-section">
            <div class="price">R$ ${item.preco.toFixed(2)}</div>
            ${item.precoOriginal ? `<div class="original-price">R$ ${item.precoOriginal.toFixed(2)}</div>` : ""}
        </div>

        <button class="buy-btn" onclick="comprar()">Adicionar ao Carrinho</button>

        <div class="info">${item.info || ""}</div>
    `;
}

// RENDER SEPARADO
function renderProdutos() {
    kitsGrid.innerHTML = "";
    itensGrid.innerHTML = "";
    servicosGrid.innerHTML = "";

    produtos.forEach(item => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = criarCard(item);

        if (item.categoria === "kits") {
            kitsGrid.appendChild(div);
        }
        else if (item.categoria === "itens") {
            itensGrid.appendChild(div);
        }
        else if (item.categoria === "servicos") {
            servicosGrid.appendChild(div);
        }
    });
}

// BUSCA GLOBAL
document.getElementById("search").addEventListener("input", (e) => {
    const v = e.target.value.toLowerCase();

    const filtrados = produtos.filter(p =>
        p.nome.toLowerCase().includes(v)
    );

    kitsGrid.innerHTML = "";
    itensGrid.innerHTML = "";
    servicosGrid.innerHTML = "";

    filtrados.forEach(item => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = criarCard(item);

        if (item.categoria === "kits") kitsGrid.appendChild(div);
        if (item.categoria === "itens") itensGrid.appendChild(div);
        if (item.categoria === "servicos") servicosGrid.appendChild(div);
    });
});

// Criar estrelas cadentes
function createShootingStar() {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.animationDuration = Math.random() * 3 + 2 + 's';
    star.style.animationDelay = Math.random() * 5 + 's';
    document.body.appendChild(star);
    
    setTimeout(() => {
        star.remove();
    }, 5000);
}

// Criar partículas ao clicar
function createParticles(e) {
    for(let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'click-particle';
        particle.style.left = e.clientX + (Math.random() - 0.5) * 40 + 'px';
        particle.style.top = e.clientY + (Math.random() - 0.5) * 40 + 'px';
        particle.style.backgroundColor = `hsl(${Math.random() * 30 + 20}, 100%, 50%)`;
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 800);
    }
}

// Gerar estrelas cadentes aleatoriamente
setInterval(() => {
    if(Math.random() > 0.7) {
        createShootingStar();
    }
}, 3000);

// Adicionar efeito de partículas ao clicar em qualquer lugar
document.addEventListener('click', createParticles);

// Efeito de ondulação nos cards ao passar o mouse
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', x + 'px');
        card.style.setProperty('--mouse-y', y + 'px');
    });
});

// INIT
renderProdutos();

// COMPRA
function comprar() {
    window.location.href = "https://wa.me/SEUNUMERO";
}