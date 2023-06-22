function fillArray() {
  let rows;
  while (true) {
    rows = parseInt(prompt("Введіть кількість рядків: "));
    if (isNaN(rows) || rows <= 0) {
      alert("Кількість рядків повинна бути більше 0.");
      continue;
    }
    break;
  }
  let arr = [];
  for (let i = 0; i < rows; i++) {
    let row = [];
    let columns;
    while (true) {
      columns = parseInt(prompt(`Введіть кількість стовпців для рядка ${i + 1}: `));
      if (isNaN(columns) || columns <= 0) {
        alert("Кількість стовпців повинна бути більше 0.");
        continue;
      }
      break;
    }
    for (let j = 0; j < columns; j++) {
      let value;
      while (true) {
        value = prompt(`Введіть значення для елемента [${i}][${j}]: `);
        if (isNaN(value)) {
          alert("Введіть числове значення.");
          continue;
        }
        if (value = null) {
          break;
        }
        break;
      }
      row.push(parseFloat(value));
    }
    arr.push(row);
  }
  return arr;
}

const myArray = fillArray();
console.log(myArray);
