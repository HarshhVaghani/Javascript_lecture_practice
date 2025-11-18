const recipeButtons = document.querySelectorAll(".recipe-btn");
const recipeCard = document.getElementById("recipeCard");
const recipeName = document.getElementById("recipeName");
const recipeImage = document.getElementById("recipeImage");
const recipeIngredients = document.getElementById("recipeIngredients");
const recipeInstructions = document.getElementById("recipeInstructions");
const defaultMessage = document.getElementById("defaultMessage");

const recipes = [
  {
    id: 1,
    name: "Margherita Pizza",
    image: "https://cdn.loveandlemons.com/wp-content/uploads/opengraph/2023/07/margherita-pizza-recipe.jpg",
    ingredients: ["Pizza base", "Tomato sauce", "Mozzarella cheese", "Basil leaves", "Olive oil"],
    instructions: "Spread sauce on base, add cheese and basil, bake for 10 mins at 220°C."
  },
  {
    id: 2,
    name: "Spaghetti Pasta",
    image: "https://images.archanaskitchen.com/images/recipes/world-recipes/pasta-recipes/Spaghetti_Pasta_Recipe_In_Creamy_Tomato_Sauce_Kids_Recipes_Made_With_Del_Monte_3_d6522012db.jpg",
    ingredients: ["Spaghetti", "Tomato sauce", "Garlic", "Olive oil", "Salt"],
    instructions: "Boil pasta, sauté garlic, mix with sauce and serve hot."
  },
  {
    id: 3,
    name: "Cheese Burger",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    ingredients: ["Burger buns", "Beef patty", "Cheese slice", "Lettuce", "Tomato"],
    instructions: "Grill patty, stack ingredients in bun and serve warm."
  },
  {
    id: 4,
    name: "Green Salad",
    image: "https://kristineskitchenblog.com/wp-content/uploads/2024/03/salad-recipe-10-2.jpg",
    ingredients: ["Lettuce", "Cucumber", "Tomato", "Olive oil", "Salt"],
    instructions: "Chop all ingredients, mix well, drizzle olive oil and salt."
  },
  {
    id: 5,
    name: "Chocolate Cake",
    image: "https://scientificallysweet.com/wp-content/uploads/2025/08/IMG_1580-best-moist-chocolate-cake-feature.jpg",
    ingredients: ["Flour", "Cocoa powder", "Sugar", "Eggs", "Butter"],
    instructions: "Mix all, bake at 180°C for 30 minutes."
  },
  {
    id: 6,
    name: "Ramen Noodles",
    image: "https://assets.bonappetit.com/photos/6437281f4c497b684ece7ff3/1:1/w_1106,h_1106,c_limit/Recipe_Beauty_Gingery_Chicken_Ramen_0350.jpg",
    ingredients: ["Ramen noodles", "Broth", "Egg", "Spring onions", "Soy sauce"],
    instructions: "Cook noodles, add broth and toppings, serve hot."
  },
  {
    id: 7,
    name: "Tacos",
    image: "https://www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg",
    ingredients: ["Taco shells", "Meat", "Cheese", "Lettuce", "Salsa"],
    instructions: "Fill shells with ingredients and enjoy fresh."
  },
  {
    id: 8,
    name: "Indian Curry Rice",
    image: "https://www.allrecipes.com/thmb/FL-xnyAllLyHcKdkjUZkotVlHR8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/46822-indian-chicken-curry-ii-DDMFS-4x3-39160aaa95674ee395b9d4609e3b0988.jpg",
    ingredients: ["Rice", "Curry masala", "Vegetables", "Ghee", "Salt"],
    instructions: "Cook rice and curry separately, mix and serve hot."
  },
  {
    id: 9,
    name: "Pancakes",
    image: "https://www.marthastewart.com/thmb/Vgb9cQSlegZz5fcoSbkkqyHPmHY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/338185-basic-pancakes-09-00b18f8418fd4e52bb2050173d083d04.jpg",
    ingredients: ["Flour", "Milk", "Eggs", "Sugar", "Butter"],
    instructions: "Mix batter, cook on pan until golden, add syrup."
  },
  {
    id: 10,
    name: "Chocolate Chip Cookies",
    image: "https://familycookierecipes.com/wp-content/uploads/2022/12/Best-Chocolate-Chip-Cookies-19.jpg",
    ingredients: ["Flour", "Butter", "Sugar", "Chocolate chips", "Egg"],
    instructions: "Mix ingredients, bake at 180°C for 15 minutes."
  }
];

function showRecipe(index) {
  const recipe = recipes[index];
  if (!recipe) return;

  recipeCard.classList.remove("hidden");
  defaultMessage.classList.add("hidden");

  recipeName.textContent = recipe.name;
  recipeImage.src = recipe.image;

  recipeIngredients.innerHTML = "";
  recipe.ingredients.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    recipeIngredients.appendChild(li);
  });
  recipeInstructions.textContent = recipe.instructions;
}

recipeButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => showRecipe(index));
});
