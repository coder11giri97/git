// const header = document.querySelector("#header-title");
// header.style.borderBottom = "solid 2px blue";


// const header2 = document.querySelector(".title");
// header2.style.fontWeight = "bold";
// header2.style.color = "green";

// const items = document.getElementsByClassName("list-group-item");
// console.log(items);
// items[2].style.backgroundColor = "green";

// for(let el of items){
//     el.style.fontWeight = "bold";
// }


//QuerySelector
//  





//DOM Manipulation
//  const li = document.querySelector('.list-group');
//  console.log(li.parentElement);
//  li.parentElement.style.backgroundColor = "grey";

// console.log(li.lastElementChild);
// li.lastElementChild.style.backgroundColor = "grey";

// console.log(li.lastChild);

// console.log(li.firstElementChild);
// li.firstElementChild.style.backgroundColor = "grey";

// console.log(li.firstChild);
// console.log(li.nextSibling);

// console.log(li.nextElementSibling);
// li.nextElementSibling.style.backgroundColor = "grey";

// console.log(li.previousSibling);

// console.log(li.previousElementSibling);
// li.previousElementSibling.style.backgroundColor = "grey";


 const newDiv = document.createElement('div');
 newDiv.setAttribute("title", "hello world");

 const helloText = document.createTextNode("Hello world");
newDiv.appendChild(helloText);

 const container = document.querySelector("header .container");
 const h1 = document.querySelector("header h1");

 container.insertBefore(newDiv, h1);

 const ul = document.querySelector("ul");
console.log(ul);
 const list = document.querySelector("li");

 ul.insertBefore(newDiv, list);