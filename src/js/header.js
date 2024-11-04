import '../css/global.css'; 
import anklebitersLogo from '../assets/hondje_blauw.png'

const header = document.querySelector("header");
const headerList = document.createElement("ul");
const headerLogo = document.createElement('img');

export const headerLogic = () => {
    headerList.classList.add("header-ul");
    header.appendChild(headerList);

    // Logo
    headerLogo.src = anklebitersLogo;
    headerLogo.classList.add("header-logo");
    headerLogo.style.maxWidth = "40px"
    headerLogo.style.padding = "10px"

    // List
    headerList.innerHTML = `<li class="header-list-item"><a href="/">Home</a></li>
                            <li class="header-list-item"><a href="/over">Over</a></li>
                            <li class="header-list-item"><a href="/merch">Merch</a></li>
                            <li class="header-list-item"><a href="/shows">Shows</a></li>`

    headerList.insertBefore(headerLogo, headerList.firstChild);
};