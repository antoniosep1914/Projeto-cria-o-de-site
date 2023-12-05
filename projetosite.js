document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.getElementById("products");
    const cartContainer = document.createElement("div");
    cartContainer.className = "cart";
    document.body.appendChild(cartContainer);

    // Adicione seus produtos aqui
    const products = [
        { id: 1, name: "Camiseta 1999", price: 220, image: "camisa99.png" },
        { id: 2, name: "Camiseta 1993", price: 230, image: "camisa93.png" },
        { id: 3, name: "Camiseta 1977", price: 225, image: "camisa77.png" },
        // Adicione mais produtos conforme necessário
        // { id: 4, name: "Produto 4", price: 35, image: "product4.jpg" },
        // { id: 5, name: "Produto 5", price: 40, image: "product5.jpg" },
    ];

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.className = "product";
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <img src="${product.image}" alt="${product.name}">
            <p>Preço: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
            <button onclick="buyNow(${product.id})">Comprar Agora</button>
        `;
        productsContainer.appendChild(productElement);
    });

   
    window.addToCart = function (productId) {
        const selectedProduct = products.find(product => product.id === productId);
        if (selectedProduct) {
            cartContainer.innerHTML += `<p>${selectedProduct.name} - $${selectedProduct.price}</p>`;
        }
    };

    
    window.buyNow = function (productId) {
        const selectedProduct = products.find(product => product.id === productId);
        if (selectedProduct) {
            alert(`Compra realizada! ${selectedProduct.name} - $${selectedProduct.price}`);
        }
    };
});
