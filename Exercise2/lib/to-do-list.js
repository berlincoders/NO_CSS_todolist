const todos = [
  { title: "Code a to-do list", done: false },
  { title: "Eat breakfast", done: true },
  { title: "Do some exercise", done: false },
  { title: "Water the plants", done: true }
];

// TODO: Use the template in the `index.html` to dynamically generate a list based on `todos` array



const template = document.querySelector('#todoItemTemplate');

const container=document.querySelector("#todosContainer")


console.log(clon)

todos.forEach((todo)=>{

  const clon =template.content.cloneNode(true); //Clonando  elemento "todo"

  document.querySelector("#title").textContent =todo.title; //assign title

  if (todo.done == true){

    const checkbok = clone.querySelector("input");
    checkbok.checked = true;
  }

  Container.appendChild(clone);


});
