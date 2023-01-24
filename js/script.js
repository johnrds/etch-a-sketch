const gridPanel = document.querySelector('.gridPanel');

for(let i = 0; i < (16*16); i++){
    let grids = document.createElement('div');
    grids.classList = `grid ${i}`;
    gridPanel.appendChild(grids);
};

const allGrids = document.querySelectorAll('.grid')
allGrids.forEach(grid => {
    grid.addEventListener('mouseover', ()=>{
        grid.classList.add('hover');
    });
});