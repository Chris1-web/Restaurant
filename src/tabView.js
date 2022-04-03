const tabView = function () {
  const homeContainer = document.querySelector(".hero-view");
  const home = document.querySelector(".home");
  const menu = document.querySelector(".menu-nav");
  const menuContainer = document.querySelector(".menu-container");
  menu.addEventListener("click", function () {
    homeContainer.classList.add("hide");
    home.classList.remove("active");
    menuContainer.classList.remove("hide");
    menu.classList.add("active");
  });
  home.addEventListener("click", function () {
    homeContainer.classList.remove("hide");
    home.classList.add("active");
    menuContainer.classList.add("hide");
    menu.classList.remove("active");
  });
};

export default tabView;
