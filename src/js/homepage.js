import '../css/global.css'

export const homepage = () => {
    const mainContent = document.querySelector(".main-content");
    const content = document.createElement("h3");
    content.textContent = "Hello World!";
    mainContent.appendChild(content);
};
