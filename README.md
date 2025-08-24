# Práctica DOM – Galería dinámica (MiTienda·DOM)

Galería de productos generada **100% con JavaScript** manipulando el **DOM**.  
Incluye **búsqueda**, **filtros** (vendedor, estrellas), **orden por precio** y **tarjetas** responsive con **fallback** de imagen.

## ✨ Características
- Render de tarjetas desde un **array de objetos** (`products`) con `template literals`.
- Filtros vivos: **vendedor**, **estrellas mín.**, **orden precio**.
- **Buscador** por nombre en tiempo real.
- **Placeholder** automático si una imagen falla (PNG/JPG roto).
- Diseño **responsive** (grid + media queries), **hover** y dark theme.

## 🧩 Tecnologías
HTML5, CSS3 (Grid/Flex, `aspect-ratio`, `object-fit`), JavaScript (DOM, eventos, `map/filter/sort`).

## 📁 Estructura
├─ index.html
├─ style.css
└─ main.js

## ▶️ Cómo ejecutar
1. Clona o descarga el repo.
2. Abre `index.html` en tu navegador. (No requiere servidor)

> Opcional: sirve el proyecto con un servidor estático (ej. `Live Server` de VS Code).

## 🧪 Cómo probar
- Escribe en la caja de búsqueda (arriba) → filtra por nombre.
- Cambia **vendedor**, **estrellas mín.** y **orden precio** → el catálogo se actualiza.
- Desconecta internet en una tarjeta para ver el **placeholder** de imagen.

## 🧱 Datos de ejemplo
Los 10 productos están en `main.js` dentro de `const products = [...]`.  
Campos clave usados por la app:  
- `name`, `price`, `stars`, `reviews`, `seller`, `image`.

## ✅ Checklist de la rúbrica
- [x] HTML de las **cards generado dinámicamente** desde JS (tag templates).
- [x] Recorrido del **array de productos** para pintar cada item.
- [x] **Dos secciones**: filtros y catálogo (estructura HTML correcta).
- [x] **Mismo CSS** para todas las tarjetas + **:hover**.
- [x] **Responsive** con **grid** y media queries.
- [x] Imágenes correctas con **`object-fit: cover`** + `aspect-ratio`.
- [x] **Funcionalidad extra**: búsqueda, orden y placeholder de imagen.

## 🖼️ Capturas
<img width="1854" height="942" alt="image" src="https://github.com/user-attachments/assets/cf6f7856-d4f5-4fd2-afdb-759d01f5ee88" />


## 📜 Licencia
Uso académico.
