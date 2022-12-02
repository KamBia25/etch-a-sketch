//horizontal grid
//vertical grid
const container = document.querySelector('#container');
for (i=0; i<16; i++){
    const vertical_grid = document.createElement('div');
    vertical_grid.classList.add('vertical_grid'); 
    container.appendChild(vertical_grid); 
}
const vertical_grid= document.querySelectorAll('.vertical_grid');
for (i=0; i<16; i++){
    const horizontal_grid = document.createElement('div');
    horizontal_grid.classList.add('horizontal_grid');
    vertical_grid.appendChild(horizontal_grid);
}