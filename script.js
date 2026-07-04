
const resetBtn = document.getElementById("resetBtn");
const counterEl = document.getElementById("counter");

let count = 0;

function randomColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

    return `rgb(${r}, ${g}, ${b})`;
}

colorBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = randomColor();
    count++;
    counterEl.textContent = `Clicked ${count} times`;
});

resetBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = "#0f172a";
    count = 0;
    counterEl.textContent = `Clicked ${count} times`;
});