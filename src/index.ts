console.log('Project started!');

updateGrid(16, 16);
const updateGridButton = document.getElementById('updateGrid');

updateGridButton?.addEventListener('mousedown', function () {
  const columns = document.querySelectorAll('input');
  let columnsTempt = Number(columns[0]?.value);
  let rowTempt = Number(columns[1]?.value);
  console.log(columnsTempt);
  console.log(rowTempt);
  if (columnsTempt >= 100 || rowTempt >= 100) {
    alert('Please enter a number smaller than 100');
    console.error(`Process canceled: Input(columns) is >=100`);
    return;
  } else if (columnsTempt <= 0 || rowTempt <= 0) {
    alert('You need to have at least 1 column and 1 row');
    console.error(`Process canceled: Input(Rows) <= 0`);
    return;
  } else {
    updateGrid(columnsTempt, rowTempt);
  }
});

function updateGrid(columns: number, rows: number) {
  const mainGrid = document.querySelector('.bar-grid');

  if (mainGrid) {
    mainGrid.replaceChildren();

    const gridContainer = document.createElement('div');
    gridContainer.style.cssText = `display:grid; grid-template-columns: repeat(${columns}, 20px); grid-template-rows: repeat(${rows}, 20px); border: 1px solid black`;
    mainGrid.appendChild(gridContainer);
    for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
      for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
        const gridItem = document.createElement('div');
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
      console.log(`Successfully added ${columns * rows} HTML elements`);
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
