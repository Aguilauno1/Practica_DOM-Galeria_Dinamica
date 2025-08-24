# Práctica DOM – Galería dinámica (MiTienda·DOM)

Este proyecto corresponde a la **segunda práctica** del módulo de Desarrollo Web.  
Es la **evolución directa** de [Proyecto-1-Requisitos-HTML-CSS](../Proyecto-1-Requisitos-HTML-CSS), donde construimos una landing page estática.  

En esta práctica hemos mejorado ese proyecto utilizando **JavaScript y DOM** para que el catálogo de productos sea **dinámico y funcional**.

---

## 🔮 De estático a dinámico
- En el **Proyecto 1 (HTML + CSS)** las tarjetas de productos estaban escritas directamente en el HTML → catálogo estático.
- En esta **Práctica DOM**:
  - Los productos se definen en un **array de objetos** en `main.js`.
  - Se generan dinámicamente con JavaScript usando **template literals**.
  - Se añadieron filtros, buscador y ordenación → **catálogo interactivo**.
  - Se mejoró la experiencia visual con efectos `:hover`, responsive y placeholder de imágenes.

---

## ✨ Características principales
- **Catálogo dinámico**: cards generadas desde JS recorriendo `products[]`.
- **Filtros activos**: por vendedor, estrellas mínimas y orden de precio.
- **Buscador en tiempo real**: filtra productos al escribir.
- **Responsive design**: grid adaptable a escritorio y móvil.
- **Hover y dark theme**: estética moderna y consistente.
---

## 🧩 Tecnologías
- HTML5 (estructura base)
- CSS3 (Grid/Flex, media queries, dark theme)
- JavaScript ES6+ (DOM, eventos, `map/filter/sort`)

---

## 📁 Estructura
practica-dom-galeria/
├─ index.html
├─ style.css
└─ main.js


---

## ✅ Checklist de requisitos
- [x] HTML de la web generado dinámicamente con JS (cards con template literals).
- [x] Recorrido del array de productos con bucles/métodos de array.
- [x] Estructura clara con dos secciones (`filters` y `catalog`).
- [x] Tarjetas con misma clase CSS + efecto `:hover`.
- [x] Responsive (media queries y grid).
- [x] Imágenes correctas (`object-fit: cover`, `aspect-ratio`).
- [x] Extra: buscador, orden, fallback de imágenes.

---

## 📸 Vista previa
> Capturas en escritorio.
> <img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/ff90af39-99d0-4a09-8aa4-d67d498f42be" />




---

## 📜 Licencia
Uso académico.
