var button = document.getElementById("button");
var div = document.getElementById("test");
var reset = document.getElementById("reset");


button.addEventListener("click", function () {
    if (div.classList.contains("red")) {
        div.classList.remove("red");
        div.classList.add("green");
    } else {
        div.classList.remove("green");
        div.classList.add("red");
    } 
});

reset.addEventListener("click", function () {
    div.removeAttribute("class", "green");
    div.removeAttribute("class", "red")
});

function zmienKolor(){
    this.className = "green";
}

function zmienKolor2(){
    this.className = "red";
}

window.onload = function () {
    var test = document.getElementsByTagName("#reset")
    test.onmouseout = zmienKolor;
    test.onmouseover = zmienKolor2;
}




for (var i = 0; i < lista.length; i++) {
    lista[i].style.color = "red";
}


var x = document.createElement("p");

x.style.color = "red";
x.className = "tesciur"
x.innerHTML = "niger";

var body = document.querySelector("body");
body.appendChild(x);


function zmienKolor() {
    this.style.color = "white";
}

function usunKolor() {
    this.style.color = "black";
}


window.onload = function () {
    var lista = document.getElementById("reset");
    lista.addEventListener("mouseover", zmienKolor)
    lista.addEventListener("mouseout", usunKolor)
    
} 



Animacje

let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");

setInterval(function() {console.log(box1.getBoundingClientRect().top)}, 300)

box1.firstElementChild.classList.remove("inner")
