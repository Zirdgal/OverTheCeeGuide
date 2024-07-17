const introContainer = document.getElementById("introduction-container");
const keybindContainer = document.getElementById("keybinds-container");
const cardContainer = document.getElementById("cards-container");

introContainer.onclick = function() {
    location.href = 'pages/begin.html';
};
keybindContainer.onclick = function() {
    location.href = 'pages/keybinds.html';
};
cardContainer.onclick = function() {
    location.href = 'pages/cards.html';
};
