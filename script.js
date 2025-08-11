const products = [
  {
    id: 1,
    name: 'Tacos Regulares',
    description: 'Carne, cebolla y cilantro',
    price: 3.75,
    image: 'https://images.pexels.com/photos/8474723/pexels-photo-8474723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Tacos',
    ingredients: ['Carne de res', 'Cebolla', 'Cilantro', 'Tortilla de maíz'],
    allergens: ['Gluten'],
    prepTime: '5-8 min'
  },
  {
    id: 2,
    name: 'Tacos de Suadero',
    description: 'Suadero, cebolla y cilantro',
    price: 4.00,
    image: 'https://images.pexels.com/photos/5639433/pexels-photo-5639433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Tacos',
    ingredients: ['Suadero', 'Cebolla', 'Cilantro', 'Tortilla de maíz'],
    allergens: ['Gluten'],
    prepTime: '5-8 min'
  },
  {
    id: 3,
    name: 'Tacos de Pastor',
    description: 'Carne al pastor, piña, cebolla y cilantro',
    price: 4.25,
    image: 'https://images.pexels.com/photos/2092916/pexels-photo-2092916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'Tacos',
    ingredients: ['Carne al pastor', 'Piña', 'Cebolla', 'Cilantro', 'Tortilla de maíz'],
    allergens: ['Gluten'],
    prepTime: '5-8 min'
  },
  {
    id: 4,
    name: 'Quesadilla Sencilla',
    description: 'Tortilla de harina con queso',
    price: 5.00,
    image: 'https://cdn.pixabay.com/photo/2022/05/23/19/57/quesadillas-7216839_1280.jpg',
    category: 'Quesadillas',
    ingredients: ['Tortilla de harina', 'Queso Oaxaca'],
    allergens: ['Gluten', 'Lácteos'],
    prepTime: '3-5 min'
  },
  {
    id: 5,
    name: 'Quesadilla con Carne',
    description: 'Tortilla de harina con queso y carne a elegir',
    price: 6.50,
    image: 'https://cdn.pixabay.com/photo/2017/02/01/16/39/quesadilla-2030648_1280.jpg',
    category: 'Quesadillas',
    ingredients: ['Tortilla de harina', 'Queso Oaxaca', 'Carne de res'],
    allergens: ['Gluten', 'Lácteos'],
    prepTime: '5-7 min'
  },
  {
    id: 6,
    name: 'Burrito de Frijoles',
    description: 'Tortilla de harina con frijoles y queso',
    price: 7.00,
    image: 'https://cdn.pixabay.com/photo/2018/05/28/19/29/burrito-3436980_1280.jpg',
    category: 'Burritos',
    ingredients: ['Tortilla de harina', 'Frijoles refritos', 'Queso', 'Arroz'],
    allergens: ['Gluten', 'Lácteos'],
    prepTime: '8-10 min'
  },
  {
    id: 7,
    name: 'Burrito de Carne Asada',
    description: 'Tortilla de harina con carne asada, arroz y frijoles',
    price: 9.50,
    image: 'https://cdn.pixabay.com/photo/2016/04/05/18/25/burrito-1310315_1280.jpg',
    category: 'Burritos',
    ingredients: ['Tortilla de harina', 'Carne asada', 'Arroz', 'Frijoles', 'Queso'],
    allergens: ['Gluten', 'Lácteos'],
    prepTime: '10-12 min'
  },
  {
    id: 8,
    name: 'Guacamole con Totopos',
    description: 'Aguacate fresco con pico de gallo y totopos',
    price: 6.00,
    image: 'https://cdn.pixabay.com/photo/2020/05/21/18/01/guacamole-5201334_1280.jpg',
    category: 'Appetizers',
    ingredients: ['Aguacate', 'Tomate', 'Cebolla', 'Cilantro', 'Limón', 'Totopos'],
    allergens: [],
    prepTime: '3-5 min'
  },
  {
    id: 9,
    name: 'Nachos con Queso',
    description: 'Totopos con queso caliente y jalapeños',
    price: 5.50,
    image: 'https://cdn.pixabay.com/photo/2017/04/04/19/23/nachos-2202971_1280.jpg',
    category: 'Appetizers',
    ingredients: ['Totopos', 'Queso cheddar', 'Jalapeños', 'Crema agria'],
    allergens: ['Gluten', 'Lácteos'],
    prepTime: '5-7 min'
  }
];

