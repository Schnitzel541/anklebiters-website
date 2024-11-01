import '../css/global.css'; 
import anklebitersLogo from '\\../assets/images/hondje_blauw.png'

export const headerLogic = (() => {
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
    headerList.innerHTML = `<li>Home</li>
                            <li>Over</li>
                            <li>Merch</li>
                            <li>Shows</li>`

    headerList.insertBefore(headerLogo, headerList.firstChild);
})();