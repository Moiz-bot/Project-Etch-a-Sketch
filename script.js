function createDiv() {
  let valueOfPixel = 16;
  let button = document.querySelector(".button");
  // console.log(button);

  function addDiv(zero) {
    let container = document.querySelector(".container");
    container.innerHTML = "";
    for (let i = 0; i < zero * zero; i++) {
      let creatingDiv = document.createElement("div");
      creatingDiv.classList.add("gridDiv");
      container.appendChild(creatingDiv);
    }
    let gridDiv = document.querySelectorAll(".gridDiv")
    gridDiv.forEach((grid) => {
      grid.style.height = `calc(100% / ${valueOfPixel})`
      grid.style.width = `calc(100% / ${valueOfPixel})`
    })
    addColorInGrid();
  }
  function addColorInGrid() {
    let isMouseDown = false; // Track whether the mouse button is pressed
    let gridDiv = document.querySelectorAll(".gridDiv");

    gridDiv.forEach((div) => {
      div.addEventListener("mousedown", function () {
        isMouseDown = true;
        this.style.backgroundColor = "red";
      });
      div.addEventListener("mousemove", function () {
        if (isMouseDown) {
          this.style.backgroundColor = "red";
        }
      });
    });
    document.addEventListener("mouseup", function () {
      isMouseDown = false;
    });
  }

  button.addEventListener("click", function () {
    let input = parseInt(prompt("enter the value", 10));
    if (!isNaN(input) && input > 0) {
      valueOfPixel = input;
     
      
      addDiv(valueOfPixel);
    } else {
      console.log("wrong input");
    }
  });
  addDiv(valueOfPixel);
}


createDiv();
