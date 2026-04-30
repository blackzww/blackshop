const kitsGrid = document.getElementById("kitsGrid");
const itensGrid = document.getElementById("itensGrid");
const servicosGrid = document.getElementById("servicosGrid");

// CRIAR CARD
function criarCard(p){
    return `
    <div class="card">

        ${p.badge ? `<div class="badge ${p.tipo || ""}">${p.badge}</div>` : ""}

        <div class="product-image" style="background-image:url('${p.imagem}')"></div>

        <h3>${p.nome}</h3>
        <p class="description">${p.desc}</p>

        <div class="price">R$ ${p.preco.toFixed(2)}</div>
        ${p.precoOriginal ? `<div class="original-price">R$ ${p.precoOriginal.toFixed(2)}</div>` : ""}

        <button class="buy-btn" onclick="comprar()">Comprar</button>

        <div class="info">${p.info || ""}</div>

    </div>
    `;
}

// RENDER
function render(lista){
    kitsGrid.innerHTML = "";
    itensGrid.innerHTML = "";
    servicosGrid.innerHTML = "";

    lista.forEach(p => {
        const card = criarCard(p);

        if(p.categoria === "kits"){
            kitsGrid.innerHTML += card;
        }

        if(p.categoria === "itens"){
            itensGrid.innerHTML += card;
        }

        if(p.categoria === "servicos"){
            servicosGrid.innerHTML += card;
        }
    });
}

// BUSCA
document.getElementById("search").addEventListener("input", (e)=>{
    const v = e.target.value.toLowerCase();

    const filtrados = produtos.filter(p =>
        p.nome.toLowerCase().includes(v)
    );

    render(filtrados);
});

// CATEGORIAS
document.querySelectorAll(".category-btn").forEach(btn=>{
    btn.onclick = ()=>{
        document.querySelectorAll(".category-btn").forEach(b=>b.classList.remove("active"));
        btn.classList.add("active");

        const cat = btn.dataset.category;

        if(cat === "all"){
            render(produtos);
        } else {
            render(produtos.filter(p => p.categoria === cat));
        }
    };
});

// COMPRA
function comprar(){
    window.location.href = "https://wa.me/SEUNUMERO";
}

// INIT
render(produtos);