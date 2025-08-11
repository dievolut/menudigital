# 🍽️ La Oaxaqueñaca - Menú Digital

Una aplicación web moderna y responsive para el menú digital del restaurante "La Oaxaqueñaca", especializado en auténtica comida mexicana.

## ✨ Características Principales

### 🎯 Funcionalidades Core
- **Catálogo de Productos**: 9 platillos organizados en 4 categorías
- **Carrito de Compras**: Gestión completa con persistencia local
- **Búsqueda en Tiempo Real**: Filtrado por nombre, descripción, categoría e ingredientes
- **Filtros por Categoría**: Tacos, Quesadillas, Burritos, Appetizers
- **Gestión de Cantidades**: Controles +/- en el carrito
- **Checkout**: Proceso de confirmación de orden

### 🎨 Experiencia de Usuario
- **Diseño Responsive**: Optimizado para móviles y desktop
- **Animaciones Suaves**: Transiciones y efectos visuales
- **Feedback Visual**: Notificaciones al agregar productos
- **Estados Vacíos**: Mensajes informativos cuando no hay resultados
- **Loading States**: Indicadores de carga para mejor UX

### ♿ Accesibilidad
- **Navegación por Teclado**: Soporte completo para teclado
- **Atributos ARIA**: Roles y etiquetas para lectores de pantalla
- **Skip Links**: Enlaces para saltar al contenido principal
- **Focus Management**: Indicadores visuales de foco
- **Contraste Mejorado**: Colores optimizados para legibilidad

### 🚀 Performance
- **Lazy Loading**: Carga diferida de imágenes
- **Debounce**: Optimización de búsqueda en tiempo real
- **LocalStorage**: Persistencia eficiente del carrito
- **Event Delegation**: Gestión optimizada de eventos

## 📱 Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Flexbox, Grid, Animaciones, Gradientes
- **JavaScript ES6+**: Clases, Arrow Functions, Destructuring
- **LocalStorage API**: Persistencia de datos
- **Responsive Design**: Mobile-first approach

## 🍽️ Catálogo de Productos

### Tacos
- **Tacos Regulares** - $3.75 (Carne, cebolla y cilantro)
- **Tacos de Suadero** - $4.00 (Suadero, cebolla y cilantro)
- **Tacos de Pastor** - $4.25 (Carne al pastor, piña, cebolla y cilantro)

### Quesadillas
- **Quesadilla Sencilla** - $5.00 (Tortilla de harina con queso)
- **Quesadilla con Carne** - $6.50 (Tortilla de harina con queso y carne)

### Burritos
- **Burrito de Frijoles** - $7.00 (Tortilla de harina con frijoles y queso)
- **Burrito de Carne Asada** - $9.50 (Tortilla de harina con carne asada, arroz y frijoles)

### Appetizers
- **Guacamole con Totopos** - $6.00 (Aguacate fresco con pico de gallo y totopos)
- **Nachos con Queso** - $5.50 (Totopos con queso caliente y jalapeños)

## 🎮 Atajos de Teclado

- **Ctrl/Cmd + K**: Enfocar campo de búsqueda
- **Ctrl/Cmd + L**: Limpiar búsqueda
- **ESC**: Cerrar modal del carrito
- **Tab**: Navegación entre elementos
- **Enter**: Activar botones seleccionados

## 🛠️ Funciones de Desarrollo

### Consola del Navegador
```javascript
// Exportar carrito como JSON
exportCart()

// Limpiar carrito
clearCart()

// Ver estadísticas del carrito
// (Se muestran automáticamente en la consola)
```

### Información del Producto
Cada producto incluye:
- **Ingredientes**: Lista completa de ingredientes
- **Alérgenos**: Información de alérgenos presentes
- **Tiempo de Preparación**: Estimación del tiempo de cocina
- **Precio**: Precio actualizado
- **Categoría**: Clasificación del platillo

## 🎨 Paleta de Colores

- **Primario**: #d33a2d (Rojo mexicano)
- **Secundario**: #ff6b35 (Naranja)
- **Acento**: #ffab40 (Amarillo)
- **Éxito**: #4CAF50 (Verde)
- **Fondo**: #f0f2f5 (Gris claro)
- **Texto**: #333 (Gris oscuro)

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## 🔧 Instalación y Uso

1. **Clonar o descargar** los archivos del proyecto
2. **Abrir** `index.html` en un navegador web moderno
3. **¡Listo!** La aplicación está lista para usar

### Requisitos del Navegador
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 🚀 Mejoras Implementadas

### Fase 1: Funcionalidades Core ✅
- [x] Persistencia del carrito con localStorage
- [x] Gestión de cantidades en el carrito
- [x] Feedback visual al agregar productos
- [x] Validaciones de UX
- [x] Estados vacíos informativos

### Fase 2: Experiencia de Usuario ✅
- [x] Animaciones y transiciones suaves
- [x] Diseño responsive mejorado
- [x] Loading states y optimizaciones
- [x] Búsqueda con debounce
- [x] Filtros avanzados

### Fase 3: Accesibilidad ✅
- [x] Atributos ARIA completos
- [x] Navegación por teclado
- [x] Skip links
- [x] Focus management
- [x] Contraste mejorado

### Fase 4: Performance ✅
- [x] Lazy loading de imágenes
- [x] Optimización de re-renders
- [x] Event delegation
- [x] Código modular y mantenible

## 📊 Estadísticas del Proyecto

- **Líneas de Código**: ~500 líneas
- **Productos**: 9 platillos
- **Categorías**: 4 tipos
- **Funcionalidades**: 15+ características
- **Compatibilidad**: 95%+ navegadores modernos

## 🤝 Contribuciones

Este proyecto está abierto a mejoras y sugerencias. Algunas ideas para futuras versiones:

- [ ] Integración con sistema de pagos
- [ ] Modo offline con Service Workers
- [ ] PWA (Progressive Web App)
- [ ] Sistema de reseñas y calificaciones
- [ ] Personalización de platillos
- [ ] Historial de órdenes
- [ ] Notificaciones push
- [ ] Integración con redes sociales

## 📄 Licencia

Este proyecto es de uso libre para fines educativos y comerciales.

---

**Desarrollado con ❤️ para La Oaxaqueñaca**

*Auténtica comida mexicana en formato digital*

