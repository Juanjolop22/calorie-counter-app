 const addEachMealTittle = () =>{
    const EachMealTittle = document.createElement('h3');
    EachMealTittle.innerHTML =  '¿De qué está compuesta tu comida?';
    EachMealTittle.classList.add('each-meal-tittle');
    return EachMealTittle;
}

let allFoodInfo = [];
export const addEachMeal = (foodItem) =>{
        allFoodInfo.push(foodItem);
        let mealListDiv = document.querySelector('.meal-list');

        if(!mealListDiv){
            mealListDiv = document.createElement('div');
            mealListDiv.classList.add('meal-list');
            mealListDiv.append(addEachMealTittle());
            document.querySelector('.secondContainer').append(mealListDiv);
        }

        const eachFoodText = document.createElement('p');
        eachFoodText.innerHTML = '-' + foodItem;
        mealListDiv.append(eachFoodText);
        console.log(allFoodInfo);
        
    }

    
