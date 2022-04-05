import Icon from "./icons/github.png";
import heroHTML from "./heroHTML";

const heroView = function () {
  // diplay home page html
  heroHTML();
  // get github icon src
  const github = document.querySelector(".github-icon");
  github.src = Icon;
};

export default heroView;
