import '../css/global.css';

export const merch = () => {
    const mainContent = document.querySelector(".main-content");
    const content = document.createElement("h3");
    content.textContent = "Merch";
    mainContent.appendChild(content);
}