/**
 * Created by andrewcabrera on 6/7/17.
 */
var box = document.getElementById("box"); //holds the location of the shape
var attempts = 0;
var sumOfTimes= 0;
var averageTime = 0.00;
var timeItTookToClick = 0;
var oldTime = Date.now();

//returns a random RGB value
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';

    for (var i = 0; i < 6; i++)
    {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

function randomPlacement() {
    box.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
    box.style.left = Math.floor(Math.random()*window.innerWidth) + "px";
}

//sets the time it took to click in item in the HTML
function setTime() {
    document.getElementById("time").innerHTML=timeItTookToClick/1000;
}

//creates a new circle at a random interval and resets the old time
function makeCircle() {
    setTimeout(function () {

        box.style.backgroundColor = getRandomColor();
        box.style.borderRadius = "100px";
        randomPlacement();

        box.style.display = "block";
        oldTime = Date.now();

    }, Math.random()*3000);
}

//creates a new box at a random interval and resets the old time
function makeBox() {
    setTimeout(function () {

        box.style.backgroundColor = getRandomColor();

        randomPlacement();

        box.style.display = "block";
        box.style.borderRadius = "0";
        oldTime = Date.now();

    }, Math.random()*1000);
}

//clear the item on click, finds the time it took to click item and resets the item
box.onclick= function () {
    var oneOrTwo = Math.floor(Math.random()*2); //can be either 0 or 1
    attempts++;

    this.style.display="none"; //hides shape

    document.getElementById("attempts").innerHTML = attempts; //sets attempts


    timeItTookToClick = Date.now() - oldTime;
    setTime();

    sumOfTimes += timeItTookToClick/1000;
    averageTime = sumOfTimes / attempts;

    if (attempts > 0)
        document.getElementById("averageTime").innerHTML = averageTime;


    if (oneOrTwo == 1)
        makeBox();
    else
        makeCircle();
}



