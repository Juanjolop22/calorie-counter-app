import { selectGramsQuantity } from "./selectGramsQuantity.js";

export const getSelectedFood = (foodItem) =>{
    const input = document.querySelector('#input');
    foodItem = input.value;
    if (!foodItem) return
    console.log(foodItem)

    input.value = '';
    selectGramsQuantity(foodItem);
}