const form = document.querySelector("#form");
const username = document.querySelector("#name");
const email = document.querySelector("#email");
const header = document.querySelector("#header-title");
header.style.borderBottom = "solid 2px blue";


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(username.value == "" || email.value == ""){
        alert("Enter values!")
    } else {
        console.log(username.value, email.value);
    }
})
const header2 = document.querySelector(".title");
header2.style.fontWeight = "bold";
header2.style.color = "green";