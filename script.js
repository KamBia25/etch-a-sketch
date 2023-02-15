const container = document.querySelector('#container');
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

const paintBrush = document.querySelectorAll('.horizontalGrid');
paintBrush.forEach((div) => {
    div.addEventListener('mouseover', () => {
    div.classList.add('color'); 
  });
});

const body = document.querySelector('#container');
const rangeSlider = document.createElement('input');
rangeSlider.setAttribute('id',`myRange`);
rangeSlider.classList.add('slider'); 
rangeSlider.setAttribute(`max`,`64`);
rangeSlider.setAttribute(`min`,`8`);
rangeSlider.setAttribute(`value`,`16`);
rangeSlider.setAttribute(`type`,`range`);
body.appendChild(rangeSlider);

const value = document.createElement('p');
value.setAttribute('id','text');
value.textContent = "Value: ";
body.appendChild(value);

const thatValue = document.querySelector('#text');
const span = document.createElement('span')
span.setAttribute('id','numeralValue')
thatValue.appendChild(span)


