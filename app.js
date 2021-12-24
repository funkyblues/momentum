// const title = document.querySelector(".hello:first-child");

// console.dir(title); 

// /*불러온 title object의 style 속성에서 색을 변경한다~ */

// title.style.color = "blue"

const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  title.style.color = "blue";
}


/**click을 누를때만 handleTitleClick이 발동되도록, handleTitleClick() 이렇게 안보내고 함수 이름만 JS에게 보낸다! */
title.addEventListener("click", handleTitleClick);