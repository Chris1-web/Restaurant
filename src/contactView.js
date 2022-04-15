import phone from "./icons/phone-call.png";
import address from "./icons/address.png";
import mailer from "./icons/mail.png";
import facebook from "./icons/facebook.png";
import instagram from "./icons/instagram.png";
import twitter from "./icons/twitter.png";
import gitIcon from "./icons/github.png";
import { contactHTML } from "./htmlViews";

const contactView = function () {
  // display html for contects page
  contactHTML();
  // set icon images src
  const facebookIcon = document.querySelector(".facebook-icon");
  const twitterIcon = document.querySelector(".twitter-icon");
  const instagramIcon = document.querySelector(".instagram-icon");
  const phoneIcon = document.querySelector(".phone-icon");
  const mailIcon = document.querySelector(".mail-icon");
  const addressIcon = document.querySelector(".address-icon");
  const githubIcon = document.querySelector(".contact-github-icon");

  facebookIcon.src = facebook;
  twitterIcon.src = twitter;
  instagramIcon.src = instagram;
  phoneIcon.src = phone;
  mailIcon.src = mailer;
  addressIcon.src = address;
  githubIcon.src = gitIcon;
};

export default contactView;
