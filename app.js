// const hellos = document.getElementsByClassName("hello");

// console.log(hellos);

// const title = document.getElementsByTagName("h1");

// //tag는 anchor, div, section, button, 같은 걸 의미!

// console.log(title);


/*이것을 자주 쓴다~*/
/*이것은 css selector 방식*/
/*제일 첫번째만 가져옴 ㅋㅋ*/
// const title = document.querySelector(".hello h1");

// console.log(title);

// const title = document.querySelectorAll(".hello h1");

// console.log(title);

const title = document.querySelectorAll(".hello h1:first-child");

title.innerText = "hello"