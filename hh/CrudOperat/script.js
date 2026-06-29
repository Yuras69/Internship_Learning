const createElement = (element) => document.createElement(element);


const container = createElement("div");
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
    outputDisplay.textContent = `Hello, ${name}!`;
    addItem();
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
const deleteBtn = createElement("button");
deleteBtn.textContent = "Delete";
deleteBtn.addEventListener('click', () => {
    outputDisplay.textContent = "";
});

//edit button
const editBtn = createElement("button");
editBtn.textContent = "Edit";
editBtn.addEventListener('click', () => {
    inputField.value = outputDisplay.textContent;
});

const listBox = createElement("ul");
listBox.id = ("list");

const editButton = createElement("button");

const addItem = () => {
const list  = document.getElementById("list");

    const listItem = createElement("li");
    listItem.innerHTML = `<p>${name}</p><button class="edit">Edit</button><button class="delete">Delete</button>`;
    list.appendChild(listItem);
}




container.appendChild(inputField);
container.appendChild(submitBtn);
document.body.appendChild(container);
document.body.appendChild(outputDisplay);
container.appendChild(deleteBtn);
container.appendChild(editBtn);
container.appendChild(listBox);

localStorage.setItem("name", "diwas");
const storedName = localStorage.getItem("name");
console.log(storedName);
