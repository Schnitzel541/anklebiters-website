import '../css/global.css';

export const shows = () => {
    const mainContent = document.querySelector(".main-content");
    const content = document.createElement("h3");
    content.textContent = "Shows";
    mainContent.appendChild(content);
}