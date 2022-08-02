let gridSize = 16;

const container = document.querySelector(".container");
const sizeBtn = document.querySelector(".size");

generateGrid();

sizeBtn.addEventListener("click", changeSize);

function changeSize(e) {
  gridSize = prompt("What size? Max 100");
  container.setAttribute(
    "style",
    `grid-template-columns: repeat(${gridSize}, 2fr); grid-template-rows: repeat(${gridSize}, 2fr);`
  );
  generateGrid();
}

function generateGrid() {
  for (let i = 0; i < gridSize * gridSize; i++) {
    let div = document.createElement("div");
    div.classList = "grid-box";
    const gridBoxes = document.getElementsByClassName("grid-box");
    Array.from(gridBoxes).forEach((box) =>
      box.addEventListener("mouseover", function(e){
        e.target.style.backgroundColor = "black";
      })
    );
    container.appendChild(div);
  }

  
}


