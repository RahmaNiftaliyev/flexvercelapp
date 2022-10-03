const addButton = document.getElementById("add-div-button");
const deleteButton = document.getElementById("delete-div-button");
const widthInput = document.getElementById("width");
const heightInput = document.getElementById("height");
const colorInput = document.getElementById("color");
const marginInput = document.getElementById("margin");
const flexPlayground = document.getElementById("flex-playground");
const flexSelectBoxes = Array.from(
  document.querySelectorAll(".flex-properties")
);

let cssObject = {};

eventListeners();

function eventListeners() {
  addButton.addEventListener("click", addDivController);
  deleteButton.addEventListener("click", deleteDivController);
  flexSelectBoxes.forEach((select) => {
    select.addEventListener("change", flexPropertiesChangerController);
  });
}

function addDivController() {
  const divWidth = `${widthInput.value.trim()}px`;
  const divHeight = `${heightInput.value.trim()}px`;
  const backgroundColor = `${colorInput.value}`;
  const divMargin = `${marginInput.value}px`;

  if ([divHeight, divWidth.divMargin].some((inp) => inp === "px")) {
    alert("butun deyerleri daxil edin");
  } else {
    addUIContainerContent(divWidth, divHeight, backgroundColor, divMargin);
  }

  console.log(divHeight, divWidth, backgroundColor, divMargin);
}
function addUIContainerContent(
  paramsWidth,
  paramsHeight,
  paramsColor,
  paramsMargin
) {
  let div = document.createElement("div");
  div.style.width = paramsWidth;
  div.style.height = paramsHeight;
  div.style.backgroundColor = paramsColor;
  div.style.margin = paramsMargin;

  flexPlayground.appendChild(div);
}

function flexPropertiesChangerController() {
  let cssProperties = this.value;
  cssObject[`${this.firstElementChild.textContent.trim()}`] = cssProperties;

  for (let x in cssObject) {
    flexPlayground.style[x] = cssObject[x];
  }
}

function deleteDivController() {
  if (flexPlayground.childElementCount > 0) {
    flexPlayground.removeChild(flexPlayground.lastElementChild);
  } else {
    alert("silinecek div qalmayib");
  }
}