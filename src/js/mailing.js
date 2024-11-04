import '../css/global.css'
import '../css/mailing.css'

const mainContent = document.querySelector(".main-content");

const form = document.createElement("div");

export const mailingForm = () => {
    form.innerHTML = 
    `<form method="POST" class="mailing-form" onsubmit="sendMail(event)">
    <label for="name">Naam:</label><br>
    <input type="text" id="name" name="name" required><br><br>

    <label for="email">E-mail adres:</label><br>
    <input type="email" id="email" name="email" required><br><br>

    <label for="message">Bericht:</label><br>
    <textarea id="message" name="message" required></textarea><br><br>

    <label for="maat">Maat:</label><br>
    <ul class="size-selection">
        <li><input type="radio" name="size-selection" required>S</li>
        <li><input type="radio" name="size-selection">M</li>
        <li><input type="radio" name="size-selection">L</li>
        <li><input type="radio" name="size-selection">XL</li>
        <li><input type="radio" name="size-selection">XXL</li>
    </ul>

    <button type="submit">Stuur bericht!</button>
    </form>`

mainContent.appendChild(form);
}