const container = document.querySelector(".container");
const contents = document.querySelectorAll(".content");
let flag = true;
let contentIdx = 0;

const dataIdxSetting = (elements) => {
  elements.forEach((element, index) => {
    element.dataset.index = index;
  });
};
const changeContent = (contentIdx) => {
  container.style.transform = `translateY(${-100 * contentIdx}vh)`;
  flag = false;
};

dataIdxSetting(contents);

const wheelHandler = (e) => {
  wheelDelta = e.deltaY;
  if (flag === true) {
    if (wheelDelta > 0 && contentIdx < contents.length - 1) {
      ++contentIdx;
      changeContent(contentIdx);
    } else if (wheelDelta < 0 && contentIdx > 0) {
      --contentIdx;
      changeContent(contentIdx);
    }
  }
  container.addEventListener("transitionend", () => {
    flag = true;
  });
  console.log(contentIdx);
};
window.addEventListener("wheel", wheelHandler);
