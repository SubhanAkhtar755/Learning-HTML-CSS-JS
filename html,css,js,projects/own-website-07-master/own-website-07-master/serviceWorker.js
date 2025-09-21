const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/web.html",
  "/cv.html",
  "/style.css",
  "/style1.css",
  "/styleloader.css",
  "/indexloader.js",
  "/js/app.js",
  "/icons/icon-48x48.png",
  "/icons/icon-72x72.png",
  "/icons/icon-96x96.png",
  "/icons/icon-128x128.png",
  "/icons/icon-144x144.png",
  "/icons/icon-152x152.png",
  "/icons/icon-192x192.png",
  "/icons/icon-256x256.png",
  "/icons/icon-384x384.png",
  "/icons/icon-512x512.png",
  "/img/facebook-brands-solid.svg",
  "/img/github-brands-solid.svg",
  "/img/linkedin-brands-solid.svg",
  "/img/profile-image.jpg.jpeg",
  "/img/square-facebook-brands-solid.svg",
  "/img/square-github-brands-solid.svg",
  "/img/square-whatsapp-brands-solid.svg",
  "/images/front.jpeg",
  "/images/logo.jpeg",
  "/images/WhatsApp Image 2024-11-11 at 1.01.06 AM.jpeg",
  "/images/work-1.png",
  "/images/work-2.png",
  "/images/work-3.png",
"/project images/999.gif",
"/project images/888.gif",
"/project images/777.gif",
"/project images/666.gif",
"/project images/555.jpeg",
"/project images/444.webp",
"/project images/101.gif",
"/project images/102.gif",
"/project images/104.gif",
"/project images/105.gif",

]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})