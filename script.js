"use strict"

function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}

const createSquareBtn = document.getElementById("createSquareBtn");
const createCircleBtn = document.getElementById("createCircleBtn");
const createTriangleBtn = document.getElementById("createTriangleBtn")
const deleteAllBtn = document.getElementById("deleteAllBtn");

const workSpace = document.querySelector(".workSpace");

let figureId = 0; //счётчик Idшников для новых фигур

createSquareBtn.addEventListener("click", () => {

    const numInput = document.getElementById("numInput");
    const enteredNum = numInput.value;

    for (let i = 0; i < enteredNum; i ++) {
        const newSquare = document.createElement("div");

        const squareSide = getRandomNum(80, 150) + "px";
        newSquare.style.width = squareSide;
        newSquare.style.height = squareSide;
        newSquare.style.backgroundColor = "red";
        newSquare.style.opacity = "1";
        newSquare.style.position = "absolute";
        newSquare.style.border = "1px solid black";
        newSquare.style.marginLeft = getRandomNum(0, 1350) + "px";
        newSquare.style.marginTop = getRandomNum(0, 450) + "px";
        newSquare.style.display = "none";
        newSquare.style.transition = "opacity" + " " + "0.3s" + " " + "easy-out";
        figureId ++;
        newSquare.id = figureId;
        newSquare.classList.add("square");
    
        workSpace.appendChild(newSquare);

        $(".square").fadeIn(400);
    
        newSquare.addEventListener("click", () => {
            $("#" + newSquare.id).fadeOut(400);
            setTimeout( () => {
                workSpace.removeChild(newSquare);
            }, 400)
        })
        
    }
})

createCircleBtn.addEventListener("click", () => {
    const numInput = document.getElementById("numInput");
    const enteredNum = numInput.value;

    for (let i = 0; i < enteredNum; i ++) {
        const newCircle = document.createElement("div");

        const circleSide = getRandomNum(80, 150) + "px";
        newCircle.style.width = circleSide;
        newCircle.style.height = circleSide;
        newCircle.style.backgroundColor = "green";
        newCircle.style.opacity = "0.8";
        newCircle.style.position = "absolute";
        newCircle.style.border = "1px solid black";
        newCircle.style.borderRadius = "100%"
        newCircle.style.marginLeft = getRandomNum(0, 1350) + "px";
        newCircle.style.marginTop = getRandomNum(0, 450) + "px";
        newCircle.style.display = "none";
        figureId ++;
        newCircle.id = figureId;
        newCircle.classList.add("circle");
    
        workSpace.appendChild(newCircle);

        $(".circle").fadeIn(400);
    
        newCircle.addEventListener("click", () => {
            $("#" + newCircle.id).fadeOut(400);
            setTimeout( () => {
                workSpace.removeChild(newCircle);
            }, 400)
        })

    }
})

createTriangleBtn.addEventListener("click", () => {
    const numInput = document.getElementById("numInput");
    const enteredNum = numInput.value;

    for (let i = 0; i < enteredNum; i ++) {
        const newTriangle = document.createElement("div");

        const triangleSide = getRandomNum(80, 150) + "px";
        
        newTriangle.style.width = triangleSide;
        newTriangle.style.height = triangleSide;
        newTriangle.style.backgroundColor = "blue";

        newTriangle.style.clipPath = "polygon(50% 50%, 100% 100%, 0% 100%)";
        newTriangle.style.opacity = "1";
        newTriangle.style.position = "absolute";
        newTriangle.style.marginLeft = getRandomNum(0, 1350) + "px";
        const marginTop = getRandomNum(-40, 450);
        newTriangle.style.marginTop = marginTop + "px";
        newTriangle.style.display = "none";
        figureId ++;
        newTriangle.id = figureId;
        newTriangle.classList.add("triangle");
    
        workSpace.appendChild(newTriangle);

        $(".triangle").fadeIn(400);
    
        newTriangle.addEventListener("click", () => {
            $("#" + newTriangle.id).fadeOut(400);
            setTimeout( () => {
                workSpace.removeChild(newTriangle);
            }, 400)
        })

    }
})

deleteAllBtn.addEventListener("click", () => {
    $(".square").fadeOut(400);
    $(".circle").fadeOut(400);
    $(".triangle").fadeOut(400);

    setTimeout( () => {
        const figures = Array.from(workSpace.children);
        figures.forEach(figure => {
            workSpace.removeChild(figure);
        });
    }, 400)

})