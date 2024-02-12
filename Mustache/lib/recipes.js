import Mustache from "mustachejs";

const recipes = [
  {
    name: "Coq au Vin",
    ingredients: ["chicken", "red wine", "bacon", "mushrooms", "onions", "garlic"],
    difficulty: 7
  },
  {
    name: "Ratatouille",
    ingredients: ["eggplant", "zucchini", "bell peppers", "tomatoes", "onions", "garlic"],
    difficulty: 3
  },
  {
    name: "Croissant",
    ingredients: ["flour", "butter", "yeast", "sugar", "salt"],
    difficulty: 9
  },
  {
    name: "Bouillabaisse",
    ingredients: ["fish", "shellfish", "tomatoes", "fennel", "onions", "garlic", "saffron"],
    difficulty: 10
  }
]

// TODO: Your code goes below:
// Assuming we have a `<template>` element on the page with the `id` `#myTemplate`:
const template = document.querySelector("#myTemplate").innerHTML
// select the template
const container = document.querySelector("#recipesContainer");

//const output = Mustache.render(template, {});

recipes.forEach((recipe) => {
  const output = Mustache.render(template, recipe);
  container.insertAdjacentHTML("beforeend", output);
});
