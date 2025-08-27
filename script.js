const products = [
  {
    id: 1,
    name: 'Tacos Regulares',
    description: 'Carne, cebolla y cilantro',
    price: 3.75,
    image: '1.jpg',
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
    image: '2.jpg',
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
    image: '3.jpg',
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
    image: '4.jpg',
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
    image: '5.jpg',
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
    image: '6.jpg',
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
    image: '1.jpg',
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
    image: '2.jpg',
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
    image: '3.jpg',
    category: 'Appetizers',
    ingredients: ['Totopos', 'Queso cheddar', 'Jalapeños', 'Crema agria'],
    allergens: ['Gluten', 'Lácteos'],
    prepTime: '5-7 min'
  }
];
const fallbackImages = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
];

function getImageUrl(product) {
  return product.image || "1.jpg";
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
    if (checkoutButton) checkoutButton.style.display = 'none';
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
  if (checkoutButton) {
    checkoutButton.style.display = 'block';
    addCheckoutListener(); // <-- Asegura que el botón tenga su listener
  }
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

// ------------------------
// Lógica de pantallas intro
// ------------------------

const introRoot = document.getElementById('intro-root');
const introScreen1 = document.getElementById('intro-screen-1');
const introScreen2 = document.getElementById('intro-screen-2');
const continueBtn = document.getElementById('continue-to-app');

// Guardar la opción seleccionada
let selectedIntroOption = null;

function showScreen(screenId) {
  // ocultar todas las pantallas intro
  document.querySelectorAll('.intro-screen').forEach(s => s.style.display = 'none');
  const s = document.getElementById(screenId);
  if (s) s.style.display = 'flex';
}

// --- Lógica de los carruseles en la pantalla 2 ---

// Botón flotante de carrito en pantalla 2
const cartFloatBtn = document.getElementById('cart-float-btn'); // sigue funcionando igual tras mover el botón

// Botón "VER MENÚ" en la cabecera de la pantalla 2
const verMenuBtn = document.getElementById('ver-menu-btn');
if (verMenuBtn) {
  verMenuBtn.addEventListener('click', () => {
    // Ocultar intro 2 y mostrar la app principal (igual que 'VER EL MENÚ COMPLETO')
    const screen2 = document.getElementById('intro-screen-2');
    screen2.style.display = 'none';
    document.querySelector('.header').style.display = '';
    document.querySelector('.sticky-container').style.display = '';
    document.getElementById('main-content').style.display = '';
    document.querySelector('.cart-button').style.display = '';
  });
}
if (cartFloatBtn) {
  cartFloatBtn.style.display = 'none'; // Oculto al inicio
  cartFloatBtn.addEventListener('click', () => {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) {
      renderCart();
      cartModal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    }
  });
}

// Mostrar/ocultar el botón de carrito flotante según el contenido del carrito
function updateCartFloatBtnVisibility() {
  if (!cartFloatBtn) return;
  const cart = localStorage.getItem('oaxaquenaca-cart');
  let count = 0;
  if (cart) {
    try {
      const obj = JSON.parse(cart);
      count = Object.values(obj).reduce((a, b) => a + b, 0);
    } catch {}
  }
  cartFloatBtn.style.display = count > 0 ? 'flex' : 'none';
}

// Llamar al actualizar el carrito
const originalAddToCart = CartManager.prototype.addToCart;
CartManager.prototype.addToCart = function(productId, quantity = 1) {
  originalAddToCart.call(this, productId, quantity);
  updateCartFloatBtnVisibility();
};
const originalRemoveFromCart = CartManager.prototype.removeFromCart;
CartManager.prototype.removeFromCart = function(productId) {
  originalRemoveFromCart.call(this, productId);
  updateCartFloatBtnVisibility();
};
const originalClearCart = CartManager.prototype.clearCart;
CartManager.prototype.clearCart = function() {
  originalClearCart.call(this);
  updateCartFloatBtnVisibility();
};
// Inicializar visibilidad al cargar
updateCartFloatBtnVisibility();


function getMasPedidos() {
  // Los 3 primeros productos (más pedidos)
  return products.slice(0, 3);
}

function getOfertasEspeciales() {
  // Selecciona productos que NO estén en los más pedidos y tengan imágenes
  const masPedidosIds = getMasPedidos().map(p => p.id);
  // Aquí puedes personalizar los ids de ofertas si lo deseas
  const ofertas = products.filter(p => !masPedidosIds.includes(p.id));
  // Si hay menos de 3, repite algunos para que siempre haya imágenes
  if (ofertas.length < 3) {
    return ofertas.concat(products.slice(0, 3 - ofertas.length));
  }
  return ofertas.slice(0, 3);
}

