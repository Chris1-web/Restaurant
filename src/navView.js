const nav = function () {
  const content = document.querySelector("#content");
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
  content.insertAdjacentHTML("beforeend", html);
};

export default nav;
