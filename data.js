/* DATA.JS - LISTA DE PRODUTOS OFICIAL 
   Cada produto possui um ID ÚNICO para evitar erros no carrinho.
*/

const produtos = [

    /* ========= KITS (ID 1 ao 10) ========= */
    {
        id: 1,
        nome: "SET GILGAMESH",
        categoria: "kits",
        preco: 0.00,
        precoOriginal: 9.90,
        desc: "[🟡] GILGAMESH SET + BABYLON KEY\n[Necessário Título Golden King]\n- 3 Phantasm Core / 8 Golden Essence / 6 Ancient Shard",
        tipo: "new",
        info: "⭐ 100% OFF + brinde exclusivo",
        imagem: "https://cdn.centralcart.io/stores/7510/packages/0cb5e97e-87b1-4a6f-9aa7-d8f9f6f957d4.png"
    },

    {
        id: 2,
        nome: "SET GAROU/COSMIC BEING",
        categoria: "kits",
        preco: 0.00,
        precoOriginal: 10.90,
        desc: "[🪐] Garou/Cosmic Being Set\n[Necessário Título Cosmic Being]\n- 2x Monster Pulse / 5x Galaxy Shard / 8x Star Mark",
        tipo: "new",
        imagem: "https://cdn.centralcart.io/stores/7510/packages/ce6ef8c1-5a12-44b8-815b-ebc8fd733d45.png"
    },

    {
        id: 3,
        nome: "SET DIO BRANDO + BRINDE",
        categoria: "kits",
        preco: 0.00,
        precoOriginal: 11.90,
        desc: "[🟡] DIO BRANDO/THE WORLD SET\n[Necessário Título Time Tyrant]\n- 2x Vampire Omen / 6x World Core / 12x Time Remnant",
        tipo: "new",
        imagem: "https://cdn.centralcart.io/stores/7510/packages/599572ff-4be8-44bc-9541-68a3c1e99921.png"
    },

    {
        id: 4,
        nome: "ESDEATH/ICE QUEEN SET + MASTERY",
        categoria: "kits",
        preco: 0.00,
        precoOriginal: 13.90,
        desc: "[❄️] ESDEATH/ICE QUEEN SET + MASTERY\n[Necessário Clã FrostBane]\n- 3x Ice Core / 14x Frozen Brand / 9x Glacier Remnant",
        tipo: "new",
        imagem: "https://cdn.centralcart.io/stores/7510/packages/39e83b66-efe1-4a3a-96a0-54987325e4bf.png"
    },

    {
        id: 5,
        nome: "KOKUSHIBO/MOON SLAYER SET + MASTERY",
        categoria: "kits",
        preco: 0.00,
        precoOriginal: 9.90,
        desc: "[🌙] KOKUSHIBO/MOON SLAYER SET + MASTERY\n[Necessário Clã Upper]\n- 3x Moon Crest / 14x Crescent Shard / 9x Lunar Essence",
        tipo: "new",
        imagem: "https://cdn.centralcart.io/stores/7510/packages/b8bf96f8-12db-44f6-9810-6836d6102c74.png"
    },

    {
        id: 6,
        nome: "MADARA SET + MASTERY",
        categoria: "kits",
        preco: 0.00,
        precoOriginal: 9.90,
        desc: "[🔴] MADARA SET + MASTERY\n[Necessário Raça Warlord]\n- 3x Path Fragment / 8x Eternal Core / 18x Battle Sigil",
        tipo: "new",
        imagem: "https://cdn.centralcart.io/stores/7510/packages/596a1c58-9328-475c-a643-70e4fa12f202.png"
    },

    /* ========= ITENS (ID 11 ao 20) ========= */
    {
        id: 11,
        nome: "Arma Lendária",
        categoria: "itens",
        preco: 24.90,
        precoOriginal: 49.90,
        desc: "Poder e estilo incomparáveis para o seu avatar.",
        badge: "🏆 Lendário",
        info: "💪 Dano +50%",
        imagem: "https://via.placeholder.com/300x150/111/fff?text=Item+Lendario"
    },

    /* ========= SERVIÇOS (ID 21 ao 30) ========= */
    {
        id: 21,
        nome: "Power Leveling",
        categoria: "servicos",
        preco: 59.90,
        precoOriginal: 119.90,
        desc: "Subimos o seu nível rapidamente com segurança.",
        badge: "🔥 Popular",
        info: "🎮 Entrega em 24h",
        imagem: "https://via.placeholder.com/300x150/111/fff?text=Servico+Leveling"
    }
];

// Exporta para garantir que o script.js o veja (opcional dependendo de como chamas no HTML)
console.log("Produtos carregados com sucesso: " + produtos.length);
