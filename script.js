const kitsGrid = document.getElementById("kitsGrid");
const itensGrid = document.getElementById("itensGrid");
const servicosGrid = document.getElementById("servicosGrid");
const cartModal = document.getElementById("cartModal");
const toast = document.getElementById("toast");

let carrinho = [];

// FUNÇÃO PARA CRIAR CARD - CORRIGIDA
function criarCard(p) {
    // IMPORTANTE: O onclick passa o p.id. Verifique se no seu data.js o Madara e o Gilgamesh têm IDs diferentes!
    return `
    <div class="card">
        <div class="product-image" style="background-image:url('${p.imagem}')"></div>
        <h3>${p.nome}</h3>
        <p class="description">${p.desc}</p>
        <div class="price">R$ ${p.preco.toFixed(2)}</div>
        <button class="buy-btn" onclick="adicionarAoCarrinho(${p.id})">Adicionar ao Carrinho</button>
    </div>
    `;
}

function render(lista) {
    let htmlKits = ""; let htmlItens = ""; let htmlServicos = "";

    lista.forEach(p => {
        const card = criarCard(p);
        if (p.categoria === "kits") htmlKits += card;
        else if (p.categoria === "itens") htmlItens += card;
        else if (p.categoria === "servicos") htmlServicos += card;
    });

    kitsGrid.innerHTML = htmlKits;
    itensGrid.innerHTML = htmlItens;
    servicosGrid.innerHTML = htmlServicos;
}

// ADICIONAR AO CARRINHO - CORRIGIDO
function adicionarAoCarrinho(id) {
    // Procura o produto exato pelo ID
    const produto = produtos.find(p => p.id === id);
    
    if (produto) {
        carrinho.push(produto);
        atualizarCarrinho();
        mostrarToast(`✅ ${produto.nome} adicionado!`);
    } else {
        console.error("Produto não encontrado! Verifique se o ID no data.js está correto.");
    }
}

function atualizarCarrinho() {
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    const cartCount = document.getElementById("cart-count");

    // Atualiza a bolinha do contador no ícone
    if(cartCount) cartCount.innerText = carrinho.length;

    if (carrinho.length === 0) {
        cartItems.innerHTML = "<p style='color:#666; text-align:center;'>Carrinho vazio.</p>";
        cartTotal.innerText = "0.00";
        return;
    }

    let html = "";
    let total = 0;

    carrinho.forEach((item, index) => {
        html += `
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; background:#111; padding:10px; border-radius:8px;">
            <div>
                <div style="font-weight:bold;">${item.nome}</div>
                <div style="font-size:12px; color:#888;">R$ ${item.preco.toFixed(2)}</div>
            </div>
            <button onclick="removerItem(${index})" style="background:none; border:none; color:red; cursor:pointer;">✖</button>
        </div>`;
        total += item.preco;
    });

    cartItems.innerHTML = html;
    cartTotal.innerText = total.toFixed(2);
}

function removerItem(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

function abrirCarrinho() {
    cartModal.style.display = "block";
}

function fecharCarrinho() {
    cartModal.style.display = "none";
}

// FECHAR MODAL CLICANDO FORA DELE
window.onclick = function(event) {
    if (event.target == cartModal) {
        fecharCarrinho();
    }
}

function mostrarToast(msg) {
    toast.innerText = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3000);
}

function finalizarCompra() {
    if (carrinho.length === 0) return alert("Carrinho vazio!");

    let msg = "PRODUTOS ESCOLHIDOS:\n";
    carrinho.forEach(i => msg += `- ${i.nome}\n`);
    msg += `\nTOTAL: R$ ${document.getElementById("cartTotal").innerText}`;
    
    window.location.href = `https://wa.me/5511999999999?text=${encodeURIComponent(msg)}`;
}

// Inicializa a busca (Debounce)
let timeoutBusca;
document.getElementById("search").addEventListener("input", (e) => {
    clearTimeout(timeoutBusca);
    timeoutBusca = setTimeout(() => {
        const term = e.target.value.toLowerCase();
        render(produtos.filter(p => p.nome.toLowerCase().includes(term)));
    }, 300);
});

render(produtos);
