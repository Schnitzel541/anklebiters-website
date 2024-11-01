import '../css/global.css'; 
import anklebitersLogo from '../assets/hondje_blauw.png'

export const headerLogic = () => {
    const header = document.querySelector("header");
    const headerList = document.createElement("ul");
    headerList.classList.add("header-ul");
    header.appendChild(headerList);
    const headerLogo = document.createElement('img');

    // Logo
    headerLogo.src = anklebitersLogo;
    headerLogo.classList.add("headerLogo");
    headerLogo.style.maxWidth = "40px"
    headerLogo.style.padding = "10px"

    // List
    headerList.innerHTML = `<li class="header-list-item">Home</li>
                            <li class="header-list-item">Over</li>
                            <li class="header-list-item">Merch</li>
                            <li class="header-list-item">Shows</li>`

    headerList.insertBefore(headerLogo, headerList.firstChild);
};