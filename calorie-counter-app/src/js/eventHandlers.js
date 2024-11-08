import {getSelectedFood } from "./getSelectedFood.js";
//import { selectGramsQuantity } from "./selectGramsQuantity.js";

export const clickHandler = (foodItem) =>{
    document.querySelector('#button').addEventListener('click', () => {
        getSelectedFood(foodItem);
         })
 }

 export const pressEnterHandler = (foodItem) =>{
        document.querySelector('#input').addEventListener("keydown", (event) =>{
        if(event.key === "Enter"){
        getSelectedFood(foodItem);
        }
     })
 }