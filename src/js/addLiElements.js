import { allFoodInfo } from "./addEachMeal.js";
export const createUlList = (foodItem, grams) =>{
    let createdUl = document.querySelector('.ulList');

    if (!createdUl) {
        createdUl = document.createElement('ul');
        createdUl.classList.add('ulList');
    }
        createdUl.append(createLiList(foodItem, grams));


        return createdUl
}
const createLiList = (foodItem, grams) =>{
    const createLi = document.createElement('li');
    createLi.classList.add('liElements');
    
    createLi.innerHTML = foodItem + `<span>: ${grams} Gr</span>`;


    createDeleteListButton(createLi, foodItem);

    return createLi;
}

const createDeleteListButton = (createLi, foodItem) =>{
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButton');
    deleteButton.innerHTML = '<i class="fas fa-times"></i>';

    deleteButton.addEventListener('click', () => {
        const index = allFoodInfo.findIndex(item => item.name === foodItem);
        if (index !== -1) {
            allFoodInfo.splice(index, 1); 
        }
        createLi.remove(); 

    });

    createLi.append(deleteButton);
}