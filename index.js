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
window.onload = generateGrid(32);
