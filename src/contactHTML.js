import htmlView from "./htmlView";

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
          <a href="https://github.com/Chris1-web/Restaurant" target="_blank"><img src="../src/icons/github.png" alt="git hub icon"/></a>
        </p>
      </footer>
  </div>`;
  // insert contect html into the DOM
  htmlView("beforeend", html);
};

export default contactHTML;
