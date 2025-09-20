// Example 1
// do not use arrow function in addEventListner function as this will refer to global.this
// whereas if a normal fonction is used, this will refer to current context(the one who is calling) 
document.getElementById('changeTextButton').
addEventListener('click', function(){
    let paragrap = document.getElementById('myParagraph');
    console.log(paragrap);
    paragrap.textContent = "The paragraph is changed";      // this will change the content
                                                            // in the paragraph
})

// Example 2
document.getElementById('highlightFirstCity').
addEventListener('click', function(){
    let citiesList = document.getElementById('citiesList');
    // citiesList.firstElementChild.classList.add("highlight");
    console.log(citiesList.children[3]);
    
    citiesList.children[0].classList.add('highlight');
    citiesList.children[0].textContent = "New_York";
    
})

// Example 3
document.getElementById("changeOrder").
addEventListener('click', function(){
    let coffeType = document.getElementById("coffeeType");
    coffeType.textContent = "Espresso";
    coffeType.style.backgroundColor = "brown";
    coffeType.style.padding = "5px";
})

// Example 4 - Creating and inseting new Elements
document.getElementById("addNewItem").
addEventListener('click',  function(){
    let newItem = document.createElement('li');     // Creating a new element
    newItem.textContent = "Eggs";
    newItem.id = "XYZXYZ";
    document.getElementById("shoppingList").appendChild(newItem);   // inserting new elment in the list
})

// Example 5 - Deleting Elements
document.getElementById("removeLastTask").
addEventListener('click', function(){
    let taskList = document.getElementById('taskList');
    taskList.lastElementChild.remove();
})

// Example 6 - Event Handling
document.getElementById("clickMeButton").
addEventListener("dblclick", function(){
    alert('Hello');
})

// Example 7
document.getElementById("teaList").addEventListener
("click", function(event){
    // console.log(event.target);
    if(event.target && event.target.matches('.teaItem'))
        alert("You selected: " + event.target.textContent);
    
})

// Example 8 - Form Handling
document.getElementById("feedbackForm").addEventListener
("submit", function(event){
    // alert("Submitted!");
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput");
    console.log(feedback.value);
    document.getElementById("feedbackDisplay").textContent = `Feedback is: ${feedback.value}`;
    
})

// Example 9
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('domStatus').textContent = "DOM fully loaded";
})

// Example 10 - CSS Manipulation
document.getElementById("toggleHighlight").addEventListener
('click', function(){
    let descryptionText = document.getElementById("descriptionText");
    descryptionText.classList.toggle('highlight')
})