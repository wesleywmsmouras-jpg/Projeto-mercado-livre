const products = [
    {
        id: 1,
        title: "Smartphone Samsung Galaxy A13",
        price: 1599.,
        discount: 15,
        imagem: "https://images.samsung.com/is/image/samsung/p6pim/br/sm-a135mzkjleb/gallery/br-galaxy-a13-sm-a135-sm-a135mzkjleb-535106493?$Q90_684_547_JPG$"
    },
    {
        id: 2,
        title: "Fone Bluetooth JBL",
        price: 327.00,
        discount: 18,
        imagem: "https://fastshopbr.vtexassets.com/arquivos/ids/498166/0-JBLLIVE770PTO-PRD-1500-1.jpg?v=638702103996270000"
    },
    {
        id: 3,
        title: "Tablet Samsung 10 polegadas",
        price: 1999.99,
        discount: 10,
        imagem: "https://images.samsung.com/is/image/samsung/br_GT-P7500UWLZTM_001_Front?$330_330_JPG$"
    },
    {
        id: 4,
        title: "Smartwatch Xiaomi",
        price: 599.99,
        discount: 25,
        imagem: "https://www.havan.com.br/media/catalog/product/cache/820af7facfa7aca6eb3c138e3457dc8d/r/e/relogio-smartwatch-xiaomi-redmi-watch-5-active-alexa-tela-2-polegadas-xm826pre_1052583.jpg"
    },
    {
        id: 5,
        title: "Câmera Fotográfica",
        price: 2499.99,
        discount: 12,
        imagem: "https://fujioka.vteximg.com.br/arquivos/ids/170588-1000-1000/a_227171_alta_1.jpg?v=637366257446530000"
    },
    {
        id: 6,
        title: "Laptop Dell Inspiron",
        price: 3999.99,
        discount: 8,
        imagem: "https://images.tcdn.com.br/img/img_prod/167552/90_notebook_dell_inspiron_3542_tela_15_6_touchscreen_intel_core_i5_8gb_ssd_256gb_alfanumerico_17579_1_b01044b231f05bdaf790411b01eee545.jpg"
    }
];


function formatprince( prince ) {
   
    return prince.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function createProductCard(products) {
    return  `
    
    <div class="product-card">
    <img src="${products.imagem}" alt="${products.title}" class="product-image">
    <h3 class="product-title">${products.title}</h3>
    <div class="product-price">${formatprince(products.price)}</div>
    <div class="product-discount">${products.discount}% OFF</div>
    </div>
    `
}

function renderProducts(productsToRender) {
    const grid = document.getElementById('productsGrid')
   
    grid.innerHTML = productsToRender.map(createProductCard).join('')
}

function searchProducts(searchTerm) {
    const filtered = products.filter(product => 
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    renderProducts(filtered);
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products)
    
    // Adiciona evento de busca ao input
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('input', (e) => {
        searchProducts(e.target.value);
    });
})