/*
Реализуйте и экспортируйте по умолчанию функцию, которая выстраивает маршрут между городами.
Функция принимает 3 аргумента:
  - дерево городов
  - город старта
  - город окончания маршрута
и возвращает массив городов, выстроенный в том же порядке, в котором они находятся на пути
следования по маршруту.
*/

/* <--- tree of cities ---> */
const cities = [
  'Moscow',
  [
    ['Smolensk'],
    ['Yaroslavl'],
    [
      'Voronezh',
      [
        ['Liski'],
        ['Boguchar'],
        ['Kursk', [['Belgorod', [['Borisovka']]], ['Kurchatov']]],
      ],
    ],
    ['Ivanovo', [['Kostroma'], ['Kineshma']]],
    ['Vladimir'],
    ['Tver', [['Klin'], ['Dubna'], ['Rzhev']]],
  ],
];
/* <----------------------> */

import _ from 'lodash';

const buildPath = (tree, expected) => {
  const iter = (node, path = []) => {
    const [item, branches] = node;
    const currentPath = [...path, item];
    if (item === expected) {
      return currentPath;
    }
    if (!branches) {
      return [];
    }
    return branches.map((branch) => iter(branch, currentPath)).flat();
  };
  return iter(tree);
};

const itinerary = (tree, start, end) => {
  // building path from the root element
  const startPath = buildPath(tree, start);
  const endPath = buildPath(tree, end);

  // find the common intersections of the route
  const interCities = _.intersection(startPath, endPath);
  // find a nearest common city in the route, through which the path will pass
  const nearestCity = _.last(interCities);

  // create arrays of unique routes
  const startPathRoutes = _.without(startPath, ...endPath);
  const endPathRoutes = _.without(endPath, ...startPath);

  // merge the routes of the cities with the nearest city
  // the routes of the first city must be reversed
  return [...startPathRoutes.reverse(), nearestCity, ...endPathRoutes];
};

export default itinerary;



/*
const makeJoints = (tree, parent) => {
  const [leaf, children] = tree;

  if (!children) {
    return { [leaf]: [parent] };
  }

  const flatChildren = _.flatten(children);
  const neighbors = [...flatChildren, parent]
    .filter((neighbor) => neighbor && !_.isArray(neighbor));
  const joints = children
    .reduce((acc, child) => ({ ...acc, ...makeJoints(child, leaf) }), {});

  return { [leaf]: neighbors, ...joints };
};

const findRoute = (start, finish, joints) => {
  const iter = (current, route) => {
    const routeToCurrent = [...route, current];

    if (current === finish) {
      return routeToCurrent;
    }

    const neighbors = joints[current];
    const filtered = neighbors
      .filter((neighbor) => !routeToCurrent.includes(neighbor));

    return filtered
      .reduce((acc, neighbor) => _.concat(acc, iter(neighbor, routeToCurrent)), []);
  };

  return iter(start, []);
};

export default (tree, start, finish) => {
  const joints = makeJoints(tree);
  return findRoute(start, finish, joints);
};
*/
