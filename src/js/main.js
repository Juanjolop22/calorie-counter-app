/*import { clickSendFoodName, EnterHandlerFoodName} from "./eventHandlers.js";
import { displayFoodInfo } from "./displayFoodInfo.js";*/
import { displayFoodInfo } from "./displayFoodInfo.js";
import { appForm } from "./eventHandlers.js";
let currentFoodData = {};
        
const updateFoodData = (foodItem, nutritionFacts, grams) => {
    currentFoodData = {
        name: foodItem,
        nutritionData: nutritionFacts,
        grams
    };
};
export {currentFoodData};

export async function getNutritionData(foodItem, grams, errorCallback) {
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
        console.log(nutritionFacts);
        displayFoodInfo(nutritionFacts, foodItem, grams);
        updateFoodData(foodItem, nutritionFacts, grams);
    } catch(error){
        if (errorCallback) {
            errorCallback("Por favor ingresa un alimento valido."); 
        }

    };
}
appForm();
/*clickSendFoodName();
EnterHandlerFoodName();*/
