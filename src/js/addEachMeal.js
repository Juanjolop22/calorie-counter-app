const addEachMeal = (foodItem) =>{
    const eachMealDiv = document.createElement('div');
    eachMealDiv.innerHTML = '¿De qué está compuesta tu comida?';
    eachMealDiv.classList.add('meal-div');
    document.querySelector('.container').append(eachMealDiv);
}