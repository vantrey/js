var inputEl = document.getElementById("name");
var button = document.getElementById("send-button");
button.addEventListener("click", function() {
    inputEl.className = "error";
});
inputEl.addEventListener("keyup", onKeyUp);

function onKeyUp() {
    inputEl.className = "error";
}
