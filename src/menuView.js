import Pizza from "./icons/pizza.png";
import soup from "./icons/soup.png";
import spaghetti from "./icons/spaghetti.png";
import chicken from "./icons/chicken-leg.png";
import burger from "./icons/burger.png";
import coffee from "./icons/coffee-cup.png";
import menuHTML from "./menuHTML";

const menuView = function () {
  // insert menu html into the DOM
  menuHTML();
  // set all icons images source
  const imageOne = document.querySelector(".menu1-image");
  const imageTwo = document.querySelector(".menu2-image");
  const imageThree = document.querySelector(".menu3-image");
  const imageFour = document.querySelector(".menu4-image");
  const imageFive = document.querySelector(".menu5-image");
  const imageSix = document.querySelector(".menu6-image");
  imageOne.src = soup;
  imageTwo.src = Pizza;
  imageThree.src = spaghetti;
  imageFour.src = burger;
  imageFive.src = chicken;
  imageSix.src = coffee;
};

export default menuView;
