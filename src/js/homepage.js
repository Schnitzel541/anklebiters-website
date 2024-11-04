import '../css/global.css';
import '../css/home.css';
import anklebitersLogo from '../assets/anklebiters-logo-white.png'

const logo = document.createElement("img")
const mainContent = document.querySelector(".main-content");
const homepageContent = document.createElement("div");
const homepageText = document.createElement("p");
const homepageButton = document.createElement('button');

export const homepage = () => {
    logo.classList.add("anklebiters-logo")
    logo.src = anklebitersLogo;
    homepageContent.classList.add("homepage-content");
    homepageContent.appendChild(logo);
    homepageText.textContent = '---COMING SOON---'

    // button
    homepageButton.textContent = "SHOWS";
    homepageButton.className = 'homepage-button';
    
    homepageContent.appendChild(homepageText);
    homepageContent.appendChild(homepageButton);
    mainContent.appendChild(homepageContent);
}