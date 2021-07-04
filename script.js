
  let hamburgerMenu = document.querySelector(".header__nav_mobile_icon");
  let menuItems = document.querySelector(".header__nav_mobile_items");


hamburgerMenu.addEventListener("click", ()=>{
     menuItems.classList.toggle("hide");
})