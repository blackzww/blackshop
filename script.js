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

// INIT
renderProdutos();

// COMPRA
function comprar() {
    window.location.href = "https://wa.me/SEUNUMERO";
}