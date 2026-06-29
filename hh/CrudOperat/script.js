const container = document.createElement("div");
container.style.margin = "10px";

const heading = document.createElement("h1");
heading.textContent = "CRUD OPERATIONS";
container.appendChild(heading);

//Input Filed
const inputField = document.createElement("input");
inputField.type = "text";
inputField.placeholder = "Enter your name";

//submit button
const submitBtn = document.createElement("button");
submitBtn.textContent = "create";

function handleSubmit() {   
    const name = inputField.value;
    outputDisplay.textContent = `Hello, ${name}!`;
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
const outputDisplay = document.createElement("div");
outputDisplay.style.margin = "10px";

//delete button
const deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";
deleteBtn.addEventListener('click', () => {
    outputDisplay.textContent = "";
});

//edit button
const editBtn = document.createElement("button");
editBtn.textContent = "Edit";
editBtn.addEventListener('click', () => {
    inputField.value = outputDisplay.textContent;
});

container.appendChild(inputField);
container.appendChild(submitBtn);
document.body.appendChild(container);
document.body.appendChild(outputDisplay);
container.appendChild(deleteBtn);
container.appendChild(editBtn);
