/*
Реализуйте и экспортируйте по умолчанию функцию, которая принимает двумерный массив (матрицу) и
возвращает новый массив, основанный на переданном и измененный таким образом, что правая половина
матрицы становится зеркальной копией левой половины, симметричной относительно вертикальной оси
матрицы. Для простоты условимся, что матрица всегда имеет чётное количество столбцов и количество
столбцов всегда равно количеству строк.
*/

const getMirrorMatrix = (arr) => {
  const generateMirrorLine = (line) => {
    const size = line.length;
    const separator = size / 2;

    const mirrorLine = [];
    let pointer = size - separator - 1;
    for (let i = 0; i < size; i += 1) {
      if (i < separator) {
        mirrorLine.push(line[i]);
      } else {
        mirrorLine.push(line[pointer]);
        pointer -= 1;
      }
    }
    return mirrorLine;
  };

  const mirrorMatrix = [];
  for (let i = 0; i < arr.length; i += 1) {
    const mirrorLine = generateMirrorLine(arr[[i]]);
    mirrorMatrix.push(mirrorLine);
  }
  return mirrorMatrix;
};

export default getMirrorMatrix;

/*

const getMirrorArray = (array) => {
  const size = array.length;
  const mirrored = [];

  for (let i = 0; i < size / 2; i += 1) {
    mirrored[i] = array[i];
    mirrored[size - i - 1] = array[i];
  }

  return mirrored;
};

const getMirrorMatrix = (matrix) => {
  const mirroredMatrix = [];

  for (const row of matrix) {
    const mirroredRow = getMirrorArray(row);
    mirroredMatrix.push(mirroredRow);
  }

  return mirroredMatrix;
};

export default getMirrorMatrix;

*/
