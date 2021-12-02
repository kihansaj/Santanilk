// Duration
function getFunc1() {
    var a = document.getElementById("days").value;
    document.getElementById("output3").innerHTML = a;
}

// Occupancy
function getFunc2() {
    selectElement = document.querySelector('#occupancy');
    output6 = selectElement.options[selectElement.selectedIndex].value;
    document.querySelector('.output6').textContent = output6;
}

// Room Type
function getFunc3() {
    selectElement = document.querySelector('#room');
    output1 = selectElement.options[selectElement.selectedIndex].text;
    output2 = selectElement.options[selectElement.selectedIndex].value;
    document.querySelector('.output1').textContent = output1;
    document.querySelector('.output2').textContent = output2;
}

// No. of Rooms
function getFunc9() {
    var a = document.getElementById("roomno").value;
    document.getElementById("output9").innerHTML = a;
}

// Meal Type
function getFunc4() {
    selectElement = document.querySelector('#meal');
    output7 = selectElement.options[selectElement.selectedIndex].text;
    output8 = selectElement.options[selectElement.selectedIndex].value;
    document.querySelector('.output7').textContent = output7;
    document.querySelector('.output8').textContent = output8;
}

// Extras
function getFunc5() {
    selectElement = document.querySelector('#extra');
    output4 = selectElement.options[selectElement.selectedIndex].text;
    output5 = selectElement.options[selectElement.selectedIndex].value;
    document.querySelector('.output4').textContent = output4;
    document.querySelector('.output5').textContent = output5;
}

// Room Cost
function getFunc7() {
    selectElement = document.querySelector('#room');
    var a = document.getElementById("days").value;
    var b = document.getElementById("roomno").value;
    result1=output2*a*b;
    document.querySelector('.result1').textContent = result1;
    
}

// Meal Cost
function getFunc6() {
    selectElement = document.querySelector('#meal');
    output8 = selectElement.options[selectElement.selectedIndex].value;
    selectElements = document.querySelector('#occupancy');
    output6 = selectElements.options[selectElements.selectedIndex].value;
    result2=output8*output6;
    document.querySelector('.result2').textContent = result2;
    
}

// Total
function getFunc8() {
    selectElement = document.querySelector('#room');
    var a = document.getElementById("days").value;
    var b = document.getElementById("roomno").value;
    result1=output2*a*b;

    selectElementn = document.querySelector('#meal');
    output8 = selectElementn.options[selectElementn.selectedIndex].value;
    selectElements = document.querySelector('#occupancy');
    output6 = selectElements.options[selectElements.selectedIndex].value;
    result2=output8*output6;

    selectElemente = document.querySelector('#extra');
    output5 = selectElemente.options[selectElemente.selectedIndex].value;
    o5= output5*1;

    result3=result1+result2+o5;
    document.querySelector('.result3').textContent = result3;
    
}


function addTheValue(secondValue) {
    var fValue = document.getElementById("firstValue");
    firstValue.innerHTML = parseInt(fValue.innerHTML) +
    parseInt(secondValue);
}



function myFunction2() {
    document.querySelector('.output1').textContent = null;
    document.querySelector('.output2').textContent = null;
    document.getElementById("output3").innerHTML = null;
    document.querySelector('.output4').textContent = null;
    document.querySelector('.output5').textContent = null;
    document.querySelector('.output6').textContent = null;
    document.querySelector('.output7').textContent = null;
    document.querySelector('.output8').textContent = null;
    // document.querySelector('.output9').textContent = null;
    document.querySelector('.result1').textContent = null;
    document.querySelector('.result2').textContent = null;
    document.querySelector('.result3').textContent =null;

    
}

function Reserve(){
    addTheValue(result3);
    myFunction2();
    myFunction1();
}


function resFunc() {
    getFunc1();
    getFunc2();
    getFunc3();
    getFunc4();
    getFunc5();
    getFunc6();
    getFunc7();
    getFunc8();
    getFunc9();
  
}

function AddtoFav() {
   SaveToLocal(); 
}

// Thanking message
function myFunction1() {
    alert("Thank you for choosing to visit us at Santani! We determine on making your stay memorable and amazing! We strive to make the experience at Santani one you will remember forever :)  ")
}


function FavRes() {
    getFunc1();
    getFunc2();
    getFunc3();
    getFunc4();
    getFunc5();
    getFunc6();
    getFunc7();
    getFunc8();
    getFunc9();
}


function CheckLoyalty() {
    var points = 0;
    var rno=document.getElementById("roomno").value;
    

    if (rno >=3) {
      points = rno * 20;

    }
    else{
        points = 0;
    }
    document.querySelector('.loyalty').textContent = points;
}
