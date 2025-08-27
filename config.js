// 🍽️ La Oaxaqueñaca - Configuración
// Archivo de configuración centralizada para la aplicación

const CONFIG = {
  // Información del restaurante
  restaurant: {
    name: 'La Oaxaqueñaca',
    tagline: 'Auténtica comida mexicana',
    description: 'Menú digital de La Oaxaqueñaca con tacos, quesadillas, burritos y más platillos mexicanos auténticos',
    version: '2.0.0'
  },

  // Configuración de la aplicación
  app: {
    maxItemsPerCart: 99,
    searchDebounceMs: 300,
    notificationDuration: 2000,
    localStorageKey: 'oaxaquenaca-cart'
  },

  // Configuración de precios
  pricing: {
    currency: 'USD',
    currencySymbol: '$',
    decimalPlaces: 2
  },

  // Configuración de categorías
  categories: [
    { id: 'all', name: 'Todos', color: '#d33a2d' },
    { id: 'Tacos', name: 'Tacos', color: '#ff6b35' },
    { id: 'Quesadillas', name: 'Quesadillas', color: '#ffab40' },
    { id: 'Burritos', name: 'Burritos', color: '#4CAF50' },
    { id: 'Appetizers', name: 'Appetizers', color: '#9C27B0' }
  ],

  // Configuración de filtros de precio
  priceRanges: [
    { id: 'all', name: 'Todos los precios', min: 0, max: null },
    { id: '0-5', name: 'Menos de $5', min: 0, max: 5 },
    { id: '5-8', name: '$5 - $8', min: 5, max: 8 },
    { id: '8+', name: 'Más de $8', min: 8, max: null }
  ],

  // Configuración de ordenamiento
  sortOptions: [
    { id: 'name', name: 'Por nombre', field: 'name' },
    { id: 'price-low', name: 'Precio: menor a mayor', field: 'price', order: 'asc' },
    { id: 'price-high', name: 'Precio: mayor a menor', field: 'price', order: 'desc' },
    { id: 'prep-time', name: 'Tiempo de preparación', field: 'prepTime' }
  ],

  // Configuración de alérgenos
  allergens: {
    'Gluten': { name: 'Gluten', icon: '🌾', description: 'Contiene trigo, cebada o centeno' },
    'Lácteos': { name: 'Lácteos', icon: '🥛', description: 'Contiene leche o derivados lácteos' },
    'Nueces': { name: 'Nueces', icon: '🥜', description: 'Contiene frutos secos' },
    'Mariscos': { name: 'Mariscos', icon: '🦐', description: 'Contiene mariscos' },
    'Huevos': { name: 'Huevos', icon: '🥚', description: 'Contiene huevos' },
    'Soya': { name: 'Soya', icon: '🫘', description: 'Contiene soya' }
  },

  // Configuración de animaciones
  animations: {
    duration: {
      fast: 200,
      normal: 300,
      slow: 500
    },
    easing: {
      smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    }
  },

  // Configuración de breakpoints responsive
  breakpoints: {
    mobile: 480,
    tablet: 768,
    desktop: 1024,
    wide: 1200
  },

  // Configuración de colores
  colors: {
    primary: '#d33a2d',
    secondary: '#ff6b35',
    accent: '#ffab40',
    success: '#4CAF50',
    warning: '#ff9800',
    error: '#f44336',
    info: '#2196F3',
    background: '#f0f2f5',
    surface: '#ffffff',
    text: {
      primary: '#333333',
      secondary: '#666666',
      disabled: '#999999'
    }
  },

  // Configuración de atajos de teclado
  shortcuts: {
    search: { key: 'k', ctrl: true, description: 'Enfocar búsqueda' },
    clearSearch: { key: 'l', ctrl: true, description: 'Limpiar búsqueda' },
    closeModal: { key: 'Escape', description: 'Cerrar modal' },
    openCart: { key: 'c', ctrl: true, description: 'Abrir carrito' }
  },

  // Configuración de mensajes
  messages: {
    cart: {
      empty: 'Tu carrito está vacío',
      added: '✅ {product} agregado al carrito',
      removed: '❌ {product} removido del carrito',
      updated: '🔄 Cantidad actualizada',
      cleared: '🗑️ Carrito limpiado'
    },
    search: {
      noResults: 'No se encontraron productos que coincidan con tu búsqueda.',
      suggestions: 'Intenta con otros términos o categorías.',
      placeholder: '🔍 Buscar platillos...'
    },
    checkout: {
      confirm: '¿Confirmar orden por ${total}?',
      success: '¡Gracias por tu orden! Esta funcionalidad estará disponible pronto.',
      empty: 'Tu carrito está vacío'
    }
  },

  // Configuración de validaciones
  validation: {
    minQuantity: 1,
    maxQuantity: 99,
    minSearchLength: 1,
    maxSearchLength: 100
  },

  // Configuración de desarrollo
  development: {
    debug: false,
    showStats: true,
    enableLogging: true,
    mockData: false
  }
};

// Función para obtener configuración
function getConfig(path) {
  return path.split('.').reduce((obj, key) => obj?.[key], CONFIG);
}

// Función para actualizar configuración
function updateConfig(path, value) {
  const keys = path.split('.');
  const lastKey = keys.pop();
  const target = keys.reduce((obj, key) => obj[key], CONFIG);
  if (target && lastKey) {
    target[lastKey] = value;
  }
}

// Función para formatear precio
function formatPrice(price) {
  const { currencySymbol, decimalPlaces } = CONFIG.pricing;
  return `${currencySymbol}${price.toFixed(decimalPlaces)}`;
}

// Función para obtener mensaje
function getMessage(path, replacements = {}) {
  let message = getConfig(`messages.${path}`);
  if (!message) return '';
  
  // Reemplazar placeholders
  Object.entries(replacements).forEach(([key, value]) => {
    message = message.replace(`{${key}}`, value);
  });
  
  return message;
}

// Función para validar cantidad
function validateQuantity(quantity) {
  const { minQuantity, maxQuantity } = CONFIG.validation;
  return Math.max(minQuantity, Math.min(maxQuantity, quantity));
}

// Función para obtener alérgenos formateados
function formatAllergens(allergens) {
  return allergens.map(allergen => {
    const info = CONFIG.allergens[allergen];
    return info ? `${info.icon} ${info.name}` : allergen;
  }).join(', ');
}

// Exportar configuración y utilidades
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CONFIG, getConfig, updateConfig, formatPrice, getMessage, validateQuantity, formatAllergens };
} else {
  window.CONFIG = CONFIG;
  window.getConfig = getConfig;
  window.updateConfig = updateConfig;
  window.formatPrice = formatPrice;
  window.getMessage = getMessage;
  window.validateQuantity = validateQuantity;
  window.formatAllergens = formatAllergens;
}

