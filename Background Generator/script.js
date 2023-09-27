const colorDisplay = document.getElementById("color-display");
const generateBtn = document.getElementById("generate-btn");
const customColorInput = document.getElementById("custom-color");
const applyBtn = document.getElementById("apply-btn");
const copyBtn = document.getElementById("copy-btn");

// Function to generate a random color
function generateRandomColor() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    colorDisplay.style.backgroundColor = randomColor;
    customColorInput.value = randomColor;
}

// Event listeners
generateBtn.addEventListener("click", generateRandomColor);

applyBtn.addEventListener("click", () => {
    const customColor = customColorInput.value;
    colorDisplay.style.backgroundColor = customColor;
});

copyBtn.addEventListener("click", () => {
    const colorCode = customColorInput.value;
    navigator.clipboard.writeText(colorCode);
    alert(`Copied: ${colorCode}`);
});

// Initial random color generation
generateRandomColor();
