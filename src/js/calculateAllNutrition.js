import { allFoodInfo } from "./addEachMeal.js"
import { currentFoodData } from "./main.js";

export const calculateAllFoodNutrition = () =>{
    const totalNutrition = allFoodInfo.reduce((totals, foodItem) => {
        const grams = foodItem.grams;
        totals.totalCalories += (foodItem.nutritionData.nf_calories / foodItem.nutritionData.serving_weight_grams * grams);
       console.log(totals.totalCalories);
       console.log(allFoodInfo);
       console.log(grams);
       
        totals.totalCholesterol += (foodItem.nutritionData.nf_cholesterol / foodItem.nutritionData.serving_weight_grams * grams);
        totals.totalDietaryFiber += (foodItem.nutritionData.nf_dietary_fiber / foodItem.nutritionData.serving_weight_grams * grams);
        totals.totalProtein += (foodItem.nutritionData.nf_protein / foodItem.nutritionData.serving_weight_grams * grams);
        totals.totalPotassium += (foodItem.nutritionData.nf_potassium / foodItem.nutritionData.serving_weight_grams * grams);
        totals.totalSaturatedFat += (foodItem.nutritionData.nf_saturated_fat / foodItem.nutritionData.serving_weight_grams * grams);
        totals.totalSodium += (foodItem.nutritionData.nf_sodium / foodItem.nutritionData.serving_weight_grams * grams);
        totals.totalSugars += (foodItem.nutritionData.nf_sugars / foodItem.nutritionData.serving_weight_grams * grams);
        totals.totalCarbohydrates += (foodItem.nutritionData.nf_total_carbohydrate / foodItem.nutritionData.serving_weight_grams * grams);
        totals.totalFat += (foodItem.nutritionData.nf_total_fat / foodItem.nutritionData.serving_weight_grams * grams);
        return totals;

    }, {
        totalCalories: 0,        
        totalCholesterol: 0,
        totalDietaryFiber: 0,
        totalProtein: 0,
        totalPotassium: 0,
        totalSaturatedFat: 0,
        totalSodium: 0,
        totalSugars: 0,
        totalCarbohydrates: 0,
        totalFat: 0
    });
    displayAllFoodNutrition(totalNutrition, allFoodInfo);
}

const displayAllFoodNutrition = (totals) =>{
    const hidenSecondContainer = document.querySelector('.secondContainer');
    const secondSonContainer = document.querySelector('.secondSonContainer');
    Array.from(hidenSecondContainer.children).forEach(child => {
        if (child !== secondSonContainer) {
            child.remove();
        }
    });
    hidenSecondContainer.classList.add('displayed-all-nutrition');
    hidenSecondContainer.innerHTML = ` <div class = display-nutrition-container>
    
        <h2>Todo Lo Que Vas a Consumir:</h2>
        <p>Calorías totales: <span>${totals.totalCalories.toFixed(2)}</span></p>
        <p>Colesterol total: <span>${totals.totalCholesterol.toFixed(2)}</span> Mg</p>
        <p>Fibra total: <span>${totals.totalDietaryFiber.toFixed(2)}</span> Gr</p>
        <p>Proteína total: <span>${totals.totalProtein.toFixed(2)}</span> Gr</p>
        <p>Potasio total: <span>${totals.totalPotassium.toFixed(2)}</span> Mg</p>
        <p>Grasa saturada total: <span>${totals.totalSaturatedFat.toFixed(2)}</span> Gr</p>
        <p>Sodio total: <span>${totals.totalSodium.toFixed(2)}</span> Mg</p>
        <p>Azúcares totales: <span>${totals.totalSugars.toFixed(2)}</span> Gr</p>
        <p>Carbohidratos totales: <span>${totals.totalCarbohydrates.toFixed(2)}</span> Gr</p>
        <p>Grasas totales: <span>${totals.totalFat.toFixed(2)}</span> Gr</p>
        </div> `;
        restartButton();

}
const restartButton = () =>{
    const createRestartButton = document.createElement('button');
    createRestartButton.classList.add('restart-button');
    createRestartButton.innerHTML = 'Crear Nueva Lista';
    const hidenContainer = document.querySelector('.displayed-all-nutrition');
    hidenContainer.append(createRestartButton);
    createRestartButton.addEventListener('click', ()=>{
        const secondSonContainer = document.querySelector('.display-nutrition-container');
        secondSonContainer.classList.remove('display-nutrition-container');
        secondSonContainer.classList.add('secondSonContainer');
        hidenContainer.classList.remove('displayed-all-nutrition');
        createRestartButton.remove();
        secondSonContainer.innerHTML = '';
        allFoodInfo.length = 0; 
        currentFoodData.name = '';
        currentFoodData.nutritionData = {};
        currentFoodData.grams = 0;     
        console.log(currentFoodData);
    })
}