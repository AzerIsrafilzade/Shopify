const navbarBtn = document.querySelector(".header .fa-bars-staggered")

const mobileMenyu = document.querySelector(".mobile-menyu")
const closeIcon = document.querySelector(".fa-circle-xmark")


navbarBtn.addEventListener("click", function () {
    mobileMenyu.classList.add("aktiv")
})

closeIcon.addEventListener("click", function () {

    mobileMenyu.classList.remove("aktiv")
})


const swiper = new Swiper(".visionSwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,

    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },

});

{/*  */ }

const visionDivi = document.querySelector("#vision")


window.addEventListener("load", getLocaldanMelumatlariGetir)

async function getLocaldanMelumatlariGetir() {
    const unvan = "assets/vision.json"


    try {
        const gelenCavab = await fetch(unvan)

        const vision = await gelenCavab.json()


        vision.forEach(function (oneVision) {
            visionDivi.innerHTML += `
<div class="swiper-slide text-center">
 <div class="card rounded-0">
    <div class="card-body">
      <h5 class="card-title">${oneVision.vision_name}</h5>
      <p class="card-text">${oneVision.vision_context}</p>
      <a href= class="card-nav">${oneVision.vision_nav}</a>
    </div>

  </div>
  <img src="${oneVision.vision_image}" class=" fixed-size card-img-top" alt="...">
  <img src="${oneVision.vision_image2}" class=" fixed-size card-img-top" alt="...">
</div>

</div>
      `
        });

    }

    catch (err) {

    }

}

const karusel = new Swiper(".shirketlerKaruseli", {
    slidesPerView: 4,
    spaceBetween: 30,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
  });

new Accordion('.accordion-left');
new Accordion('.accordion-right');





    
  
const startFreeTrialButton = document.getElementById("start-free-trial")

startFreeTrialButton.addEventListener("click", function(){

    
 
  Swal.fire({
    title: 'Welcome!',
    text: 'Are you ready to get started with our Shopify platform?',
    icon: 'question',
    confirmButtonText: 'Yes, let\'s go!',
    showCancelButton: true,
    cancelButtonText: 'No, thanks'
  }).then((result) => {
    if (result.isConfirmed) {
      // İstifadəçi "Yes" düyməsinə klik edəndə buraya daxil olur
      Swal.fire('Great!', 'Let\'s get started!', 'success');
    } else {
      // İstifadəçi "No" düyməsinə klik edəndə buraya daxil olur
      Swal.fire('Maybe next time!', '', 'info');
    }
  });

})

const playIconBtn = document.querySelector("#play-icon-btn")
const modaliBaglaIconu = document.querySelector(".modal-boxes .fa-xmark")
const modalQutuDivi =  document.querySelector(".arxasi-solgun-reng")

const modaliAc = () => {
 modalQutuDivi.classList.add("aktiv")
}
const modaliBagla = () => {
  modalQutuDivi.classList.remove("aktiv")
}


playIconBtn.addEventListener("click", modaliAc)
modaliBaglaIconu.addEventListener("click", modaliBagla)





// const mehsullarinGeleceyiDiv = document. querySelector(".mehsullar")

// window.addEventListener("DOMContentLoaded", getproducts)

// async function getproducts () {
//   const unvan = "https://fakestoreapi.com/products"

//   try{

//       // Promise-in 3 fazasi var -  pending, fulfilled, reject

//       const cavab = await fetch(unvan)
//       const mehsullar = await cavab. json ()
      
//       for (let i=0; i<mehsullar.length; i++) {
//           mehsullarinGeleceyiDiv.innerHTML += ` <div
//           class="w-full max-w-sm bg-white border border-gray-50 shadow dark:bg-gray-800 dark:border-gray-700">
//           <a href="#">
//               <img class="p-8 rounded-t-lg product-image" src="${mehsullar[i].image}" />
//           </a>
//           <div class="px-5 pb-5">
//               <a href="#">
//                   <h6 class="text-s mb-5 font-semibold tracking-tight text-gray-900 dark:text-white">
//                       ${mehsullar[i].title}
//                   </h6>
//               </a>
//               <div class="flex items-center mt-2.5 mb-5">
//                   <div class="flex items-center space-x-1 rtl:space-x-reverse">
//                       <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
//                           fill="currentColor" viewBox="0 0 22 20">
//                           <path
//                               d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                       </svg>
//                       <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
//                           fill="currentColor" viewBox="0 0 22 20">
//                           <path
//                               d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                       </svg>
//                       <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
//                           fill="currentColor" viewBox="0 0 22 20">
//                           <path
//                               d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                       </svg>
//                       <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
//                           fill="currentColor" viewBox="0 0 22 20">
//                           <path
//                               d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                       </svg>
//                       <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true"
//                           xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//                           <path
//                               d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                       </svg>
//                   </div>
//                   <span
//                       class="bg-blue-100 flex mb-auto text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3"> ${mehsullar[i].rating.rate}</span>
//               </div>
//               <div class="flex mt-auto items-center justify-between">
//                   <span class="text-lg font-bold text-gray-900 dark:text-white"> ${mehsullar[i].price} &#8380; </span>
//                   <a href="#"
//                       class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
//                       to cart</a>
//               </div>
//           </div>
//       </div>`

//       }

//   }

//   catch(xeta) {

//   }


// }



