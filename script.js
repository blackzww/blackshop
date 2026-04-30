const grid = document.getElementById("grid");

// ===== RENDER PRODUTOS =====
function renderProdutos(lista) {
    grid.innerHTML = "";

    lista.forEach(item => {
        const div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
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

        grid.appendChild(div);
    });
}

// ===== BUSCA (FUNCIONANDO AGORA) =====
document.getElementById("search").addEventListener("input", (e) => {
    const valor = e.target.value.toLowerCase();

    const filtrados = produtos.filter(p =>
        p.nome.toLowerCase().includes(valor)
    );

    renderProdutos(filtrados);
});

// ===== CATEGORIAS =====
document.querySelectorAll(".category-btn").forEach(btn => {
    btn.addEventListener("click", () => {

        document.querySelectorAll(".category-btn")
            .forEach(b => b.classList.remove("active"));

        btn.classList.add("active");

        const cat = btn.dataset.category;

        if (cat === "all") {
            renderProdutos(produtos);
        } else {
            renderProdutos(produtos.filter(p => p.categoria === cat));
        }
    });
});

// ===== COMPRA =====
function comprar() {
    window.location.href = "https://wa.me/SEUNUMERO";
}

// ===== INICIAR =====
renderProdutos(produtos);