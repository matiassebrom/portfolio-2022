const navHeight = document
  .querySelector("#header > nav")
  .getBoundingClientRect().height;

const SectionsDivs = document.querySelectorAll("main > section >div");

SectionsDivs.forEach(element => {
  element.style.paddingTop = navHeight *1.3 + "px";
});
