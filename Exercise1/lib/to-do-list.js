const todos = [
  { title: "Code a to-do list", done: false },
  { title: "Eat breakfast", done: true },
  { title: "Do some exercise", done: false },
  { title: "Water the plants", done: true }
];


const template = document.querySelector('template');
console.log(template);

const container = document.querySelector('#todosContainer');
console.log(container);

todos.forEach((todo) => {
  // Clone the content of the template
  const clone = template.content.cloneNode(true);

  console.log(clone);

  // Set the title of the to-do item in the cloned template
  clone.querySelector("#title").textContent = todo.title;

  // Append the cloned template to the container
  container.appendChild(clone);
});




// To-do item HTML 👇
// <div class="shadow-sm rounded px-4 py-3 mb-2 border d-flex">
// <input class="d-flex form-check-input me-1" type="checkbox">
// <div>Replace with to-do title</div>
// </div>

// TODO: Dynamically generate a list of to-dos based on `todos` array, and display them
