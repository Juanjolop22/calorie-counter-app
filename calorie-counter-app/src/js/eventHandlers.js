import {getSelectedFood } from "./getSelectedFood.js";
//import { selectGramsQuantity } from "./selectGramsQuantity.js";

export const clickHandler = () =>{
    document.querySelector('#button').addEventListener('click', () => {
        getSelectedFood();
         })
 }

 export const pressEnterHandler = () =>{
        document.querySelector('#input').addEventListener("keydown", (event) =>{
        if(event.key === "Enter"){
        getSelectedFood();
        }
     })
 }