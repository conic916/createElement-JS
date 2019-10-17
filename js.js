'use strict';
// variables: 
const btn = document.querySelector("button");
let number = 1;
const list = document.querySelector("ul"); //add UL

// AddEventListener + fonction anonyme : 

btn.addEventListener("click", function () {
    const li = document.createElement("li"); // create LI
    li.textContent = number; // Add text pour li elements
    list.appendChild(li); // add li pour liste UL
    if (number % 3 == 0) {
        li.classList.add("big");
    }
    number += 2
});