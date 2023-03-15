/*
Реализуйте и экспортируйте по умолчанию функцию, которая строит дерево
относительно заданного корневого узла.
Функция принимает 2 аргумента:
  - исходное дерево
  - узел, от которого будет построено новое дерево.
Функция должна возвращать новое дерево с сохранёнными связями между узлами, в
котором переданный узел является корневым.

Пример:
const tree = ['A', [ //     A
  ['B', [            //    / \
    ['D'],           //   B   C
  ]],                //  /   / \
  ['C', [            // D   E   F
    ['E'],
    ['F'],
  ]],
]];

transform(tree, 'B');

// ['B', [           //   B
//   ['D'],          //  / \
//   ['A', [         // D   A
//     ['C', [       //      \
//       ['E'],      //       C
//       ['F'],      //      / \
//     ]],           //     E   F
//   ]],
// ]];
*/

const buildAdjacencyList = (node, parent = null) => {
  const [item, branches] = node;

  if (!branches) {
    return { [item]: [parent] };
  }

  const flattenBranches = branches.flat();
  const neighbours = [...flattenBranches, parent].filter(
    (neighbour) => neighbour && !Array.isArray(neighbour),
  );

  const adjacency = branches.reduce(
    (acc, branch) => ({ ...acc, ...buildAdjacencyList(branch, item) }),
    [],
  );

  return { [item]: neighbours, ...adjacency };
};

const buildTreeFromNode = (node, adjacencyList) => {
  const iter = (current, acc) => {
    const checked = [...acc, current];
    const neighbours = adjacencyList[current]
      .filter((neighbour) => !checked.includes(neighbour))
      .map((neighbour) => iter(neighbour, checked));

    if (neighbours.length === 0) {
      return [current];
    }
    return [current, neighbours];
  };

  return iter(node, []);
};

const transform = (tree, node) => {
  const adjacency = buildAdjacencyList(tree);
  return buildTreeFromNode(node, adjacency);
};

export default transform;
