import '../css/global.css';

const mainContent = document.querySelector(".main-content");
const content = document.createElement("h3");

export const shows = () => {
    content.textContent = "Shows";
    mainContent.appendChild(content);
}