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


//  const newDiv = document.createElement('div');
//  newDiv.setAttribute("title", "hello world");

//  const helloText = document.createTextNode("Hello world");
// newDiv.appendChild(helloText);

//  const container = document.querySelector("header .container");
//  const h1 = document.querySelector("header h1");

//  container.insertBefore(newDiv, h1);

//  const ul = document.querySelector("ul");
// console.log(ul);
//  const list = document.querySelector("li");

//  ul.insertBefore(newDiv, list);




var form = document.getElementById('addForm');
var ul = document.getElementById('items');
let form = document.getElementById('addForm');
let ul = document.getElementById('items');

form.addEventListener('submit', addItem);
ul.addEventListener('click', removeItem);

function addItem(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');
    let newItemName = document.getElementById('item').value;
    let newItemDesc = document.getElementById('desc').value;
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));
    var deleteBtn = document.createElement('button');
    let lineBreak = document.createElement('br');

    li.appendChild(document.createTextNode(newItemName));
    li.appendChild(lineBreak); 
    li.appendChild(document.createTextNode(newItemDesc));


    let deleteBtn = document.createElement('button');
    let EditBtn = document.createElement('button');


    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    EditBtn.className = 'btn btn-danger btn-sm float-right delete';

    deleteBtn.appendChild(document.createTextNode('X'));
    EditBtn.appendChild(document.createTextNode('Edit'));

    li.appendChild(deleteBtn);
    li.appendChild(EditBtn);
    ul.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        let li = e.target.parentElement;
        ul.removeChild(li);
      }
    }
}
}

// Filter
var filter = document.getElementById('filter');

filter.addEventListener('keyup', filterItems);

function filterItems(e){
    let text = e.target.value.toLowerCase();
    let items = ul.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
      console.log(item);  
      let itemName = item.firstChild.textContent;
      let itemDesc = item.childNodes[2].textContent;
      if(itemName.toLowerCase().indexOf(text) != -1 || itemDesc.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }