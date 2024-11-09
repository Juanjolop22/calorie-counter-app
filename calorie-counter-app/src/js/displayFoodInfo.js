export const displayFoodInfo = (nutritionFacts, foodItem, grams) =>{
    const portionsPerFoodItem = nutritionFacts.serving_weight_grams;
    const nutrientsInfo = document.querySelector('.secondSonContainer');
    nutrientsInfo.innerHTML = 
                            `<div class = nutritionInfo>
                            <h2>${grams} gramos de <span>${foodItem}</span> contienen:</h2>
                            <p> calorias: <span>${nutritionFacts.nf_calories / portionsPerFoodItem * grams}</span></p>
                            <p> colesterol total: <span>${nutritionFacts.nf_cholesterol}</span></p>
                            <p> fibra total: <span>${nutritionFacts.nf_dietary_fiber}</span></p>
                            <p> potasio: <span>${nutritionFacts.nf_potassium}</span></p>
                            <p> proteina: <span>${nutritionFacts.nf_protein}</span></p>
                            <p> grasa saturada: <span>${nutritionFacts.nf_saturated_fat}</span></p>
                            <p> sodio: <span>${nutritionFacts.nf_sodium}</span></p>
                            <p> azucares: <span>${nutritionFacts.nf_sugars}</span></p>
                            <p> carbohidratos totales: <span>${nutritionFacts.nf_total_carbohydrate}</span></p>
                            <p> grasa total: <span>${nutritionFacts.nf_total_fat}</span></p>
                             </div>`                     
}



