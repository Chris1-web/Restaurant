import htmlView from "./htmlView";

const menuHTML = function () {
  // menu page html
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
  //insert menu html into the dom
  htmlView("beforeend", html);
};

export default menuHTML;
