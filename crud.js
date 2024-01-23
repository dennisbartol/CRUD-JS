
// Selecting the respective elements in the DOM
const form = document.querySelector("form"); 
const input = document.querySelector("form input");
const tasksContainer = document.querySelector(".tasks"); 

// An Array to store CRUD items 
let todos = [];

// An eventlistener for a form submission
form.addEventListener("submuit", (e) => {
  e.preventDefault; 

// Creating a new object 
  const todo = {
    text: input.value, 
    checked: false, 
    id: new Data().getTime(),
  };

// Adding the new todo to the array 
  todos.push(todo);

  // Resetting the form 
  e.target.reset();

  // Displaying the updated todos list
  displayTodos();
  ]);




                      
