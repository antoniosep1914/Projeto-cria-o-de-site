document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.getElementById("products");
    const cartContainer = document.createElement("div");
    cartContainer.className = "cart";
    document.body.appendChild(cartContainer);

    
    const products = [
        { id: 1, name: "Camiseta 1999", price: 220, image: "camisa99.png" },
        { id: 2, name: "Camiseta 1993", price: 230, image: "camisa93.png" },
        { id: 3, name: "Camiseta 1977", price: 225, image: "camisa77.png" },
        { id: 4, name: "Camiseta 1960", price: 300, image: "camisa77.png" },
        { id: 5, name: "Camiseta 2009", price: 200, image: "camisa09.png" },
        { id: 6, name: "Camiseta 2014", price: 325, image: "camisa14.png" },
        { id: 7, name: "Camiseta 1951", price: 350, image: "camisa51.png" },
        { id: 8, name: "Camiseta 2012", price: 250, image: "camisa12.png" },
    ];

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.className = "product";
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <img src="${product.image}" alt="${product.name}">
            <p>Preço: $${product.price}</p>
           
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
