 import { createUlList } from "./addLiElements.js";
 import { currentFoodData} from "./main.js";
 import { calculateAllFoodNutrition } from "./calculateAllNutrition.js";
 
 const addEachMealTittle = () =>{
    const EachMealTittle = document.createElement('h3');
    EachMealTittle.innerHTML =  '¿De qué está compuesta tu comida?';
    EachMealTittle.classList.add('each-meal-tittle');
    return EachMealTittle;
}

let allFoodInfo = [];
export {allFoodInfo};
export const addEachMeal = (foodItem, grams) =>{
    console.log(grams);

        allFoodInfo.push(currentFoodData);
        let mealListDiv = document.querySelector('.meal-list');

        if(!mealListDiv){
            mealListDiv = document.createElement('div');
            mealListDiv.classList.add('meal-list');
            mealListDiv.append(addEachMealTittle());
            document.querySelector('.secondContainer').append(mealListDiv);
        }

        const existSumButton = document.querySelector('.sumButton');
        if(!existSumButton){
            const buttonToSum = createTotalSumButton(grams);
            mealListDiv.append(buttonToSum);
         }

        mealListDiv.append(createUlList(foodItem, grams));
        console.log(allFoodInfo);
    }

const createTotalSumButton = () =>{
    const sumButton = document.createElement('button');
    sumButton.classList.add('sumButton');
    sumButton.innerHTML = 'Sumar Nutrientes';
    console.log(sumButton);
    sumButton.addEventListener('click', () => 
        calculateAllFoodNutrition()
);
    return sumButton;
} 


