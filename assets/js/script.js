const navbarBtn = document.querySelector(".header .fa-bars-staggered")

const mobileMenyu = document.querySelector(".mobile-menyu")
const closeIcon = document.querySelector(".fa-circle-xmark")


navbarBtn.addEventListener("click", function() {
    mobileMenyu.classList.add("aktiv")
})

closeIcon.addEventListener("click", function() {
  
    mobileMenyu.classList.remove("aktiv")
})