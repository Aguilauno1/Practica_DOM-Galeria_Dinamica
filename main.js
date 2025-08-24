// ==== Datos (10 productos mínimo) ====
const products = [
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    stars: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg'
  },
  {
    name: 'Lenovo IdeaPad 3 15ITL6',
    price: 749,
    stars: 4.5,
    reviews: 44,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1018/10188918/183-lenovo-ideapad-3-15itl6-intel-core-i3-1115g4-8gb-512gb-ssd-156-review.jpg'
  },
  {
    name: 'ASUS VivoBook Pro 15 OLED',
    price: 949,
    stars: 4.6,
    reviews: 77,
    seller: 'ASUS Store',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1086/10863917/1483-asus-vivobook-15-oled-28k-m1505ya-amd-ryzen-7-7730u-16gb-1tb-ssd-156-pt.jpg'
  },
  {
    name: 'LG Gram 17',
    price: 1399,
    stars: 4.8,
    reviews: 18,
    seller: 'LG Official',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1087/10871084/1724-lg-gram-17-17z90s-intel-evo-core-ultra-7-155h-16gb-1tb-ssd-17-foto.jpg'
  },
  {
    name: 'HP 15s Intel i3 8GB/256',
    price: 539,
    stars: 4.2,
    reviews: 219,
    seller: 'HP Store',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1065/10650756/117-hp-250-g9-intel-core-i3-1215u-8gb-256-gb-ssd-156-caracteristicas.jpg'
  },
  {
    name: 'Acer Aspire 3 Ryzen 5',
    price: 629,
    stars: 4.1,
    reviews: 138,
    seller: 'Acer Store',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1093/10936359/1123-acer-aspire-go-15-ag15-42p-r8fn-amd-ryzen-5-5625u-8gb-512gb-ssd-156-windows-11-home.jpg'
  },
  {
    name: 'Apple MacBook Air M2 13"',
    price: 1299,
    stars: 4.9,
    reviews: 310,
    seller: 'Apple',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1039/10392473/1556-apple-macbook-air-apple-m2-8gb-512gb-ssd-gpu-deca-core-136-midnight.jpg'
  },
  {
    name: 'Dell Inspiron 14',
    price: 799,
    stars: 4.3,
    reviews: 96,
    seller: 'Dell',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1078/10784922/1692-bateria-para-portatil-dell-inspiron-14-5490-5491-5493-5498-yrdd6-p9of-01vx1h.jpg'
  },
  {
    name: 'MSI Modern 15',
    price: 699,
    stars: 4.0,
    reviews: 51,
    seller: 'MSI',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1067/10672839/1306-msi-modern-15-b13m-281xes-intel-core-i7-1355u-16gb-1tb-ssd-156-c2997c51-64cf-4687-8960-5c57b20d6c18.jpg'
  },
  {
    name: 'Samsung Galaxy Book3',
    price: 999,
    stars: 4.4,
    reviews: 61,
    seller: 'Samsung',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1066/10663871/153-samsung-galaxy-book3-360-intel-evo-core-i5-16gb-512gb-ssd-133-tactil.jpg'
  }
]

// ==== DOM helpers ====
const $ = (sel, ctx = document) => ctx.querySelector(sel)
const $$ = (sel, ctx = document) => ctx.querySelectorAll(sel)

const catalog = $('.catalog')
const sellerSelect = $('#seller')
const starsSelect = $('#stars')
const sortSelect = $('#sort')
const qInput = $('#q')
const clearBtn = $('#clear')

// Rellena opciones de vendedor a partir de datos
;(function fillSellers() {
  const sellers = Array.from(new Set(products.map((p) => p.seller))).sort()
  sellers.forEach((s) => {
    const opt = document.createElement('option')
    opt.value = s
    opt.textContent = s
    sellerSelect.appendChild(opt)
  })
})()

// Render de una tarjeta
function cardTemplate(p) {
  return `
    <article class="card" data-seller="${p.seller}">
      <div class="thumb">
        <img
          loading="lazy"
          src="${p.image}"
          alt="${p.name}"
          onerror="this.src='./assets/placeholder.jpg'; this.onerror=null;"
          referrerpolicy="no-referrer"
        />
      </div>
      <div class="body">
        <span class="badge">${p.seller}</span>
        <h3 class="title">${p.name}</h3>
        <div class="meta">
          <span class="stars">★ ${p.stars.toFixed(1)}</span>
          <span>·</span>
          <span>${p.reviews} reseñas</span>
        </div>
      </div>
      <div class="foot">
        <div class="price">${p.price.toFixed(2)}€</div>
        <button class="btn">Añadir</button>
      </div>
    </article>
  `
}

// Render del catálogo según filtros
function render(list) {
  catalog.setAttribute('aria-busy', 'true')
  catalog.innerHTML = list.map(cardTemplate).join('')
  catalog.setAttribute('aria-busy', 'false')
}

// Lógica de filtrado + orden + búsqueda
function applyFilters() {
  const q = qInput.value.trim().toLowerCase()
  const s = sellerSelect.value
  const minStars = Number(starsSelect.value || 0)
  const order = sortSelect.value

  let list = products
    .filter((p) => (s ? p.seller === s : true))
    .filter((p) => p.stars >= minStars)
    .filter((p) => p.name.toLowerCase().includes(q))

  if (order === 'asc') list = list.slice().sort((a, b) => a.price - b.price)
  if (order === 'desc') list = list.slice().sort((a, b) => b.price - a.price)

  render(list)
}

// Eventos
;[qInput, sellerSelect, starsSelect, sortSelect].forEach((el) =>
  el.addEventListener('input', applyFilters)
)
clearBtn.addEventListener('click', () => {
  qInput.value = ''
  applyFilters()
})

// Primer render
render(products)
