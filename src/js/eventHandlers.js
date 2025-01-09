import {getSelectedFood } from "./getSelectedFood.js";
import { getGrams, selectGramsQuantity } from "./selectGramsQuantity.js";
//import { selectGramsQuantity } from "./selectGramsQuantity.js";
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

/*export const clickSendFoodName = () =>{
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
}*/


/*const test = ()=> {
    const form = document.getElementById('form-submit');
    if(!form) return;

    form.addEventListener('submit', (e)=> {
        e.preventDefault();
        console.log('submited');
        
    })
}

test();*/
