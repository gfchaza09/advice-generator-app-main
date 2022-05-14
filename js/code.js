"use strict";

const diceButton = document.querySelector(".card__btn");

const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");

let adviceData = {};

const fetchAdvices = async () => {
    await fetch("https://api.adviceslip.com/advice")
        .then(res => res.json())
        .then(data=> {
            adviceData = data.slip
        })

    adviceId.textContent = adviceData.id;
    adviceText.textContent = adviceData.advice;
}

diceButton.addEventListener("click", ()=>{
    fetchAdvices();
});

fetchAdvices();