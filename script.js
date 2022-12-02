const container = document.querySelector('#container');
for (let i=1; i<=16; i++){
    const verticalGrid = document.createElement('div');
    verticalGrid.classList.add(`verticalGrid-${i}`); 
    container.appendChild(verticalGrid); 
    
for (let j=0; j<16; j++){
    let gridFoundations= document.querySelector(`.verticalGrid-${i}`);
    const horizontalGrid = document.createElement('div');
    horizontalGrid.classList.add('horizontalGrid');
    gridFoundations.appendChild(horizontalGrid);
}
}