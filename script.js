function deleteChild() {
  var e = document.querySelector("#container");
  var first = e.firstElementChild;
  while (first) {
      first.remove();
      first = e.firstElementChild;
  }
}

const webPage = document.querySelector('body');
  const page = document.createElement('div');
  page.classList.add('page');
  webPage.appendChild(page);

const headerBody = document.querySelector('.page');
  const header = document.createElement("header");
  headerBody.appendChild(header);

const headerText = document.querySelector('header');
  const firstHeader = document.createElement("h1");
  firstHeader.textContent = "Etch-a-Sketch";
  headerText.appendChild(firstHeader);


const addMain = document.querySelector('.page');
  const mainDiv = document.createElement('div');
  mainDiv.setAttribute('id','main');
  addMain.appendChild(mainDiv);

const main = document.querySelector('#main');
  const mainContainer = document.createElement('div');
  mainContainer.setAttribute('id','container');
  main.appendChild(mainContainer);


var container = document.querySelector('#container');
  for (let i=1; i<=16; i++){
    const verticalGrid = document.createElement('div');
    verticalGrid.setAttribute('id',`verticalGrid-${i}`); 
    verticalGrid.classList.add('verticalGrid');
    container.appendChild(verticalGrid); 
    
for (let j=0; j<16; j++){
    let gridFoundations= document.querySelector(`#verticalGrid-${i}`);
    const horizontalGrid = document.createElement('div');
    horizontalGrid.classList.add('horizontalGrid');
    gridFoundations.appendChild(horizontalGrid);
}
}  


const body = document.querySelector('#main');
  const rangeSlider = document.createElement('input');
  rangeSlider.setAttribute('id',`myRange`);
  rangeSlider.classList.add('slider'); 
  rangeSlider.setAttribute(`max`,`64`);
  rangeSlider.setAttribute(`min`,`8`);
  rangeSlider.setAttribute(`value`,`16`);
  rangeSlider.setAttribute(`type`,`range`);
  body.appendChild(rangeSlider);

const bottomBar = document.querySelector("#main");
  const valueDisplay = document.createElement("div");
  valueDisplay.setAttribute("id","bottomBar");
  bottomBar.appendChild(valueDisplay);

const valueContainer=document.querySelector("#bottomBar");
  const value = document.createElement('p');
  value.setAttribute('id','text');
  value.textContent = "Value: ";
  valueContainer.appendChild(value);

const thatValue = document.querySelector('#text');
  const span = document.createElement('span');
  span.setAttribute('id','numeralValue');
  thatValue.append(span)

const color = document.querySelector('#bottomBar');
  const colorChanger = document.createElement('input');
  colorChanger.setAttribute('type','color');
  colorChanger.setAttribute('id','colorChange')
  color.appendChild(colorChanger);


var slider = document.getElementById("myRange");
  var output = document.getElementById("numeralValue");
  output.innerHTML = slider.value;
  slider.oninput = function() {
    output.innerHTML = this.value;
    }
var colorChange;
var defaultColor = "#0000ff";

slider.onchange = function() {
  deleteChild()
  var sizeofGrid = parseInt(document.getElementById("numeralValue").innerHTML);
  for (let i=1; i<=sizeofGrid; i++){
    const verticalGrid = document.createElement('div');
    verticalGrid.setAttribute('id',`verticalGrid-${i}`); 
    verticalGrid.classList.add('verticalGrid');
    container.appendChild(verticalGrid); 
    
for (let j=0; j<sizeofGrid; j++){
    let gridFoundations= document.querySelector(`#verticalGrid-${i}`);
    const horizontalGrid = document.createElement('div');
    horizontalGrid.classList.add('horizontalGrid');
    gridFoundations.appendChild(horizontalGrid);
}
}
var paintBrush = document.querySelectorAll('.horizontalGrid');
paintBrush.forEach((div) => {
    div.addEventListener('mouseover', () => {
     div.style.backgroundColor =colorChange.value; 
  });
});
}
window.addEventListener("load", startup, false);
function startup() {
  colorChange = document.querySelector("#colorChange");
  colorChange.value = defaultColor;
  colorChange.select();

var paintBrush = document.querySelectorAll('.horizontalGrid');
paintBrush.forEach((div) => {
    div.addEventListener('mouseover', () => {
     div.style.backgroundColor =colorChange.value; 
  });
});
}
