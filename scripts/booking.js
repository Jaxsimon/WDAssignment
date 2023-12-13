/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var costPerDay = 0;
var numDaysSelected = 0;
var dailyCost = 35;


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

var monBut = document.getElementById('monday');
var tuesBut = document.getElementById('tuesday');
var wedBut = document.getElementById('wednesday');
var thursBut = document.getElementById('thursday');
var friBut = document.getElementById('friday');

function monClicked() {
    let dayText = document.getElementById("monday");
    if (dayText.classList.contains("clicked")) {
    } else {
        dayText.classList.add("clicked");
        numDaysSelected +=1;
    }
    calculateCost();
}

function tuesClicked() {
    let dayText = document.getElementById("tuesday");
    if (dayText.classList.contains("clicked")) {
    } else {
        dayText.classList.add("clicked");
        numDaysSelected +=1;
    }
    calculateCost();
}

function wedClicked() {
    let dayText = document.getElementById("wednesday");
    if (dayText.classList.contains("clicked")) {
    } else {
        dayText.classList.add("clicked");
        numDaysSelected +=1;
    }
    calculateCost();
}

function thursClicked() {
    let dayText = document.getElementById("thursday");
    if (dayText.classList.contains("clicked")) {
    } else {
        dayText.classList.add("clicked");
        numDaysSelected +=1;
    }
    calculateCost();
}

function friClicked() {
    let dayText = document.getElementById("friday");
    if (dayText.classList.contains("clicked")) {
    } else {
        dayText.classList.add("clicked");
        numDaysSelected +=1;
    }
    calculateCost();
}

monBut.addEventListener("click", monClicked);
tuesBut.addEventListener("click", tuesClicked);
wedBut.addEventListener("click", wedClicked);
thursBut.addEventListener("click", thursClicked);
friBut.addEventListener("click", friClicked);


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

var clearBut = document.getElementById("clear-button");

function clearButton() {
    monBut.classList.remove("clicked");
    tuesBut.classList.remove("clicked");
    wedBut.classList.remove("clicked");
    thursBut.classList.remove("clicked");
    friBut.classList.remove("clicked");
    numDaysSelected = 0;
    calculateCost();
}

clearBut.addEventListener("click", clearButton);


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

var halfCost = document.getElementById("half");

function halfDay() {
    dailyCost = 20;
    halfCost.classList.add("clicked");
    fullCost.classList.remove("clicked");
    calculateCost();
    return dailyCost;
}

halfCost.addEventListener("click", halfDay);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
var fullCost = document.getElementById("full");

function fullDay() {
    dailyCost = 35;
    fullCost.classList.add("clicked");
    halfCost.classList.remove("clicked");
    calculateCost();
    return dailyCost;
}

fullCost.addEventListener("click", fullDay);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
var finalCost = document.getElementById("calculated-cost");
function calculateCost(){
    costPerDay = numDaysSelected * dailyCost;
    finalCost.innerHTML = costPerDay;
}
