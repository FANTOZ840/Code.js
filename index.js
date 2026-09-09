const paragraph = document.getElementById("myText");
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const color = button.innerText.trim();
        paragraph.style.color = color;
    });
});

const p2 = document.createElement("p");
p2.innerText = "This is my first javascript";
document.body.appendChild(p2);
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
    alert("welcome to my javascript! by Ephantus")
});