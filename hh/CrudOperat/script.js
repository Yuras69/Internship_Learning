const createElement = (element) => document.createElement(element);


const container = document.getElementById("root");
container.style.margin = "10px";


const heading = createElement("h1");
heading.textContent = "CRUD OPERATIONS";
container.appendChild(heading);

//Input Filed
const inputField = createElement("input");
inputField.type = "text";
inputField.placeholder = "Enter your name";

//submit button
const submitBtn = createElement("button");
submitBtn.textContent = "create";

let name = "";

function handleSubmit() {
    name = inputField.value;
    // outputDisplay.textContent = `Hello, ${name}!`;
    addItem();
    // outputDisplay.value = "";
    inputField.value = "";
}
submitBtn.addEventListener('click', () => {
    handleSubmit();
});
function eventHandler(event) {
    if (event.key === 'Enter') {
        handleSubmit();
    }
}

//display output
const outputDisplay1 = [];
const outputDisplay = createElement("div");
outputDisplay.style.margin = "10px";

//delete button
// const deleteBtn = createElement("button");
// deleteBtn.textContent = "Delete";
// deleteBtn.addEventListener('click', () => {
//     outputDisplay.textContent = "";
// });

let editBtn ="";
//edit button
// editBtn = createElement("button");
// editBtn.textContent = "Edit";
// editBtn.addEventListener('click', () => {
//     inputField.value = outputDisplay.textContent;
// });

const listBox = createElement("ul");
listBox.id = ("list");

const editButton = createElement("button");

let count = 1;


const addItem = () => {
   const list  = document.getElementById("list");
   const itemId = `item-${count}`

    const listItem = createElement("li");
    listItem.innerHTML = `<div id="${itemId}">
    <span id="text-${itemId}">${name}</span>
    <input id="input-${itemId}" style="display: none;"  />

    <button id="editBtn-${itemId}">Edit</button>
    <button class="deleteBtn">Delete</button>
    </div>`;
    
    list.appendChild(listItem);
    count++;
}

container.addEventListener(('click'), (event) => {
    console.log(event);
    console.log(event.target);



    });
{/* <button id="editBtn-${itemId}" onClick="edit('${itemId}')">Edit</button> */}

// const edit = (itemId) => {
//     const item = document.getElementById(itemId);
//     const inputItem = document.getElementById(`input-${itemId}`);
//      const textItem = document.getElementById(`text-${itemId}`);
//     const editBtnItem = document.getElementById(`editBtn-${itemId}`);
    
//     const isInputButtonVisible = inputItem.style.display === "inline";

//     if (isInputButtonVisible)
//     {
//     textItem.style.display = "inline-block";
//     editBtnItem.textContent = "Edit";
//     inputItem.style.display = "none";

//     textItem.textContent = inputItem.value; 
//     } else{
//     textItem.style.display = "none";
//     editBtnItem.textContent = "Save";

//     inputItem.style.display = "inline";
//     inputItem.value = textItem.textContent;
//     inputItem.focus();
//     }
// }




container.appendChild(inputField);
container.appendChild(submitBtn);
container.appendChild(listBox);
document.body.appendChild(container);
document.body.appendChild(outputDisplay);
// container.appendChild(deleteBtn);
// container.appendChild(editBtn);

localStorage.setItem("name", "diwas");
const storedName = localStorage.getItem("name");
console.log(storedName);
