const searchFood = () => {
    const searchField = document.getElementById('search-filed');
    const searchText = searchField.value;

    //clear input value
    searchField.value = '';
    if(searchText == ''){
        // please write somthing anythins
        alert('write food name which food you want'); // কাজ কর এখনে যে এরোর মেসেজ দেখাবে । 
    }
    else{
        // laod data
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals));
        // .then(data => console.log(data.meals));
    }
    
}

const displaySearchResult = (meals) => {
    const searchResult = document.getElementById('search-result');
    
    // clear display data 
    // searchResult.innerHTML='';
    searchResult.textContent='';

    if(meals.length == 0){
        // console.log('type food name'); // show no result found 
    }

    meals.forEach(meal => {
        console.log(meal);

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick= "loadMealDetails(${meal.idMeal})" class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0, 220)}</p>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    })
}

const loadMealDetails = mealId =>{
    console.log(mealId);

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res=> res.json())
        .then(data=> displayMealDetails(data.meals[0]));
}

const displayMealDetails = mealDetails =>{
    // console.log(mealDetails)

    const singaleMealDetails = document.getElementById('meal-details');
    const div = document.createElement('div');
    div.innerHTML= `
    <div class="card" >
        <img src="${mealDetails.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${mealDetails.strMeal}</h5>
            <p class="card-text">${mealDetails.strInstructions.slice(0, 120)}</p>
            <a href="${mealDetails.strYoutube}" class="btn btn-primary" target="_blank">See Video</a>
        </div>         
    </div>
    `;
    singaleMealDetails.appendChild(div);

}