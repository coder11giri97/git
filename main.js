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
 const li_2 = document.querySelector(".list-group-item:nth-child(1)");
li_2.style.backgroundColor = "green";

const li_3 = document.querySelector(".list-group-item:nth-child(2)");
 li_3.style.display = "none";

// QuerySelectorAll
 const li = document.querySelectorAll("li");
 li[1].style.backgroundColor = "green";

 const odd = document.querySelectorAll("li:nth-child(odd)");
for(let el of odd){
   el.style.backgroundColor = "green";
}