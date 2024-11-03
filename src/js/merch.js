import '../css/global.css';

const mainContent = document.querySelector(".main-content");
const content = document.createElement("h3");

export const merch = () => {
    content.textContent = "Merch";
    mainContent.appendChild(content);
}