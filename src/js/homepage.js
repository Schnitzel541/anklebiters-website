import '../css/global.css';
import '../css/home.css';
import anklebitersLogo from '../assets/anklebiters-logo-white.png'

export const homepage = () => {
    const mainContent = document.querySelector(".main-content");
    const homepageContent = document.createElement("div");
    const logo = document.createElement("img")
    logo.classList.add("anklebiters-logo")
    logo.src = anklebitersLogo;
    homepageContent.classList.add("homepage-content");
    homepageContent.appendChild(logo);

    mainContent.appendChild(homepageContent);
}