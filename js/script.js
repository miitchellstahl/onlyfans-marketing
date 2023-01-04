history.scrollRestoration = "manual";

//Scroll to top

const scrollTop = document.querySelector("#scroll-to-top");

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

let interval = 4000;

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
