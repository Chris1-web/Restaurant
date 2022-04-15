import insertHTML from "./insertHTML";

const heroHTML = function () {
  // home html
  const html = `
    <div class="hero-view">
        <div class="hero-section">
          <div class="hero-img-container"></div>
        </div>
        <article class="information">
          <h1>Home of the Best Stack</h1>
          <p>
            Our Restaurant steak is delicious. It is a standard meal grilled to
            your personal taste. Your satisfaction is our priority
          </p>
        </article>go
        <footer>
        <p>
        <span>Copyright &copy; 2022 Christianah</span>
          <a href="https://github.com/Chris1-web/Restaurant" target="_blank">
          <img alt="github icon" class="github-icon"/>
          </a>
        </p>
      </footer>
    </div>
    `;
  // insert html into the DOM
  insertHTML("beforeend", html);
};

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
  insertHTML("beforeend", html);
};

const navHTML = function () {
  const html = `
      <header>
        <div class="logo">STEAK HOUSE</div>
        <nav>
          <ul class="navigation">
            <li class="home active">Home</li>
            <li class="menu-nav">Menu</li>
            <li class="contact">Contact</li>
          </ul>
        </nav>
      </header>
  `;
  insertHTML("beforeend", html);
};

const contactHTML = function () {
  // html for contact page
  const html = `<div class="contact-container hide">
    <div class="left-contact">
      <div class="text">
        <h1>Contact Information</h1>
        <p>
          Fill up the form and our Team would get back to you <br />
          in 24 hours
        </p>
      </div>
      <ul class="contact-info">
        <li>
          <img src="../src/icons/phone-call.png" alt="phone icon" class="phone-icon"/>
          <span>+47 333 78 901</span>
        </li>
        <li>
          <img src="../src/icons/mail.png" alt="mail icon" class="mail-icon"/>
          <span> hello@helloworld.com</span>
        </li>
        <li>
          <img src="../src/icons/address.png" alt="address icon" class="address-icon"/>
          <span> 102 street 2172 DON</span>
        </li>
      </ul>
      <div class="social-links">
        <img src="../src/icons/facebook.png" alt="facebook icon" class="facebook-icon" />
        <img src="../src/icons/twitter.png" alt="twitter icon" class="twitter-icon"/>
        <img src="../src/icons/instagram.png" alt="instagram icon" class="instagram-icon"/>
      </div>
    </div>
    <div class="right-contact">
      <div class="contact-form">
        <form action="#" method="#">
          <div class="form-group">
            <div class="form">
              <label for="first_name">First Name</label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                required
              />
            </div>
            <div class="form">
              <label for="last_name">Last Name</label>
              <input type="text" name="last_name" id="last_name" required />
            </div>
          </div>
          <div class="form-group">
            <div class="form">
              <label for="email">Email</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div class="form">
              <label for="phone_number">Phone Number</label>
              <input type="text" name="phone_number" id="phone_number" />
            </div>
          </div>
          <div class="form-group">
            <div class="form">
              <label for="message">Message</label>
              <textarea name="message">Enter your message</textarea>
            </div>
            <div class="form">
              <button>SEND MESSAGE</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <footer>
        <p>
        <span>Copyright &copy; 2022 Christianah</span>
        <a href="https://github.com/Chris1-web/Restaurant" target="_blank">
            <img alt="github icon" class="contact-github-icon"/>
        </a>
        </p>
      </footer>
  </div>`;
  // insert contect html into the DOM
  insertHTML("beforeend", html);
};

export { heroHTML, menuHTML, navHTML, contactHTML };
