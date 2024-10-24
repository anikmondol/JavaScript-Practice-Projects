let yPosValue = document.querySelector("#ypos-value");
let xPosValue = document.querySelector("#xpos-value");


window.addEventListener("mouseover", e => {

  const xClient = e.clientX;
  const yClient = e.clientY;

  yPosValue.textContent = yClient;
  xPosValue.textContent = xClient;

});