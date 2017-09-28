var link = document.querySelector(".login");
var modalLogin = document.querySelector(".modal-content");
var overlay = document.querySelector(".modal-overlay");
var close = modalLogin.querySelector(".modal-content-close");
var login = modalLogin.querySelector("[name=login]");
var password = modalLogin.querySelector("[name=password]");
var form = modalLogin.querySelector("form");
var storage = localStorage.getItem("login");

var map = document.querySelector(".js-open-map");
var popup = document.querySelector(".modal-content-map");
var mapClose = popup.querySelector(".modal-content-close");

link.addEventListener("click", function (event) {
  event.preventDefault();
  modalLogin.classList.add("modal-content-show");
  overlay.classList.add("modal-content-show");
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

map.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  overlay.classList.add("modal-content-show");
});

close.addEventListener("click", function (event) {
  event.preventDefault();
  modalLogin.classList.remove("modal-content-show");
  modalLogin.classList.remove("modal-error");
  overlay.classList.remove("modal-content-show");
});
mapClose.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  overlay.classList.remove("modal-content-show");
});

form.addEventListener("submit", function (event) {
  if (!login.value || !password.value) {
    event.preventDefault();
    modalLogin.classList.add("modal-error");
  } else {
    localStorage.setItem("login", login.value);
  }
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (modalLogin.classList.contains("modal-content-show")) {
      modalLogin.classList.remove("modal-content-show");
      modalLogin.classList.remove("modal-error");
      overlay.classList.remove("modal-content-show");
    }
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      overlay.classList.remove("modal-content-show");
    }
  }
});

overlay.addEventListener("click", function (event) {
  if (modalLogin.classList.contains("modal-content-show")) {
    modalLogin.classList.remove("modal-content-show");
    modalLogin.classList.remove("modal-error");
    overlay.classList.remove("modal-content-show");
  }
  if (popup.classList.contains("modal-content-show")) {
    popup.classList.remove("modal-content-show");
    overlay.classList.remove("modal-content-show");
  }
});