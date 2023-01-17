'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
let btntoolbar = document.querySelector("#toolbar-toggle");
let hiddenBar = document.querySelector(".hidden");
let image1 = {
    image: "images/1.jpg",
    nom: "image 1"
}
let image2 = {
    image: "images/2.jpg",
    nom: "image 2"
}
let image3 = {
    image: "images/3.jpg",
    nom: "image 3"
}
let image4 = {
    image: "images/4.jpg",
    nom: "image 4"
}
let image5 = {
    image: "images/5.jpg",
    nom: "image 5"
}
let image6 = {
    image: "images/6.jpg",
    nom: "image 6"
}

let imagesToggle = [image1, image2, image3, image4, image5, image6];

let previous = document.querySelector("#slider-previous");
let play = document.querySelector("#slider-toggle");
let next = document.querySelector("#slider-next");
let random = document.querySelector("#slider-random");

let image = document.querySelector(".img")
let imagename = document.querySelector(".nom")
let i = 0




/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
function toggleMenu() {
    hiddenBar.classList.toggle("hidden")
}

function nextImage() {
    if (i < imagesToggle.length) {
        image.src = imagesToggle[i].image;
        image.name = imagesToggle[i].nom;
        i++;
    }
    else {
        i = 0;
        nextImage();
    }
    console.log(image.src);
    console.log(imagename)
}

function previousImage() {
    if (i > 0 && i <= imagesToggle.length) {
        
        i =  i-1;
    }
    else {
        i = imagesToggle.length;
        previousImage();
    }
    image.src = imagesToggle[i].image

    console.log(image.src);
}

function randomImage() {
    let min = 0;
    let max = imagesToggle.length;
    let iRandom = Math.floor(Math.random() * (max - min)) + min; 
    if (i === iRandom) {
        randomImage();
    }
    else {
        i = iRandom
        image.src = imagesToggle[i].image;
    }
   
}

function playImage() {
    if (i < imagesToggle.length) {
        image.src = imagesToggle[i].image;
        image.name = imagesToggle[i].nom;
        i++;
        console.log(image.src)
    }

    else {
        i = 0;
        playImage();
    }
    
}

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

btntoolbar.addEventListener("click", toggleMenu);

next.addEventListener("click", nextImage);
previous.addEventListener("click", previousImage);
random.addEventListener("click", randomImage);
play.addEventListener("click", playImage);