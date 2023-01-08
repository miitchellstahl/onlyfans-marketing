history.scrollRestoration = "manual";

$(document).ready(function () {
  $(".contact-button").on("click", function (e) {
    var posTop = $("#five").offset().top; //Get the position of the element you want to scroll to
    e.preventDefault();
    e.stopPropagation();
    $("html, body").scrollTop(posTop); //Scroll to that position
    console.log(window.location);
  });
});
$(document).ready(function () {
  $(".explore-button").on("click", function (e) {
    var posTop = $("#one").offset().top; //Get the position of the element you want to scroll to
    e.preventDefault();
    e.stopPropagation();
    $("html, body").scrollTop(posTop); //Scroll to that position
    console.log(window.location);
  });
});

//Form

let numName = 0;
let numPhone = 0;

let form = document.querySelector(".left-contact");
let fullname = document.querySelector("#fullname");
let phone = document.querySelector("#phone");

form.addEventListener("submit", (e) => {
  validateInputs();

  if (numName == 0 && numPhone == 0) {
    return;
  }

  e.preventDefault();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};
const setSuccess = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const validateInputs = () => {
  const nameValue = fullname.value.trim();
  const phoneValue = phone.value.trim();

  if (nameValue === "") {
    setError(fullname, "Name is required");
    numName = 1;
  } else {
    setSuccess(fullname);
    numName = 0;
  }
  if (
    phone.value.length == 0 ||
    phone.value.length < 10 ||
    phone.value.length > 10
  ) {
    setError(phone, "Invalid Number");
    numPhone = 1;
  }
  if (!phone.value.match(/^[0-9]{10}$/)) {
    setError(phone, "Invalid Number");
    numPhone = 1;
  } else {
    setSuccess(phone);
    numPhone = 0;
  }
};

//Scroll to top

const scrollTop = document.querySelector("#scroll-to-top");
scrollTop.classList.add("hidden");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollTop.classList.remove("hidden");
    scrollTop.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
    scrollTop.classList.add("hidden");
  }
});

scrollTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

//FAQ

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

//scroll delay animation

let loader = document.querySelector(".loader");

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disappear");
}

//number counter animation

let valueDisplays = document.querySelectorAll(".num");

let interval = 2500;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);

  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;

    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
