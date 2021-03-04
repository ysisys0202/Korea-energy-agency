const container = document.querySelector(".container");
const contents = document.querySelectorAll(".content");
const pagination = document.querySelector(".content-pagination");
const paginationItems = document.querySelectorAll(".content-pagination-item");
const footer = document.querySelector(".global-footer");
const footerHeight = footer.getBoundingClientRect().height;
let flag = true;
let contentIdx = 0;
let currentContent = null;
let currentPaginationItem = null;

//데이터인덱스 세팅
const dataIdxSetting = (elements) => {
  elements.forEach((element, index) => {
    element.dataset.index = index;
  });
};

//콘텐트 바꾸기
const changeContent = (contentIdx) => {
  container.style.transform = `translateY(${-100 * contentIdx}vh)`;
  flag = false;
};
//다음 콘텐트로 바꾸기
const goToNextContent = () => {
  ++contentIdx;
  changeContent(contentIdx);
};
//이전 콘텐트로 바꾸기
const goToPrevContent = () => {
  --contentIdx;
  changeContent(contentIdx);
};
//요소 비활성화
const inactiveElement = (elements) => {
  elements.forEach((element) => {
    element.classList.remove("active");
  });
};
//요소 활성화
const activateElement = (contentIdx, elements) => {
  elements[contentIdx].classList.add("active");
};

const paginationHandler = (e) => {
  const targetItem = e.target;
  const targetIdx = targetItem.dataset.index;
  inactiveElement(paginationItems);

  if (targetItem.classList.contains("content-pagination-item")) {
    contentIdx = targetIdx;
    changeContent(targetIdx);
  }
  inactiveElement(contents);
  activateElement(contentIdx, contents);
  inactiveElement(paginationItems);
  activateElement(contentIdx, paginationItems);
};

const wheelHandler = (e) => {
  wheelDelta = e.deltaY;
  //휠하면 콘텐츠 바뀜
  if (flag === true) {
    if (wheelDelta > 0) {
      if (contentIdx < contents.length - 1) {
        goToNextContent();
      } else if (contentIdx === contents.length - 1) {
        container.style.transform = `translateY(calc${
          -100 * contentIdx
        }vh - ${footerHeight}px)`;
        flag = false;
      }
    } else if (wheelDelta < 0) {
      if (contentIdx > 0) {
        goToPrevContent();
      }
    } //else if (wheelDelta < 0 && contentIdx  0)
  }
  container.addEventListener("transitionend", () => {
    flag = true;
  });

  inactiveElement(contents);
  activateElement(contentIdx, contents);
  inactiveElement(paginationItems);
  activateElement(contentIdx, paginationItems);
};

dataIdxSetting(contents);
dataIdxSetting(paginationItems);
activateElement(0, contents);
activateElement(0, paginationItems);
window.addEventListener("wheel", wheelHandler);
pagination.addEventListener("click", paginationHandler);
