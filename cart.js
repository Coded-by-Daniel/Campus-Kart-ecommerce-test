// cart.js - Handles shopping cart functionality

// Get cart from localStorage (or create empty)
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

// Save cart back to localStorage
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Add product to cart
function addToCart(productId) {
  const cart = getCart();
  const product = products[productId];
  if (!product) return;

  // check if already in cart
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }

  saveCart(cart);
  updateCartCount();
  alert(`${product.title} added to cart 🛒`);
}

// Remove item from cart
function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
  renderCart();
  updateCartCount();
}

// Update quantity of item
function updateQuantity(productId, newQty) {
  let cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.quantity = Math.max(1, newQty); // minimum 1
  }
  saveCart(cart);
  renderCart();
  updateCartCount();
}

// Show cart item count in header
function updateCartCount() {
  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const countEl = document.getElementById("cart-count");
  if (countEl) countEl.textContent = totalItems;
}

// Render cart page
function renderCart() {
  const cart = getCart();
  const container = document.getElementById("cart-items");
  const totalEl = document.getElementById("cart-total");

  if (!container) return;

  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty 🛒</p>";
    if (totalEl) totalEl.textContent = "₦0";
    return;
  }

  let total = 0;
  cart.forEach(item => {
    const product = products[item.id];
    if (!product) return;

    const itemTotal = parseInt(product.price.replace(/[₦,]/g, "")) * item.quantity;
    total += itemTotal;

    const div = document.createElement("div");
    div.classList.add("product-card");
    div.innerHTML = `
      <div class="product-info">
        <h3>${product.title}</h3>
        <p>Price: ${product.price}</p>
        <p>Quantity: 
          <input type="number" value="${item.quantity}" min="1" style="width:60px"
            onchange="updateQuantity('${item.id}', this.value)">
        </p>
        <p>Total: ₦${itemTotal.toLocaleString()}</p>
        <button class="btn btn-primary" onclick="removeFromCart('${item.id}')">Remove</button>
      </div>
    `;
    container.appendChild(div);
  });

  if (totalEl) totalEl.textContent = "₦" + total.toLocaleString();
}

// Checkout (basic)
function checkout() {
  const cart = getCart();
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  let orderSummary = "📦 Your Order:\n\n";
  cart.forEach(item => {
    const product = products[item.id];
    orderSummary += `${product.title} x ${item.quantity} - ${product.price}\n`;
  });

  orderSummary += "\nWe will contact you via WhatsApp to confirm your order.";

  alert(orderSummary);

  // Clear cart after checkout
  localStorage.removeItem("cart");
  updateCartCount();
  renderCart();
}
