function calculateTip () {
    //1) //Getting the user input
    const bill = parseFloat(document.querySelector("#bill").value);
    const tipPercentage = parseFloat(document.querySelector("#tipPercentage").value);
    const splitByNumOfPeople = parseInt(document.querySelector("#splitByNumOfPeople").value);
    
    let totalAmount, calcTipPerson, totatlTip;

    calcTipPerson = (bill * tipPercentage) / splitByNumOfPeople;
    totatlTip = calcTipPerson * splitByNumOfPeople; 
    totalAmount = bill + totatlTip; 


    //if the input fields are enmpty...we tell the user smth..
    if (isNaN(bill) || isNaN(splitByNumOfPeople)) {
        //console.log (`You forgot to provide some values, and bill is ${bill}!`);
        alert (`You forgot to enter the right values!`);
        return;
    } else if (tipPercentage == 0) {
        alert(`Ohh, no tip this time?`)
        document.querySelector("#totalAmount").innerHTML = totalAmount; 
        return;
    };

    //displaying the result to UI
    document.querySelector("#tipPerson").innerHTML = calcTipPerson.toFixed(2);
    document.querySelector("#totalTip").innerHTML = totatlTip.toFixed(2);
    document.querySelector("#totalAmount").innerHTML = totalAmount.toFixed(2);
}; 

//Setting the reset button

function init () {
    document.querySelector("#tipPerson").innerHTML = "0";
    document.querySelector("#totalTip").innerHTML= "0";
    document.querySelector("#totalAmount").innerHTML = "0";
};


/* //allowing the user to reset the tip calc
const resetBtn = document.querySelector("#resetBtn");
resetBtn.onclick = function() {
    init ();
};
*/
//reset to default all the values
document.querySelector("#resetBtn").onclick = function() {

    init();
    document.getElementById("bill").value = "";
    document.getElementById("tipPercentage").value = "0";
    document.getElementById("splitByNumOfPeople").value = "";

};

//Setting the calculate button
const calculateBtn = document.querySelector('#calculateBtn');
calculateBtn.addEventListener('click', function(){
    calculateTip ();
});

window.onload = function() {
    init ();
    console.log('init() function was called')
}





