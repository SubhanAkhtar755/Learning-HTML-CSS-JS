let total = 0;
let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });
    
    totalPrice.textContent = total.toFixed(2);
}

function checkout() {
    alert(`Checkout completed! Total: $${total.toFixed(2)}`);
    cart = [];
    total = 0;
    updateCart();
}

