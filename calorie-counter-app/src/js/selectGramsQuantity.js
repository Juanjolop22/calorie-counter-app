export const selectGramsQuantity = (foodItem) =>{
    const h1 = document.querySelector('h1');
    let input = document.querySelector('#input');
    const grams = input.value;
    if(isNaN(grams)) return
    h1.classList.add('foodTitle');
    const foodTitle = document.querySelector('.foodTitle');
    foodTitle.innerHTML = `¿cuantos gramos de ${foodItem} vas a consumir?`;
    input.value = '';
    input.classList.add('inputGrams');
    console.log(input.classList);
}