function renderCarousel(carouselId, items) {
  // Si es el carrusel de ofertas, asignar las imágenes locales
  if (carouselId === 'carousel-ofertas') {
    const ofertasImgs = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
    for (let i = 0; i < Math.min(items.length, ofertasImgs.length); i++) {
      items[i].image = ofertasImgs[i];
    }
  }
  let idx = 0;
  const carousel = document.getElementById(carouselId);
  const slide = carousel.querySelector('.carousel-slide');
  const img = slide.querySelector('.carousel-img');
  const nombre = slide.querySelector('.carousel-nombre');
  const precio = slide.querySelector('.carousel-precio');
  const addBtn = slide.querySelector('.carousel-add');
  const dotsContainer = carousel.querySelector('.carousel-dots');

  // Crear puntos de paginación
  dotsContainer.innerHTML = '';
  const dots = items.map((_, i) => {
    const dot = document.createElement('span');
    dot.style.width = '10px';
    dot.style.height = '10px';
    dot.style.borderRadius = '50%';
    dot.style.background = '#ccc';
    dot.style.display = 'inline-block';
    dot.style.transition = 'background 0.2s';
    dot.style.cursor = 'pointer';
    dot.onclick = () => { idx = i; update(true); };
    dotsContainer.appendChild(dot);
    return dot;
  });

  function update(stopAutoplay) {
    const p = items[idx];
    img.src = getImageUrl(p);
    img.alt = p.name;
    nombre.textContent = p.name;
    precio.textContent = `$${p.price.toFixed(2)}`;
    addBtn.onclick = () => cartManager.addToCart(p.id, 1);
    dots.forEach((dot, i) => {
      dot.style.background = i === idx ? '#d33a2d' : '#ccc';
    });
    if (stopAutoplay) {
      clearInterval(interval);
      interval = setInterval(next, 3000);
    }
  }

  function next() {
    idx = (idx + 1) % items.length;
    update();
  }

  // Auto-avance cada 3 segundos
  let interval = setInterval(next, 3000);
  addBtn.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(next, 3000);
  });

  // Soporte para swipe táctil
  let startX = null;
  slide.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });
  slide.addEventListener('touchend', (e) => {
    if (startX === null) return;
    let endX = e.changedTouches[0].clientX;
    let dx = endX - startX;
    if (Math.abs(dx) > 40) {
      if (dx < 0) {
        idx = (idx + 1) % items.length;
      } else {
        idx = (idx - 1 + items.length) % items.length;
      }
      update(true);
    }
    startX = null;
  });

  update();
}

function mostrarPantallaCarruseles() {
  document.getElementById('intro-screen-1').style.display = 'none';
  const screen2 = document.getElementById('intro-screen-2');
  screen2.style.display = 'flex';
  renderCarousel('carousel-mas-pedidos', getMasPedidos());
  renderCarousel('carousel-ofertas', getOfertasEspeciales());
  document.getElementById('ver-menu-completo').onclick = () => {
    screen2.style.display = 'none';
    document.querySelector('.header').style.display = '';
    document.querySelector('.sticky-container').style.display = '';
    document.getElementById('main-content').style.display = '';
    document.querySelector('.cart-button').style.display = '';
  };
}

// manejar clicks en las opciones grandes
document.querySelectorAll('.intro-option').forEach(btn => {
  btn.addEventListener('click', (e) => {
    selectedIntroOption = btn.dataset.option;
    mostrarPantallaCarruseles();
    // marcar visualmente la opción seleccionada
    document.querySelectorAll('.intro-option').forEach(b => b.style.opacity = '0.6');
    btn.style.opacity = '1';
    btn.style.transform = 'scale(1.02)';
    // pequeña espera para animación y luego mostrar la siguiente pantalla
    setTimeout(() => showScreen('intro-screen-2'), 220);
  });
});

continueBtn.addEventListener('click', () => {
  // ocultar intro y mostrar la app
  introRoot.style.display = 'none';
  document.querySelector('.header').style.display = '';
  document.querySelector('.sticky-container').style.display = '';
  document.getElementById('main-content').style.display = '';
  document.querySelector('.cart-button').style.display = '';

  // opcional: puedes usar selectedIntroOption para personalizar la experiencia
  console.log('Opción seleccionada en intro:', selectedIntroOption);
});

// Función para checkout (redirigir a WhatsApp)
// Añadir event listener al botón checkout-button cada vez que se renderiza el carrito
function addCheckoutListener() {
  const checkoutButton = document.querySelector('.checkout-button');
  if (!checkoutButton) return;
  // Elimina listeners previos
  const newButton = checkoutButton.cloneNode(true);
  checkoutButton.parentNode.replaceChild(newButton, checkoutButton);
  newButton.addEventListener('click', () => {
  const cartItems = cartManager.getCartItems();
  if (cartItems.length === 0) {
    alert('Tu carrito está vacío');
    return;
  }

  const total = cartManager.getCartTotal();
  const lines = cartItems.map(item => `- ${item.name} x${item.quantity}: $${item.total.toFixed(2)}`).join('\n');

  // Obtener la opción seleccionada
  let opcion = '';
  if (typeof selectedIntroOption !== 'undefined' && selectedIntroOption) {
    let textoOpcion = '';
    if (selectedIntroOption === 'pickup') textoOpcion = 'Para retirar (pickup)';
    else if (selectedIntroOption === 'delivery') textoOpcion = 'Para delivery';
    else if (selectedIntroOption === 'mesa') textoOpcion = 'Para comer en mesa';
    else textoOpcion = selectedIntroOption;
    opcion = `Opción elegida: ${textoOpcion}\n\n`;
  }

  const message = `Hola, quiero hacer este pedido:\n${opcion}${lines}\n\nTotal: $${total.toFixed(2)}\n`;

  const phone = '5491162380446'; // +54 11 62380446
  const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  console.log('selectedIntroOption:', selectedIntroOption);
  console.log('waUrl:', waUrl);
  window.location.href = waUrl;
  });
}
// Esta función ya se llama desde renderCart()

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

