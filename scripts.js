const products = [
    {
        id: 1,
        title: "Smartphone Samsung Galaxy A13",
        price: 1599.,
        discount: 15,
        imagem: "https://i.ibb.co/93sSXmwv/br-galaxy-a13-sm-a135-sm-a135mzkjleb-535106493.avif"
    },
    {
        id: 2,
        title: "Fone Bluetooth JBL",
        price: 327.00,
        discount: 18,
        imagem: "https://i.ibb.co/nq4xDR3s/fone-JBL.webp"
    },
    {
        id: 3,
        title: "Tablet Samsung 10 polegadas",
        price: 1999.99,
        discount: 10,
        imagem: "https://i.ibb.co/LhY3XdCB/tablet-samsung.avif"
    },
    {
        id: 4,
        title: "Smartwatch Xiaomi",
        price: 599.99,
        discount: 25,
        imagem: "https://i.ibb.co/Z1H907yr/relogio-smartwatch-xiaomi-redmi-watch-5-active-alexa-tela-2-polegadas-xm826pre-1052583.jpg"
    },
    {
        id: 5,
        title: "Câmera Fotográfica",
        price: 2499.99,
        discount: 12,
        imagem: "https://i.ibb.co/ymYh3LMg/camera-canon.webp"
    },
    {
        id: 6,
        title: "Laptop Dell Inspiron",
        price: 3999.99,
        discount: 8,
        imagem: "https://i.ibb.co/kVcgCMzV/90-notebook-dell-inspiron-3542-tela-15-6-touchscreen-intel-core-i5-8gb-ssd-256gb-alfanumerico-17579.jpg"
    }
];

function formatPrice(price) {
    return price.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

function createProductCard(product) {
    return  `
    
    <div class="product-card">
    <img src="${product.imagem}" alt="${product.title}" class="product-image">
    <h3 class="product-title">${product.title}</h3>
    <div class="product-price">${formatPrice(product.price)}</div>
    <div class="product-discount">${product.discount}% OFF</div>
    </div>
    `;
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
    renderProducts(products);
    
    // Adiciona evento de busca ao input
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('input', (e) => {
        searchProducts(e.target.value);
    });
});
