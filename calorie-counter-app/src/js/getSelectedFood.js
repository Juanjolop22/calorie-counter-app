import { getNutritionData } from "./main.js";

export const getSelectedFood = (foodItem) =>{
    const input = document.querySelector('#input');
    console.log(foodItem);
    foodItem = input.value;
    if (!foodItem) return
    getNutritionData(foodItem);
}