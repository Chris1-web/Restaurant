import Pizza from "./icons/pizza.png";
import soup from "./icons/soup.png";
import spaghetti from "./icons/spaghetti.png";
import chicken from "./icons/chicken-leg.png";
import burger from "./icons/burger.png";
import coffee from "./icons/coffee-cup.png";

const menuView = function () {
  const container = document.querySelector("#content");
  const html = `
    <div class="menu-container hide">
            <div class="left-side-menu">
              <div class="menu">
                <div class="writing">
                  <h2>Steak Soup</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
                    impedit quam adipisci porro. Velit quos minus iusto fugit
                    blanditiis.
                  </p>
                  <p class="price">$50</p>
                  <button>Order</button>
                </div>
                <div>
                  <img alt="steak soup icon" class="menu1-image"/>
                </div>
              </div>
              <div class="menu">
                <div class="writing">
                  <h2>Steak Pizza</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
                    impedit quam adipisci porro. Velit quos minus iusto fugit
                    blanditiis.
                  </p>
                  <p class="price">$60</p>
                  <button>Order</button>
                </div>
                <div>
                  <img alt="" class="menu2-image"/>
                </div>
              </div>
              <div class="menu">
                <div class="writing">
                  <h2>Steak Spaghetti</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
                    impedit quam adipisci porro. Velit quos minus iusto fugit
                    blanditiis.
                  </p>
                  <p class="price">$70</p>
                  <button>Order</button>
                </div>
                <div>
                  <img alt="" class="menu3-image"/>
                </div>
              </div>
            </div>
            <div class="right-side-menu">
              <div class="menu">
                <div class="writing">
                  <h2>Steak Burger</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
                    impedit quam adipisci porro. Velit quos minus iusto fugit
                    blanditiis.
                  </p>
                  <p class="price">$90</p>
                  <button>Order</button>
                </div>
                <div>
                  <img alt="" class="menu4-image"/>
                </div>
              </div>
              <div class="menu">
                <div class="writing">
                  <h2>Steak & Chicken</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
                    impedit quam adipisci porro. Velit quos minus iusto fugit
                    blanditiis.
                  </p>
                  <p class="price">$40</p>
                  <button>Order</button>
                </div>
                <div>
                  <img alt="" class="menu5-image"/>
                </div>
              </div>
              <div class="menu">
                <div class="writing">
                  <h2>Steak & Coffee</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
                    impedit quam adipisci porro. Velit quos minus iusto fugit
                    blanditiis.
                  </p>
                  <p class="price">$70</p>
                  <button>Order</button>
                </div>
                <div>
                  <img alt="" class="menu6-image"/>
                </div>
              </div>
            </div>
          </div>
    `;
  // return html;
  container.insertAdjacentHTML("beforeend", html);
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
