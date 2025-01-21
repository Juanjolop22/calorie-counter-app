import {getSelectedFood } from "./getSelectedFood.js";
import { getGrams, selectGramsQuantity } from "./selectGramsQuantity.js";
const input = document.querySelector('#input');
const h1 = document.querySelector('h1');
const form = document.querySelector('#food-form');

let currentState = 'food';
let foodItem = null;
export const appForm = () =>{
    form.addEventListener('submit', (e) => {
        console.log("Submit detected"); 
        e.preventDefault();
        if (currentState === 'food' ) {
            foodItem = getSelectedFood();
            if(foodItem){
                selectGramsQuantity(foodItem);
                currentState = 'grams';
                console.log(currentState);
            }

        }else if (currentState === 'grams' && input.value !== '') {
            getGrams(input, h1, foodItem);   
            currentState = 'food';
        }
    })
}

