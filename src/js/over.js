import '../css/global.css';

const mainContent = document.querySelector(".main-content");
const content = document.createElement("h3");

export const over = () => {
    content.textContent = "About us";
    mainContent.appendChild(content);
}