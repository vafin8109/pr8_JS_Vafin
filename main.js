'use strict'
// задание 1
const clickBtn = document.getElementById("clickBtn");
const hoverBtn = document.getElementById("hoverBtn");
const focusBtn = document.getElementById("focusBtn");

clickBtn.addEventListener("click", () => {
  clickBtn.classList.add("clicked");
  clickBtn.textContent = "Событие: Клик";
});

hoverBtn.addEventListener("mouseenter", () => {
  hoverBtn.classList.add("clicked");
  hoverBtn.textContent = "Событие: Наведение";
});

hoverBtn.addEventListener("mouseleave", () => {
  hoverBtn.classList.remove("clicked");
  hoverBtn.textContent = "Наведите на меня";
});

focusBtn.addEventListener("focus", () => {
  focusBtn.classList.add("focused");
  focusBtn.textContent = "Событие: Фокус";
});

focusBtn.addEventListener("blur", () => {
  focusBtn.classList.remove("focused");
  focusBtn.textContent = "Нажмите и выйдите";
});

// задание 2
document.addEventListener("keydown", (keyEvent) => {
  switch (keyEvent.code) {
    case "KeyR":
      document.body.style.backgroundColor = "red";
      break;
    case "KeyG":
      document.body.style.backgroundColor = "green";
      break;
    case "KeyB":
      document.body.style.backgroundColor = "blue";
      break;
  }
});

document.addEventListener("keyup", (keyEvent) => {
  switch (keyEvent.code) {
    case "KeyR":
      document.body.style.backgroundColor = "#fff";
      break;
    case "KeyG":
      document.body.style.backgroundColor = "#fff";
      break;
    case "KeyB":
      document.body.style.backgroundColor = "#fff";
      break;
  }
});
// задание 3

let block = document.getElementById("block");

document.addEventListener("keydown", function (keyEvent) {
  let left = parseInt(block.style.left) || 0;
  let top = parseInt(block.style.top) || 0;

  switch (keyEvent.code) {
    case "KeyW":
      block.style.top = `${top - 1}px`;
      break;
    case "KeyS":
      block.style.top = `${top + 1}px`;
      break;
    case "KeyA":
      block.style.left = `${left - 1}px`;
      break;
    case "KeyD":
      block.style.left = `${left + 1}px`;
      break;
  }
});
