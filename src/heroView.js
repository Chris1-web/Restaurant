import Icon from "./icons/github.png";

const heroView = function () {
  const container = document.querySelector("#content");
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
  container.insertAdjacentHTML("beforeend", html);
  const github = document.querySelector(".github-icon");
  github.src = Icon;
};

export default heroView;
