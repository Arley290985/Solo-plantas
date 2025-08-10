# Paradise Nursery 🌱

¡Bienvenido a Paradise Nursery!  
Esta es una tienda en línea de plantas de interior con un carrito de compras funcional, desarrollada en React + Vite.

## 🚀 Demo

[Visita la tienda en línea](https://Arley290985.github.io/Solo-plantas)

## 📦 Características

- **Página de inicio:** Presentación y acceso rápido al catálogo.
- **Listado de productos:** Plantas agrupadas por secciones (Aromáticas y Medicinales).
- **Carrito de compras:** 
  - Añadir plantas con cantidad.
  - Modificar cantidad o eliminar.
  - Ver resumen y total.
  - Botón de "Pagar" (vacía el carrito).
- **Navegación:** Barra superior con acceso a todas las páginas y contador de ítems en el carrito.
- **Persistencia:** (Opcional: puedes agregar localStorage para mantener el carrito al recargar).

## 🛠️ Instalación y ejecución local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Arley290985/Solo-plantas.git
   cd Solo-plantas
   ```
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## 🚢 Despliegue en GitHub Pages

Este proyecto se publica automáticamente en GitHub Pages mediante el comando:

```bash
npm run deploy
```

La página estará disponible en:  
**https://Arley290985.github.io/Solo-plantas**

## 📂 Estructura principal

```
src/
  components/        # Navbar, ProductCard, CartCard
  context/           # CartContext (manejo del carrito)
  data/              # products.js (catálogo de plantas)
  pages/             # LandingPage, ProductsPage, CartPage
  App.jsx
  main.jsx
```

## 💡 Tecnologías

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [gh-pages](https://www.npmjs.com/package/gh-pages) (deploy)

## ✨ Créditos

Desarrollado por [Arley290985](https://github.com/Arley290985)  
Imágenes de plantas de [Unsplash](https://unsplash.com/)

---
