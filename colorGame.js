var numSquares = 3;
var colors = [];
var pickedColor;
var colors = generateColors(numSquares)
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#RGB");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

init();

function init() {
    setupModeButton();
    setupSquares();
    reset();
}

function setupModeButton() {
    for (var i = 0; i < modeBtn.length; i++) {
        modeBtn[i].addEventListener("click", function() {
            modeBtn[0].classList.remove("selected")
            modeBtn[1].classList.remove("selected")
            this.classList.add("selected")
            this.textContent == "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        })
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor == pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColors(pickedColor);
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            };
        });
    };
}

//reset logic
function reset() {
    colors = generateColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block"
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
};

resetButton.addEventListener("click", function() {
    reset();
    resetButton.textContent = "New Colors";
})

//color generation logic
function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
};

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

function generateColors(num) {
    //make an array
    var colorArray = [];
    //push num colors into array
    for (var i = 0; i < num; i++) {
        colorArray.push(randomColor());
    };
    //return that array
    return colorArray;
};

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
};
