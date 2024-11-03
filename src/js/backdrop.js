import '../css/global.css'
import '../css/home.css'
import backgroundImage from '../assets/backdrop.png';

export const backdrop = () => {
    // background image
    const mainContent = document.querySelector(".main-content");
    const background = document.createElement("img");
    background.classList.add('background-image');
    background.src = backgroundImage;
    mainContent.appendChild(background);
};
