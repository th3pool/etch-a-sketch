console.log('Project started!');

let gridColumns = 16;
let gridRows = 16;
updateGrid();

const updateGridButton = document.getElementById('updateGrid');

updateGridButton?.addEventListener('mousedown', function () {
  const columns = document.querySelectorAll('input');
  let columnsTempt = Number(columns[0]?.value);
  let rowTempt = Number(columns[1]?.value);
  console.log(columnsTempt);
  console.log(rowTempt);
  if (columnsTempt >= 100 || rowTempt >= 100) {
    alert('Please enter a number smaller than 100');
  } else {
    gridColumns = columnsTempt;
    gridRows = rowTempt;
    updateGrid();
  }
});

function updateGrid() {
  const mainGrid = document.querySelector('.bar-grid');

  if (mainGrid) {
    mainGrid.replaceChildren();

    const gridContainer = document.createElement('div');
    gridContainer.style.cssText = `display:grid; grid-template-columns: repeat(${gridColumns}, 20px); grid-template-rows: repeat(${gridRows}, 20px); border: 1px solid black`;
    mainGrid.appendChild(gridContainer);

    // Create all the grids elements
    for (let columnIndex = 0; columnIndex < gridColumns; columnIndex++) {
      for (let rowIndex = 0; rowIndex < gridRows; rowIndex++) {
        console.log('adding columns');
        const gridItem = document.createElement('div');
        // gridItem.textContent = `${columnIndex}-${rowIndex}`;
        gridItem.style.cssText = `background-color: #ddd;
                                  border: 0.1px;
                                  margin: 1px;
                                  transition: 0.4s;
                                }`;
        gridItem.addEventListener('mouseover', function (e) {
          if (e.shiftKey) {
            gridItem.style.backgroundColor = 'red';
          }
        });
        gridItem.addEventListener('mouseover', function (e) {
          if (e.altKey) {
            gridItem.style.backgroundColor = random_rgba();
          }
        });
        gridContainer.appendChild(gridItem);
      }
    }
  }
}
function random_rgba() {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return (
    'rgba(' +
    o(r() * s) +
    ',' +
    o(r() * s) +
    ',' +
    o(r() * s) +
    ',' +
    r().toFixed(1) +
    ')'
  );
}