const UNIFIED_IMAGE_URL = 'https://images.pexels.com/photos/2092916/pexels-photo-2092916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

const fallbackImages = [
  'https://images.pexels.com/photos/8474723/pexels-photo-8474723.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/5639433/pexels-photo-5639433.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/2092916/pexels-photo-2092916.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://cdn.pixabay.com/photo/2022/05/23/19/57/quesadillas-7216839_640.jpg',
  'https://cdn.pixabay.com/photo/2017/02/01/16/39/quesadilla-2030648_640.jpg',
  'https://cdn.pixabay.com/photo/2018/05/28/19/29/burrito-3436980_640.jpg',
  'https://cdn.pixabay.com/photo/2016/04/05/18/25/burrito-1310315_640.jpg',
  'https://cdn.pixabay.com/photo/2020/05/21/18/01/guacamole-5201334_640.jpg',
  'https://cdn.pixabay.com/photo/2017/04/04/19/23/nachos-2202971_640.jpg'
];

function getImageUrl(product) {
  return UNIFIED_IMAGE_URL;
}

function handleImageError(imgEl, productId) {
  if (imgEl.dataset.fallbackApplied === 'true') return;
  imgEl.src = UNIFIED_IMAGE_URL;
  imgEl.dataset.fallbackApplied = 'true';
}

// Clase para manejar el carrito con persistencia
class CartManager {
  constructor() {
    this.cart = this.loadCart();
    this.updateCartCount();
  }

  loadCart() {
    const savedCart = localStorage.getItem('oaxaquenaca-cart');
    return savedCart ? JSON.parse(savedCart) : {};
  }

  saveCart() {
    localStorage.setItem('oaxaquenaca-cart', JSON.stringify(this.cart));
  }

  addToCart(productId, quantity = 1) {
    if (this.cart[productId]) {
      this.cart[productId] += quantity;
    } else {
      this.cart[productId] = quantity;
    }
    this.saveCart();
    this.updateCartCount();
    this.showAddToCartFeedback(productId);
  }

  removeFromCart(productId) {
    if (this.cart[productId] > 1) {
      this.cart[productId]--;
    } else {
      delete this.cart[productId];
    }
    this.saveCart();
    this.updateCartCount();
  }

  clearCart() {
    this.cart = {};
    this.saveCart();
    this.updateCartCount();
  }

  getCartTotal() {
    let total = 0;
    for (const productId in this.cart) {
      const product = products.find(p => p.id == productId);
      if (product) {
        total += product.price * this.cart[productId];
      }
    }
    return total;
  }

  getCartItems() {
    const items = [];
    for (const productId in this.cart) {
      const product = products.find(p => p.id == productId);
      if (product) {
        items.push({
          ...product,
          quantity: this.cart[productId],
          total: product.price * this.cart[productId]
        });
      }
    }
    return items;
  }

  updateCartCount() {
    const totalItems = Object.values(this.cart).reduce((sum, count) => sum + count, 0);
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
      cartCount.textContent = totalItems;
      cartCount.style.display = totalItems > 0 ? 'block' : 'none';
    }
  }

  showAddToCartFeedback(productId) {
    const product = products.find(p => p.id == productId);
    if (!product) return;

    // Crear notificación
    const notification = document.createElement('div');
    notification.className = 'add-to-cart-notification';
    notification.innerHTML = `
      <div class="notification-content">
        <span>✅ ${product.name} agregado al carrito</span>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animar y remover
    setTimeout(() => {
      notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 2000);
  }
}

// Inicializar el carrito
const cartManager = new CartManager();

const productContainer = document.getElementById('product-container');

// Función para debounce
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Variables globales para filtros
let currentCategory = 'all';
let currentSort = 'name';
let currentPriceRange = 'all';

function renderProducts(productsToRender) {
  productContainer.innerHTML = '';
  
  if (productsToRender.length === 0) {
    productContainer.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; color: #999;">
        <p>No se encontraron productos que coincidan con tu búsqueda.</p>
        <p>Intenta con otros términos o categorías.</p>
      </div>
    `;
    return;
  }
  
  productsToRender.forEach(product => {
    const imgSrc = getImageUrl(product);
    const productCard = `
      <div class="product-card" data-product-id="${product.id}">
        <img src="${imgSrc}" alt="${product.name}" loading="lazy" onerror="handleImageError(this, ${product.id})">
        <div class="product-details">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <div class="product-info">
            <span class="prep-time">⏱️ ${product.prepTime}</span>
            <span class="price">$${product.price.toFixed(2)}</span>
          </div>
        </div>
        <div class="price-add">
          <button class="add-btn" data-id="${product.id}" aria-label="Agregar ${product.name} al carrito">+</button>
        </div>
      </div>
    `;
    productContainer.innerHTML += productCard;
  });
}

