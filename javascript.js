const gridContainer = document.querySelector(".grid-container");

const input = parseInt(prompt("Cube length: "));

const boxDim = 840;
gridContainer.style.width = `${boxDim}px`;
gridContainer.style.height = `${boxDim}px`;

gridSize = boxDim / input - 2;

for (let i = 0; i < input * input; i++) {
  const grid = document.createElement("div");
  grid.textContent = "HI";
  grid.style.width = `${gridSize}px`;
  grid.style.height = `${gridSize}px`;
  grid.classList.add("grid");
  grid.addEventListener("mouseenter", () => {
    const arr = [
      "blue",
      "darkblue",
      "red",
      "green",
      "purple",
      "lightblue",
      "pink",
      "orange",
      "gray",
      "lightgray",
      "darkpink",
    ];
    console.log("mouse entered");
    grid.style.backgroundColor = arr[Math.floor(Math.random() * arr.length)];
  });
  document.querySelector(".grid-container").appendChild(grid);
}
