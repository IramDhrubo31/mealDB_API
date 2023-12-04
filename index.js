function connect(){
    var searchTerm = document.getElementById("searchBox").value; 
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchTerm}`;
   
    fetch (url)
    .then (res => res.json())
    .then (data => display(data))
}
   
function display (data){
    var allMeals = data.meals ;   
    var oldContent = document.getElementById("container");
    oldContent.textContent = ""; 
   
    for (var i=0; i<5; i++){
        var newDiv = document.createElement("div");
        newDiv.innerHTML = `
            <b>Meal Number: ${[i+1]}</b><br><br>
            <b>Meal Name:</b> ${allMeals[i].strMeal}<br><br>
            <b>Meal ID:</b> ${allMeals[i].idMeal}<br><br>
            <b>Meal Category:</b> ${allMeals[i].strCategory}<br><br>
            <b>Meal Area:</b> ${allMeals[i].strArea}<br><br>
            <img src="${allMeals[i].strMealThumb}"> <br>
            ` 
        newDiv.classList.add("mealStyle");
        oldContent.appendChild(newDiv);
    }
}