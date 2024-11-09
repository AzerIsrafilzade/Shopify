const navbarBtn = document.querySelector(".header .fa-bars-staggered")

const mobileMenyu = document.querySelector(".mobile-menyu")
const closeIcon = document.querySelector(".fa-circle-xmark")


navbarBtn.addEventListener("click", function() {
    mobileMenyu.classList.add("aktiv")
})

closeIcon.addEventListener("click", function() {
  
    mobileMenyu.classList.remove("aktiv")
})



const byShopifyDivi = document.querySelector("byShopify")


window.addEventListener("load",getLocaldanMelumatlariGetir)

async function getLocaldanMelumatlariGetir() {
  const unvan = "assets/bySopify.json"


  try {
    const gelenCavab = await fetch (unvan)
   
    const mukafatlar = await gelenCavab.json()


    byShopify.forEach(function(oneByShopify) {
      byShopifyrDivi.innerHTML += `
      <div class="swiper-slide text-center">
<div class="card rounded-0">
    <img src="${oneByShopify.byShopify_image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${oneByShopify.byShopify_name}</h5>
      <p class="card-text">${oneByShopify.byShopify_context}</p>
    </div>
  </div>
</div>
      `
  });

}

catch(err) {

}
  
}
