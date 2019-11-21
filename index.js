let resetButton = document.getElementById("reset");
let switchButton = document.getElementById("switch");
let resizeButton = document.getElementById("resize");
let currBrush = "greyscale";
let gridNum = 32;
resetButton.addEventListener("click", () => {
  reset();
});
switchButton.addEventListener("click", () => {
  //switchColors();
});
resizeButton.addEventListener("click", () => {
  resizeGrid();
});

function generateGrid(dimensions) {
  let grid = document.getElementById("grid");
  let gridItem;
  let para;
  let row;
  for(let currRow = 1; currRow <= dimensions; currRow++) {
    row = document.createElement("div");
    row.classList.add("row");
    for(let currColumn = 1; currColumn <= dimensions; currColumn++) {
        gridItem = document.createElement("div");
        para = document.createElement("p");
        para.innerHTML = "";
        //para.setAttribute("style", "visibility: hidden;");
        gridItem.onmouseover = onHover;
        //alert(gridItem.onmouseover);
        gridItem.classList.add("gridItem");
        let gridHeight = grid.offsetHeight;
        //alert(gridHeight);
        let gridWidth = grid.offsetWidth;
        //alert(gridWidth);
        gridItem.style.height = (gridHeight/dimensions) + "px";
        gridItem.style.width = (gridWidth/dimensions) + "px";
        gridItem.appendChild(para);
        row.appendChild(gridItem);
    }
    grid.appendChild(row);
  }
}

function onHover() {
  //Reduce opacity level
  //Note: opacity 0 is white, while 1 is black
  let opacityLevel = this.getAttribute("opacity");
  this.style.opacity = Number(this.style.opacity) + 0.1;
}

function resizeGrid() {
  gridNum = prompt("Please enter desired size of grid (4-64)");
  //Set grid's innerHTML to "" to remove all squares
  grid.innerHTML = "";
  generateGrid(gridNum);

}

function reset() {
  let grid = document.getElementById("grid");
  grid.innerHTML = "";
  generateGrid(gridNum);
}

//function switchColors() {

//}

window.onload = generateGrid(gridNum);
