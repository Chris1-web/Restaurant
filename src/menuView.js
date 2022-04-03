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
                <div class="menu1-image">
                  <img src="../src/icons/soup.png" alt="steak soup icon" />
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
                <div class="menu2-image">
                  <img src="../src/icons/pizza.png" alt="" />
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
                <div class="menu3-image">
                  <img src="../src/icons/spaghetti.png" alt="" />
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
                <div class="menu4-image">
                  <img src="../src/icons/burger.png" alt="" />
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
                <div class="menu5-image">
                  <img src="../src/icons/chicken-leg.png" alt="" />
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
                <div class="menu6-image">
                  <img src="../src/icons/coffee-cup.png" alt="" />
                </div>
              </div>
            </div>
          </div>
    `;
  // return html;
  container.insertAdjacentHTML("beforeend", html);
};

export default menuView;
