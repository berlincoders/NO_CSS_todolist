const todos = [
  { title: "Code a to-do list", done: false },
  { title: "Eat breakfast", done: true },
  { title: "Do some exercise", done: false },
  { title: "Water the plants", done: true }
];

// TODO: Use the template in the `index.html` to dynamically generate a list based on `todos` array



const template = document.querySelector('#todoItemTemplate');
console.log(template);

const container=document.querySelector("#todosContainer")
console.log(container);

const clone =template.content.cloneNode(true); //Clonando  elemento "todo"
console.log(clone);

// now you can inspect the browser to unsdestand what clonNode(true) is doing for you


todos.forEach((todo)=>{

  const clone =template.content.cloneNode(true); //Clonando  elemento "todo"

  clone.querySelector(".title").textContent = todo.title; //assign title carefull is a class

  if (todo.done == true){

    const checkbok = clone.querySelector("input");
    checkbok.checked = true;
  }

  container.appendChild(clone);

});
