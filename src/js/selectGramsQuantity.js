import { getNutritionData } from "./main.js";
/*import { clickSendGrams} from "./eventHandlers.js";*/

export const selectGramsQuantity = (foodItem) =>{
    console.log(foodItem);
    
    if(!foodItem) return
    const h1 = document.querySelector('h1');
    h1.classList.add('foodTitle');
    const foodTitle = document.querySelector('.foodTitle');
    foodTitle.innerHTML = `¿cuantos gramos de ${foodItem} vas a consumir?`;
    const input = document.querySelector('#input');
    input.classList.add('inputGrams');
    input.placeholder = 'Ingresa los gramos'
}

export const getGrams = (input, h1, foodItem) =>{
        const grams = parseFloat(input.value);
        if (isNaN(grams)) return
        clearErrorMessage(input);
        input.value = '';
        input.placeholder = 'Ingresa un alimento';
        input.classList.remove('inputGrams');
        h1.classList.remove('foodTitle');
        h1.innerHTML = 'Calcula las calorias de lo que vas a comer.';
        getNutritionData(foodItem, grams,(error) => {
            displayErrorMessage(input, error);
        });
}
const displayErrorMessage = (input, error) =>{
    let errorMessage = document.querySelector('.error-message');
    if (!errorMessage) {
        errorMessage = document.createElement('p');
        errorMessage.classList.add('error-message');
        input.parentNode.insertBefore(errorMessage, input);
        errorMessage.innerHTML = error; 
    }
};

const clearErrorMessage = (input) => {
    const errorMessage = input.parentNode.querySelector('.error-message');
    if (errorMessage) errorMessage.remove(); 
};




