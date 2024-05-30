// Operations
let buttons = document.querySelectorAll(".button");
buttons.forEach(function (button) {
  button.addEventListener("click", showValue);
});

function showValue(event) {
  let value = event.target.value;
  let display = document.getElementById("display-text");
  let result = document.getElementById("display-result");

  if (value === "C") {
    display.value = "";
    result.value = "0";
  } else if (value === "DEL") {
    display.value = display.value.slice(0, -1);
  } else if (value === "=") {
    try {
      result.value = eval(display.value) || "0";
    } catch {
      result.value = "Error";
    }
  } else {
    display.value += value;
  }
}

// Change color mode
let modeBtn = document.getElementById("modeBtn");
let calculator = document.getElementById("calculator");
let color1Buttons = document.querySelectorAll(".color-1");
let color3Buttons = document.querySelectorAll(".color-3");
let modeIcon = document.getElementById("mode-icon");
let displayResult = document.getElementById("display-result");
let displayText = document.getElementById("display-text");
let mainBody = document.getElementById("main-body");

modeBtn.addEventListener("click", changeMode);

function changeMode() {
  let modeValue = modeBtn.value;
  if (modeValue === "light") {
    calculator.style.backgroundColor = "#ECEFF8";
    color1Buttons.forEach(button => {
      button.style.backgroundColor = "#BCC7DC";
      button.style.color = "black";
    });
    color3Buttons.forEach(button => {
      button.style.backgroundColor = "#ECEFF8";
      button.style.color = "black";
    });
    modeBtn.value = "dark";
    modeIcon.src = "assets/dark-mode.jpg";
    displayResult.style.color = "black";
    displayText.style.color = "black";
    mainBody.style.backgroundColor = "black";
  } else if (modeValue === "dark") {
    calculator.style.backgroundColor = "#1a2e3d";
    color1Buttons.forEach(button => {
      button.style.backgroundColor = "#4b6385";
      button.style.color = "#fcf3e8";
    });
    color3Buttons.forEach(button => {
      button.style.backgroundColor = "#23344f";
      button.style.color = "#fcf3e8";
    });
    modeBtn.value = "light";
    modeIcon.src = "assets/light-mode.jpg";
    displayResult.style.color = "white";
    displayText.style.color = "white";
    mainBody.style.backgroundColor = "white";
  }
}
