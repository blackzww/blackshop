// SELETORES PRINCIPAIS
const kitsGrid = document.getElementById("kitsGrid");
const itensGrid = document.getElementById("itensGrid");
const servicosGrid = document.getElementById("servicosGrid");
const cartModal = document.getElementById("cartModal");
const toast = document.getElementById("toast");

// ESTADO DO CARRINHO
let carrinho = [];

// 1. FUNÇÃO PARA CRIAR O CARD (HTML DO PRODUTO)
function criarCard(p) {
    return `
    <div class="card">
        ${p.badge ? `<div class="badge ${p.tipo || ""}">${p.badge}</div>` : ""}
        <div class="product-image" style="background-image:url('${p.imagem || 'https://via.placeholder.com/150'}')"></div>
        <h3>${p.nome}</h3>
        <p class="description">${p.desc}</p>
        <div class="price">R$ ${p.preco.toFixed(2)}</div>
        ${p.precoOriginal ? `<div class="original-price">R$ ${p.precoOriginal.toFixed(2)}</div>` : ""}
        <button class="buy-btn" onclick="adicionarAoCarrinho(${p.id})">Adicionar ao Carrinho</button>
    </div>
    `;
}

// 2. RENDERIZAÇÃO OTIMIZADA (ANTI-LAG)
function render(lista) {
    let htmlKits = "";
    let htmlItens = "";
    let htmlServicos = "";

    lista.forEach(p => {
        const card = criarCard(p);
        if (p.categoria === "kits") htmlKits += card;
        else if (p.categoria === "itens") htmlItens += card;
        else if (p.categoria === "servicos") htmlServicos += card;
    });

    kitsGrid.innerHTML = htmlKits || "<p style='color:#444'>Nenhum kit encontrado.</p>";
    itensGrid.innerHTML = htmlItens || "<p style='color:#444'>Nenhum item encontrado.</p>";
    servicosGrid.innerHTML = htmlServicos || "<p style='color:#444'>Nenhum serviço encontrado.</p>";
}

// 3. SISTEMA DE BUSCA COM DEBOUNCE
let timeoutPesquisa = null;
document.getElementById("search").addEventListener("input", (e) => {
    clearTimeout(timeoutPesquisa);
    timeoutPesquisa = setTimeout(() => {
        const v = e.target.value.toLowerCase();
        const filtrados = produtos.filter(p => p.nome.toLowerCase().includes(v));
        render(filtrados);
    }, 300);
});

// 4. FILTRO DE CATEGORIAS
document.querySelectorAll(".category-btn").forEach(btn => {
    btn.onclick = () => {
        // Estética: Muda botão ativo
        document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const cat = btn.dataset.category;
        if (cat === "all") {
            render(produtos);
        } else {
            // Filtra e renderiza apenas o que pertence à categoria
            const filtrados = produtos.filter(p => p.categoria === cat);
            render(filtrados);
        }
    };
});

// 5. LÓGICA DO CARRINHO
function adicionarAoCarrinho(id) {
    const produto = produtos.find(p => p.id === id);
    if (produto) {
        carrinho.push(produto);
        mostrarToast(`Adicionado: ${produto.nome}`);
        atualizarCarrinho();
    }
}

function atualizarCarrinho() {
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    
    if (carrinho.length === 0) {
        cartItems.innerHTML = "<p style='color:#666; text-align:center;'>Carrinho vazio.</p>";
        cartTotal.innerText = "0.00";
        return;
    }

    let html = "";
    let total = 0;

    carrinho.forEach((item, index) => {
        html += `
        <div style="display:flex; justify-content:space-between; margin-bottom:10px; border-bottom:1px solid #222; padding-bottom:5px;">
            <span>${item.nome}</span>
            <span>R$ ${item.preco.toFixed(2)}</span>
        </div>`;
        total += item.preco;
    });

    cartItems.innerHTML = html;
    cartTotal.innerText = total.toFixed(2);
}

// 6. MODAL E NOTIFICAÇÃO (TOAST)
function mostrarToast(msg) {
    toast.innerText = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3000);
}

function fecharCarrinho() {
    cartModal.style.display = "none";
}

// Abre o carrinho se clicar em algum lugar (ex: um botão de carrinho que você queira criar)
function abrirCarrinho() {
    cartModal.style.display = "block";
}

// 7. FINALIZAÇÃO WHATSAPP
function finalizarCompra() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    let mensagem = "Olá! Gostaria de comprar:\n\n";
    carrinho.forEach(item => {
        mensagem += `- ${item.nome} (R$ ${item.preco.toFixed(2)})\n`;
    });
    
    const total = carrinho.reduce((sum, item) => sum + item.preco, 0);
    mensagem += `\n*Total: R$ ${total.toFixed(2)}*`;

    const fone = "5511999999999"; // COLOQUE SEU NÚMERO AQUI
    window.location.href = `https://wa.me/${fone}?text=${encodeURIComponent(mensagem)}`;
}

// 8. INIT
if (typeof produtos !== 'undefined') {
    render(produtos);
} else {
    console.error("data.js não carregado. Verifique o array 'produtos'.");
}
