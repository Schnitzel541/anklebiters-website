import '../css/global.css';
import '../css/merch.css';
import merchFront from '../assets/merch_front.jpg'
import merchBack from '../assets/merch_back.jpg'

const mainContent = document.querySelector(".main-content");
const merchPageContent = document.createElement("div")
const leftContent = document.createElement("div");
const rightContent = document.createElement("div");

const shirtFront = document.createElement('img');
const shirtBack = document.createElement('img');

const buyButton = document.createElement('button');

merchPageContent.className = "merch-page-content";

shirtFront.src = merchFront;
shirtBack.src = merchBack;
shirtFront.className = 'shirt-img';
shirtBack.className = 'shirt-img';

leftContent.className = "left-content";
rightContent.className = "right-content";

buyButton.textContent = "Interesse? Klik hier!";
buyButton.className = "buy-button";

export const merch = () => {

    leftContent.appendChild(shirtFront);
    leftContent.appendChild(shirtBack);


    
    rightContent.innerHTML = `<div class="right-content-text"><h1>Officiëel ANKLEBITERS T-shirt</h3><br>
                              <p>Toon je support voor ANKLEBITERS met dit exclusieve, officiële 
                              T-shirt! Perfect voor de echte fans,
                              dit comfortabele T-shirt met een uniek ontwerp 
                              is een must-have voor elke garderobe</p>
                              <p>Het T-shirt is gemaakt van 100% katoen</p>
                              <p>Beschikbaar in de volgende maten:</p>
                              <ul>
                                <li>S</li>
                                <li>M</li>
                                <li>L</li>
                                <li>XL</li>
                                <li>XXL</li>
                              </ul>
                              <h3>€17,50</h3>
                              <button class="buy-button">Interesse? Klik hier!</button></div>`
    merchPageContent.appendChild(leftContent);
    merchPageContent.appendChild(rightContent);

    mainContent.appendChild(merchPageContent);
}