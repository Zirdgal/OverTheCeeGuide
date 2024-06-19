const introContainer = document.getElementById("introduction-container");
const keybindContainer = document.getElementById("keybinds-container");

introContainer.onclick = function() {
    location.href = 'pages/begin.html';
};
keybindContainer.onclick = function() {
    location.href = 'pages/keybinds.html';
};