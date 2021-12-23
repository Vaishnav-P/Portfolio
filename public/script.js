var nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    nav.classList.add("bg-primary", "shadow");
  } else {
    nav.classList.remove("bg-primary", "shadow");
  }
});
// window.onresize = function (event) {
//   $(function () {
//     var w = Math.max(
//       document.documentElement.clientWidth,
//       window.innerWidth || 0
//     );
//     var h = Math.max(
//       document.documentElement.clientHeight,
//       window.innerHeight || 0
//     );
//     $("html, body").css({ width: w, height: h });
//   });
// };
var scroll = window.requestAnimationFrame;
var lookOut = document.querySelectorAll(".show-on-scroll");

var ids = [
  "w-85",
  "python-bar",
  "w-68",
  "java-bar",
  "html-text",
  "html-bar",
  "w-80",
  "css-bar",
  "w-60",
  "react-bar",
  "php-text",
  "php-bar",
];
var i = 0;
function loop() {
  lookOut.forEach(function (element) {
    if (isElementInViewport(element) && element.id === "") {
      element.setAttribute("id", ids[i]);
      if (i < ids.length - 1) {
        i += 1;
      }

      if (element.tagName === "SPAN") {
        var counter = 0;
        increment(element, counter);
      }
    }
  });

  scroll(loop);
}
loop();

function increment(element, counter) {
  const animationDuration = 2000;
  const frameDuration = 1000 / 60;
  const totalFrames = Math.round(animationDuration / frameDuration);
  const easeOutQuad = (t) => t * (2 - t);
  const countTo = parseInt(element.innerHTML);
  const frames = setInterval(() => {
    counter++;
    const progress = easeOutQuad(counter / totalFrames);
    const currentCount = Math.round(countTo * progress);
    if (parseInt(element.innerHTML) !== currentCount) {
      element.innerHTML = currentCount + "%";
    }
    if (counter === totalFrames) {
      clearInterval(frames);
    }
  }, frameDuration);
}
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
}
