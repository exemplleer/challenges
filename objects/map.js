/* 
Реализуйте и экспортируйте набор функций, для работы со словарём, построенным
на хеш-таблице. Для простоты, наша реализация не поддерживает разрешение
коллизий.
По сути в этом задании надо реализовать объекты. По понятным причинам
использовать объекты для создания объектов нельзя. Представьте что в языке
объектов нет и мы их хотим добавить.
- make() — создаёт новый пустой словарь и возвращает его
- set(map, key, value) — устанавливает в словарь значение по ключу. Работает и для создания и для изменения. Функция возвращает true, если удалось установить значение. При возникновении коллизии, функция никак не меняет словарь и возвращает false
- get(map, key, defaultValue = null) — возвращает значение указанного ключа. Параметр defaultValue — значение, которое функция возвращает, если в словаре нет ключа (по умолчанию равно null). При возникновении коллизии функция также возвращает значение по умолчанию
Функции set() и get() принимают первым параметром словарь. Передача идёт по
ссылке, поэтому set() может изменить его напрямую.

Примеры:
import { make, set, get } from './map.js';

const map = make();
let result = get(map, 'key');
console.log(result); // => null

result = get(map, 'key', 'default_value');
console.log(result); // => "default_value"

set(map, 'key2', 'value2');
result = get(map, 'key2');
console.log(result); // => "value2"
*/

import crc32 from 'crc-32';

const genHash = (key) => crc32.str(key);

const hasCollision = (map, key) => {
  const hash = genHash(key);
  const [currentKey] = map[hash];
  return currentKey !== key;
};

const make = () => [];

const set = (map, key, value) => {
  const hash = genHash(key);

  if (map[hash] && hasCollision(map, key)) {
    return false;
  }

  map[hash] = [key, value];

  return true;
};

const get = (map, key, defaultValue = null) => {
  const hash = genHash(key);

  if (!map[hash] || hasCollision(map, key)) {
    return defaultValue;
  }

  const [, value] = map[hash];

  return value;
};

export { make, set, get };
