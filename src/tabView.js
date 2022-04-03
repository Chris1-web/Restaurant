const tabView = function () {
  const homeContainer = document.querySelector(".hero-view");
  const home = document.querySelector(".home");
  const menu = document.querySelector(".menu-nav");
  const contact = document.querySelector(".contact");
  const menuContainer = document.querySelector(".menu-container");
  const contactContainer = document.querySelector(".contact-container");

  home.addEventListener("click", function () {
    homeContainer.classList.remove("hide");
    home.classList.add("active");
    menuContainer.classList.add("hide");
    menu.classList.remove("active");
    contactContainer.classList.add("hide");
    contact.classList.remove("active");
  });
  menu.addEventListener("click", function () {
    homeContainer.classList.add("hide");
    home.classList.remove("active");
    menuContainer.classList.remove("hide");
    menu.classList.add("active");
    contactContainer.classList.add("hide");
    contact.classList.remove("active");
  });
  contact.addEventListener("click", function () {
    homeContainer.classList.add("hide");
    home.classList.remove("active");
    menu.classList.remove("active");
    menuContainer.classList.add("hide");
    menuContainer.classList.add("hide");
    contact.classList.add("active");
    contactContainer.classList.remove("hide");
  });
};

export default tabView;
