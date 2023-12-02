/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let duration=0;
let costPerDay=35;
let cost=0;
let mondayButton=document.getElementById("monday");
let tueButton=document.getElementById('tuesday');
let wedButton=document.getElementById('wednesday');
let thursButton=document.getElementById('thursday');
let friButton=document.getElementById('friday');
let fullDayButton=document.getElementById("full");
let halfDayButton=document.getElementById("half");
let clearButton=document.getElementById("clear-button");
let calculatedCost=document.getElementById("calculated-cost");


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

mondayButton.onclick=function chooseDay(){
    if(!mondayButton.classList.contains('clicked')){
        mondayButton.classList.add('clicked');
        duration++;
        totalCost();
    }
};

tueButton.onclick=function chooseDay(){
    if(!tueButton.classList.contains('clicked')){
        tueButton.classList.add('clicked');
        duration++;
        totalCost();
    }
};

wedButton.onclick=function chooseDay(){
    if(!wedButton.classList.contains('clicked')){
        wedButton.classList.add('clicked');
        duration++;
        totalCost();
    }
};

thursButton.onclick=function chooseDay(){
    if(!thursButton.classList.contains('clicked')){
        thursButton.classList.add('clicked');
        duration++;
        totalCost();
    }
};

friButton.onclick=function chooseDay(){
    if(!friButton.classList.contains('clicked')){
        friButton.classList.add('clicked');
        duration++;
        totalCost();
    }
};


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.onclick=function(){
    mondayButton.classList.remove('clicked');
    tueButton.classList.remove('clicked');
    wedButton.classList.remove('clicked');
    thursButton.classList.remove('clicked');
    friButton.classList.remove('clicked');
    duration=0;
    totalCost();
};


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfDayButton.onclick=function(){
    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');
    costPerDay=20;
    totalCost();
};

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDayButton.onclick=function(){
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');
    costPerDay=35;
    totalCost();
};



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function totalCost(){
    cost=costPerDay*duration;
    calculatedCost.textContent=cost;
}


