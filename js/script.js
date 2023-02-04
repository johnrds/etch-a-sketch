const gridPanel = document.querySelector('.gridPanel');
function createGrid(n) {
    const prevGrids = document.querySelectorAll('.grid');
    prevGrids.forEach(grid => { grid.remove() });

    for (let i = 0; i < (n * n); i++) {
        let grid = document.createElement('div');
        grid.classList = `grid ${i + 1} background`;
        grid.style.border = '1px solid hsl(0, 0%, 90%)';
        grid.style.backgroundColor = bgClr;
        grid.addEventListener('mouseover', () => {
            grid.classList.remove('background');
            grid.style.backgroundColor = currentClr;
        });
        gridPanel.appendChild(grid);
    };
    gridPanel.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    gridPanel.style.gridTemplateRows = `repeat(${n}, 1fr)`;
};


const gridRange = document.querySelector('#gridRange');
const gridLabel = document.querySelector('.rangeValue');
gridRange.addEventListener('change', (e) => {
    resetValues();
    createGrid(e.target.value);
});

gridRange.addEventListener('mousemove', (e) => {
    gridLabel.textContent = `${e.target.value} x ${e.target.value}`
})

let currentClr = '#000000'
const brushClrPicker = document.querySelector('#brColor');
brushClrPicker.addEventListener('change', (e) => {
    currentClr = e.target.value;
});

let bgClr = '#FFFFFF'
const bgClrPicker = document.querySelector('#bgColor');
bgClrPicker.addEventListener('change', (e) => {
    bgClr = e.target.value;
    const prevGrids = document.querySelectorAll('.grid.background');
    prevGrids.forEach(grid => { grid.style.backgroundColor = bgClr });
});

const borderBtn = document.querySelector('.gridBorder');
borderBtn.addEventListener('click', () => {
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
        if (grid.style.border === '') {
            grid.style.border = '1px solid hsl(0, 0%, 90%)';
        } else { grid.style.border = '' };
    });
});

const resetBtn = document.querySelector('.resetBtn');
resetBtn.addEventListener('click', () => {
    resetValues();
    createGrid(Math.sqrt(gridPanel.lastChild.classList[1]));
});

function resetValues() {
    currentClr = '#000000';
    brushClrPicker.value = '#000000';
    bgClr = '#FFFFFF';
    bgClrPicker.value = '#FFFFFF';
};

createGrid(16);