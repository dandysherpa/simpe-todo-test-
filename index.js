const addBtn = document.getElementById("addBtn");
const todoInput = document.getElementById("todo-input");
const todoItems = document.getElementById("todo-items");

//When you click the Add button, run this function.
addBtn.addEventListener("click", () => {
  const value = todoInput.value; //Whatever you typed in the input box gets stored in value

  const li = document.createElement("li"); //Makes a new <li> and sets its text to what you typed.
  li.innerText = value;

  const delButton = document.createElement("button");
  delButton.innerText = "X"; //Creates a small button with "X".

  delButton.addEventListener("click", () => {
    li.remove(); //If you click the X, it removes that todo item.
  });

  li.appendChild(delButton);// put button inside the list item
  todoItems.appendChild(li);// put list item inside the todo list

  todoInput.value = "";//Clear the input box
  
});
