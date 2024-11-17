import { getNutritionData } from "./main.js";
import { clickSendGrams} from "./eventHandlers.js";

export const selectGramsQuantity = (foodItem) =>{
    if(!foodItem) return
    const h1 = document.querySelector('h1');
    h1.classList.add('foodTitle');
    const foodTitle = document.querySelector('.foodTitle');
    foodTitle.innerHTML = `¿cuantos gramos de ${foodItem} vas a consumir?`;
    const input = document.querySelector('#input');
    input.classList.add('inputGrams');
    input.value = '';
    replaceButton();
    clickSendGrams(input, h1, foodItem);
}

export const getGrams = (input, h1, foodItem) =>{
        const grams = parseFloat(input.value);
        if (isNaN(grams)) return
        input.value ='';
        input.classList.remove('inputGrams');
        h1.classList.remove('foodTitle');
        h1.innerHTML = 'Calcula las calorias de lo que vas a comer.';
        getNutritionData(foodItem, grams);
        if(foodItem) return
}

const replaceButton = () =>{
    const button = document.querySelector('button');
    const buttonGrams = document.createElement('button');
    buttonGrams.innerHTML = '<i class="fas fa-search"></i>';
    buttonGrams.classList.add('button-grams');
    if (button) {
        button.replaceWith(buttonGrams);
    } else {
        console.error('No se encontró el botón para reemplazar.');
    }
}

