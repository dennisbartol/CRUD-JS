
// Selecting the respective elements in the DOM
const form = document.querySelector("form"); 
const input = document.querySelector("form input");
const tasksContainer = document.querySelector(".tasks"); 

// An Array to store CRUD items 
let todos = [];

// An eventlistener for a form submission
form.addEventListener("submit", (e) => {
  e.preventDefault(); 

// Check if the input value is empty
if (input.value.trim() === "") {
// If empty, return without adding a task
return;
}

// Creating a new object 
  const todo = {
    text: input.value, 
    checked: false, 
    id: new Date().getTime(),
  };

// Adding the new todo to the array 
  todos.push(todo);

  // Resetting the form 
  e.target.reset();

  // Displaying the updated todos list
  displayTodos();
});


// Display todos function 
const displayTodos = () => {
// Clearing existing content 
  tasksContainer.innerHTML = "" ;

// Looping through each todo inside the array, through an arrow function
  todos.forEach((todo) => {
// Creating HTML elements for every single todo
    const taskEl = document.createElement("div");
    const inputEl = document.createElement("input");
    const textEl = document.createElement("p");
    const delButton = document.createElement("button");

// Adding classes to these elements for styling 
    taskEl.classList.add("task");
    inputEl.classList.add("checkbox"); 
    delButton.classList.add("delete");
    textEl.classList.add("text");

// Setting up attributes and content for the HTML elements 
    inputEl.type = "checkbox"; 
    textEl.innerHTML = todo.text; 
    delButton.innerHTML = "Delete";


// Event listener for the delete button 
    delButton.addEventListener("click", () => {
// Filtering out the clicked todo (From the array)
    todos = todos.filter((t) => t.id !== todo.id);
// Displaying an updated todo list 
    displayTodos();
  });

    
// Event listener - For the checkbox 
   inputEl.addEventListener("change", (e) => {
// Updating the 'checked' property of the selected todo item
   todo.checked = e.target.checked; 

// Adding / Removing the "done" class - Based on the 'checked' state
   if (todo.checked) {
     taskEl.classList.add("done");
   }  
   else {
    taskEl.classList.remove("done"); 
   }                       
});

// Appending elements to the .task container
    taskEl.appendChild(inputEl); 
    taskEl.appendChild(textEl);
    taskEl.appendChild(delButton);
    tasksContainer.appendChild(taskEl);
  });
};
                      
