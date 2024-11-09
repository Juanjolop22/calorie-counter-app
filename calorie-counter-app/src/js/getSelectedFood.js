import { selectGramsQuantity } from "./selectGramsQuantity.js";

export const getSelectedFood = (foodItem) =>{
    const input = document.querySelector('#input');
    foodItem = input.value;
    console.log(foodItem);
    if (!foodItem) return
    input.value = '';
    selectGramsQuantity(foodItem);
}