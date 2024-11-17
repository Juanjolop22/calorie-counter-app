export const displayFoodInfo = (nutritionFacts, foodItem, grams) =>{
    const portionsPerFoodItem = nutritionFacts.serving_weight_grams;
    const format = (value) => value.toFixed(2);
    const nutrientsInfo = document.querySelector('.secondSonContainer');
    nutrientsInfo.innerHTML = 
                            `<div class = nutritionInfo>
                            <h2>${grams} gramos de <span>${foodItem}</span> contienen:</h2>
                            <p> calorias: <span>${format(nutritionFacts.nf_calories / portionsPerFoodItem * grams)}</span></p>
                            <p> colesterol total: <span>${format(nutritionFacts.nf_cholesterol / portionsPerFoodItem * grams)}</span></p>
                            <p> fibra total: <span>${format(nutritionFacts.nf_dietary_fiber / portionsPerFoodItem * grams)}</span></p>
                            <p> potasio: <span>${format(nutritionFacts.nf_potassium / portionsPerFoodItem * grams)}</span></p>
                            <p> proteina: <span>${format(nutritionFacts.nf_protein / portionsPerFoodItem * grams)}</span></p>
                            <p> grasa saturada: <span>${format(nutritionFacts.nf_saturated_fat / portionsPerFoodItem * grams)}</span></p>
                            <p> sodio: <span>${format(nutritionFacts.nf_sodium / portionsPerFoodItem * grams)}</span></p>
                            <p> azucares: <span>${format(nutritionFacts.nf_sugars / portionsPerFoodItem * grams)}</span></p>
                            <p> carbohidratos totales: <span>${format(nutritionFacts.nf_total_carbohydrate / portionsPerFoodItem * grams)}</span></p>
                            <p> grasa total: <span>${format(nutritionFacts.nf_total_fat / portionsPerFoodItem * grams)}</span></p>
                             </div>`;
    addingFoodButton(nutrientsInfo);
}

const addingFoodButton = (nutrientsInfo) =>{
    const buttonAddFood = document.createElement('button');
    buttonAddFood.classList.add('addFoodButton');
    buttonAddFood.innerHTML = 'Agregar Alimento';
    nutrientsInfo.append(buttonAddFood);
}





