import { clickHandler, pressEnterHandler } from "./eventHandlers.js";
import { displayFoodInfo } from "./displayFoodInfo.js";
import { selectGramsQuantity } from "./selectGramsQuantity.js";

export async function getNutritionData(foodItem) {
    try{
        const response = await fetch('https://trackapi.nutritionix.com/v2/natural/nutrients',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'x-app-id': 'e33af660',
                'x-app-key': '7240f91d42644ef2c629203a8388ee1c'
            },
            body: JSON.stringify({ query: foodItem })
        });
        
        if (!response.ok) {
            throw new Error("Error en la solicitud");
        }
        const data = await response.json();
        const nutritionFacts = data.foods[0]; 
        selectGramsQuantity(foodItem);
        displayFoodInfo(nutritionFacts, nutritionFacts);
        console.log(foodItem);

    } catch(error){
        console.error('Hubo un error al obtener los datos:', error);

    };
}

clickHandler();
pressEnterHandler();