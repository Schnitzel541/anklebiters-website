import '../css/global.css';
import '../css/over.css';

import overHeader from "/src/assets/over-header.jpg";

const mainContent = document.querySelector(".main-content");
const headerImage = document.createElement('img');
const overContent = document.createElement('div');

headerImage.src = overHeader;
headerImage.className = "over-header"


export const over = () => {

    mainContent.appendChild(headerImage);
}