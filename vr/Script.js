// Script.js

// Função para adicionar um produto ao carrinho
function adicionar(event) {
    const button = event.target; // Botão que disparou o evento
    const product = button.parentElement; // Elemento pai do botão (div.product)
    const productName = product.querySelector('p:first-of-type').textContent; // Nome do produto
    const productPrice = parseFloat(product.querySelector('p:nth-of-type(2)').textContent.replace('R$ ', '')); // Preço do produto
    
    // Aqui você pode adicionar o produto ao carrinho, enviar para um servidor, etc.
    // Por enquanto, vamos apenas exibir um alerta com os detalhes do produto
    alert(`Produto adicionado ao carrinho:\n${productName}\nPreço: R$ ${productPrice.toFixed(2)}`);
}

// Adiciona um event listener para cada botão "Adicionar ao Carrinho"
const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

function addToCart(productId) {
    // Create a new object representing the product
    const product = {
        id: productId,
        quantity: 1
    };

    // Convert the product object to a JSON string
    const productJson = JSON.stringify(product);

    // Save the product to the session storage
    sessionStorage.setItem('product', productJson);
}
