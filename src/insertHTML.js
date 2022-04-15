// for all html insertion into the DOM
const insertHTML = function (position, html) {
  const container = document.querySelector("#content");
  container.insertAdjacentHTML(position, html);
};

export default insertHTML;
