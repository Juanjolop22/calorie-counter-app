import { getNutritionData } from "./main.js";

export const selectGramsQuantity = (foodItem) =>{
    const h1 = document.querySelector('h1');
    h1.classList.add('foodTitle');
    const foodTitle = document.querySelector('.foodTitle');
    foodTitle.innerHTML = `¿cuantos gramos de ${foodItem} vas a consumir?`;
    const input = document.querySelector('#input');
    input.classList.add('inputGrams');
    input.value = '';
    input.focus();
    listenToInput(input, h1, foodItem);
}


const listenToInput = (input, h1, foodItem) =>{
    input.addEventListener('change', ()=>{
        const grams = parseFloat(input.value);
        if (isNaN(grams)) return
        input.value ='';
        input.classList.remove('inputGrams');
        h1.classList.remove('foodTitle');
        h1.innerHTML = 'Calcula las calorias de lo que vas a comer.';
        getNutritionData(foodItem, grams);
        if(foodItem) return
  })
}