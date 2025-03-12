// add a todo

// list all todos

// delete a todo

// quit the app

// while loop to ask and include a quit option, important to avoid infinite loop
// prompt to ask what they would like to do
// if they want to add a todo, prompt for the todo and add it to the list
// if they want to list all todos, list all todos
// if they want to delete a todo, prompt for the index of the todo and delete it
// if they want to quit, break the loop

let input = prompt("What would you like to do?");
const todos = [];

while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("******");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("******");
  } else if (input === "new") {
    const newTodo = prompt("Ok, what is the new todo?");
    todos.push(newTodo);
    console.log(`${newTodo} added to the list`);
  } else if (input === "delete") {
    const index = parseInt(prompt("Ok, what is the index to delete"));
    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index, 1);
      console.log(`Ok, deleted ${delete [0]}`);
    } else {
      console.log("Unknown Index");
    }
  }
  input = prompt("What would you like to do?");
}
console.log("OK, quit the app");
