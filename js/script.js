const gridPanel = document.querySelector('.gridPanel');

function createGrid(n) {

    const prevGrids = document.querySelectorAll('.grid');
    prevGrids.forEach(grid => { grid.remove() });

    for (let i = 0; i < (n * n); i++) {
        let grid = document.createElement('div');
        grid.classList = `grid ${i + 1}`;
        grid.addEventListener('mouseover', () => {
            grid.classList.add('hover');
        });
        gridPanel.appendChild(grid);
    };
    gridPanel.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    gridPanel.style.gridTemplateRows = `repeat(${n}, 1fr)`;
};

const gridLabel = document.querySelector('#grid');
gridLabel.addEventListener('keypress', (e) => {
    if (e.key !== 'Enter'
        || isNaN(gridLabel.value)
        || gridLabel.value === '0'
        || gridLabel.value === ''
        || gridLabel.value > 50) return;

    createGrid(gridLabel.value);
    gridLabel.value = "";
});