import '../css/global.css';

export const over = () => {
    const mainContent = document.querySelector(".main-content");
    const content = document.createElement("h3");
    content.textContent = "About us";
    mainContent.appendChild(content);
}