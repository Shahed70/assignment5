const findMeal = ()=>{
    const mealName = document.getElementById('meal-name').value;
    loadData(mealName)
    document.getElementById('meal-name').value = ''
    
}

const loadData=(mealName)=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${mealName}`)
    .then(res => res.json())
    .then(data => getMealList(data.meals))
    .catch(error => console.log(error))
}

const getMealList = (mealLists)=> {
    const mealsContainer = document.getElementById('meal-container')
    mealLists.forEach(meal => {
        const div = document.createElement('div')
        div.className = 'my-div'
        console.log(div);
        const showMeals = `<a onclick="showDetails('${meal.strMeal}', '${meal.strMealThumb}')" href="#detailsId"> <img class="" src="${meal.strMealThumb}" alt=""> <h5>${meal.strMeal}</h5></a>`
        mealsContainer.appendChild(div)
        div.innerHTML = showMeals;
        // location.reload();
    });
};

const showDetails = (details, image) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${details}`)
    .then(res => res.json())
    .then(data => getDetails(data.meals, image))
}

const getDetails = (detail, image) => {
    const detailsContainer = document.getElementById('details-container')
    const detailsData = `<div id="detailsId"> <img class="" src="${image}" alt="${detail[0].strMeal}"> <div> <h3>${detail[0].strMeal}</h3><h5>Ingradients</h5> <p><i class="fa fa-check"></i>${detail[0].strIngredient1}</p> <p><i class="fa fa-check"></i>${detail[0].strIngredient2}</p> <p><i class="fa fa-check"></i>${detail[0].strIngredient3}</p> <p><i class="fa fa-check"></i>${detail[0].strIngredient4}</p> <p><i class="fa fa-check"></i>${detail[0].strIngredient5}</p> <p><i class="fa fa-check"></i>${detail[0].strIngredient6}</p> <p><i class="fa fa-check"></i>${detail[0].strIngredient7}</p> <p><i class="fa fa-check"></i>${detail[0].strIngredient8}</p></div></div>` 
    detailsContainer.innerHTML = detailsData;
}