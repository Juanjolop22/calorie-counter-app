import {getSelectedFood } from "./getSelectedFood.js";
import { getGrams } from "./selectGramsQuantity.js";
//import { selectGramsQuantity } from "./selectGramsQuantity.js";
const input = document.querySelector('#input');

export const clickSendFoodName = () =>{
    document.querySelector('#button').addEventListener('click', () => {
        
        if(input.value === '')return
        getSelectedFood();
         })
 }

 export const EnterHandlerFoodName = () =>{
        input.addEventListener("keydown", (event) =>{
        if(input.value === '') return
        if(event.key === "Enter"){
        getSelectedFood();
        }
     })
 }

export const clickSendGrams = (input, h1, foodItem) =>{
    document.querySelector('.button-grams').addEventListener('click', () =>{
        getGrams(input, h1, foodItem);
    })
}

const clickAddFood = () =>{
    document.querySelector('.addFoodButton').addEventListener('click', () =>{
        
    })
}

const test = ()=> {
    const form = document.getElementById('form-submit');
    if(!form) return;

    form.addEventListener('submit', (e)=> {
        e.preventDefault();
        console.log('submited');
        
    })
}

test();