// Función para aplicar filtros y ordenamiento
function applyFiltersAndSort() {
  let filteredProducts = [...products];
  
  // Filtrar por categoría
  if (currentCategory !== 'all') {
    filteredProducts = filteredProducts.filter(product => product.category === currentCategory);
  }
  
  // Filtrar por precio
  if (currentPriceRange !== 'all') {
    const [min, max] = currentPriceRange.split('-').map(Number);
    filteredProducts = filteredProducts.filter(product => {
      if (max) {
        return product.price >= min && product.price <= max;
      } else {
        return product.price >= min;
      }
    });
  }
  
  // Ordenar
  filteredProducts.sort((a, b) => {
    switch (currentSort) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'prep-time':
        const timeA = parseInt(a.prepTime.match(/\d+/)[0]);
        const timeB = parseInt(b.prepTime.match(/\d+/)[0]);
        return timeA - timeB;
      default:
        return 0;
    }
  });
  
  renderProducts(filteredProducts);
}

// Inicializar productos
applyFiltersAndSort();

const searchInput = document.querySelector('.search input');

// Búsqueda con debounce
const debouncedSearch = debounce((searchTerm) => {
  if (searchTerm.trim() === '') {
    applyFiltersAndSort();
    return;
  }
  
  const filteredProducts = products.filter(product => {
    const searchLower = searchTerm.toLowerCase();
    return product.name.toLowerCase().includes(searchLower) ||
           product.description.toLowerCase().includes(searchLower) ||
           product.category.toLowerCase().includes(searchLower) ||
           product.ingredients.some(ingredient => 
             ingredient.toLowerCase().includes(searchLower)
           );
  });
  renderProducts(filteredProducts);
}, 300);

searchInput.addEventListener('keyup', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  debouncedSearch(searchTerm);
});

productContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('add-btn')) {
    const productId = parseInt(e.target.dataset.id);
    cartManager.addToCart(productId);
  }
});

const cartModal = document.getElementById('cart-modal');
const closeModal = document.querySelector('.close-button');
const cartButton = document.querySelector('.cart-button');

cartButton.addEventListener('click', () => {
  renderCart();
  cartModal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Prevenir scroll
});

closeModal.addEventListener('click', () => {
  cartModal.style.display = 'none';
  document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
  if (e.target == cartModal) {
    cartModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

const cartItemsContainer = document.getElementById('cart-items');

cartItemsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-from-cart')) {
    const productId = parseInt(e.target.dataset.id);
    cartManager.removeFromCart(productId);
    renderCart();
  }
});

function renderCart() {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotalContainer = document.getElementById('cart-total');
  const checkoutButton = document.querySelector('.checkout-button');
  
  cartItemsContainer.innerHTML = '';
  
  const cartItems = cartManager.getCartItems();
  
  if (cartItems.length === 0) {
    cartItemsContainer.innerHTML = '<p class="empty-cart">Tu carrito está vacío</p>';
    cartTotalContainer.innerHTML = '';
    checkoutButton.style.display = 'none';
    return;
  }

  cartItems.forEach(item => {
    const cartItem = `
      <div class="cart-item">
        <div class="cart-item-details">
          <span class="item-name">${item.name}</span>
          <div class="item-controls">
            <button class="quantity-btn minus" data-id="${item.id}" aria-label="Reducir cantidad">-</button>
            <span class="quantity">${item.quantity}</span>
            <button class="quantity-btn plus" data-id="${item.id}" aria-label="Aumentar cantidad">+</button>
          </div>
          <span class="item-total">$${item.total.toFixed(2)}</span>
        </div>
        <button class="remove-from-cart" data-id="${item.id}" aria-label="Eliminar ${item.name}">🗑️</button>
      </div>
    `;
    cartItemsContainer.innerHTML += cartItem;
  });

  const total = cartManager.getCartTotal();
  cartTotalContainer.innerHTML = `<strong>Total: $${total.toFixed(2)}</strong>`;
  checkoutButton.style.display = 'block';
}

