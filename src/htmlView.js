// for all html insertion into the DOM
const htmlView = function (position, html) {
  const container = document.querySelector("#content");
  container.insertAdjacentHTML(position, html);
};

export default htmlView;
