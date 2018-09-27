// JS script for Rotating text
var i = 0;
var txt = 'Avid-Reader. Web-Developer. Deep-Learning-Enthusiast';
var speed = 400;
var len = txt.length;
function typeWriter() {    
    if (i < len) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    if(i == len)
    {
        i=0;
        document.getElementById("demo").innerHTML = "";
    }
}