// Manejar controles de cantidad en el carrito
cartItemsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('quantity-btn')) {
    const productId = parseInt(e.target.dataset.id);
    if (e.target.classList.contains('plus')) {
      cartManager.addToCart(productId, 1);
    } else if (e.target.classList.contains('minus')) {
      cartManager.removeFromCart(productId);
    }
    renderCart();
  }
});

const tabs = document.querySelector('.tabs');

tabs.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    // Remover clase activa de todos los botones
    document.querySelectorAll('.tabs button').forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    });
    
    // Agregar clase activa al botón clickeado
    e.target.classList.add('active');
    e.target.setAttribute('aria-selected', 'true');
    
    currentCategory = e.target.dataset.category;
    applyFiltersAndSort();
  }
});

// Inicializar el primer tab como activo
const firstTab = document.querySelector('.tabs button[data-category="all"]');
firstTab.classList.add('active');
firstTab.setAttribute('aria-selected', 'true');

// Función para checkout (redirigir a WhatsApp)
document.querySelector('.checkout-button').addEventListener('click', () => {
  const cartItems = cartManager.getCartItems();
  if (cartItems.length === 0) {
    alert('Tu carrito está vacío');
    return;
  }

  const total = cartManager.getCartTotal();
  const lines = cartItems.map(item => `- ${item.name} x${item.quantity}: $${item.total.toFixed(2)}`).join('\n');
  const message = `Hola, quiero hacer este pedido:\n\n${lines}\n\nTotal: $${total.toFixed(2)}\n`; 

  const phone = '5491162380446';
  const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.location.href = waUrl;
});

// Manejar teclas de acceso rápido
document.addEventListener('keydown', (e) => {
  // ESC para cerrar modal
  if (e.key === 'Escape' && cartModal.style.display === 'block') {
    cartModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
  
  // Ctrl/Cmd + K para buscar
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    searchInput.focus();
  }
  
  // Ctrl/Cmd + L para limpiar búsqueda
  if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
    e.preventDefault();
    searchInput.value = '';
    applyFiltersAndSort();
  }
});

// Función para mostrar estadísticas del carrito
function showCartStats() {
  const cartItems = cartManager.getCartItems();
  if (cartItems.length === 0) return;
  
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartManager.getCartTotal();
  const avgPrice = totalPrice / totalItems;
  
  console.log(`📊 Estadísticas del carrito:
  • Productos únicos: ${cartItems.length}
  • Total de items: ${totalItems}
  • Precio total: $${totalPrice.toFixed(2)}
  • Precio promedio por item: $${avgPrice.toFixed(2)}`);
}

// Agregar estadísticas al carrito
const originalRenderCart = renderCart;
renderCart = function() {
  originalRenderCart();
  showCartStats();
};

// Función para exportar carrito (para desarrollo)
window.exportCart = function() {
  const cartData = cartManager.getCartItems();
  const dataStr = JSON.stringify(cartData, null, 2);
  const dataBlob = new Blob([dataStr], {type: 'application/json'});
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'carrito-oaxaquenaca.json';
  link.click();
  URL.revokeObjectURL(url);
};

// Función para limpiar carrito (para desarrollo)
window.clearCart = function() {
  if (confirm('¿Estás seguro de que quieres limpiar el carrito?')) {
    cartManager.clearCart();
    renderCart();
  }
};

// Agregar información de desarrollo en consola
console.log(`
🍽️ La Oaxaqueñaca - Menú Digital
📱 Versión: 2.0 (Mejorada)
✨ Funcionalidades:
   • Persistencia del carrito
   • Búsqueda avanzada
   • Filtros por categoría
   • Gestión de cantidades
   • Animaciones y feedback visual
   • Accesibilidad mejorada
   • Atajos de teclado (Ctrl+K: buscar, Ctrl+L: limpiar)

🛠️ Funciones de desarrollo:
   • exportCart(): Exportar carrito como JSON
   • clearCart(): Limpiar carrito
`);
