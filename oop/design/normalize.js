/* 
Реализуйте и экспортируйте по умолчанию функцию normalize() которая принимает
на вход список городов и стран, нормализует их имена, сортирует города и
группирует их по стране.

Примеры:
const countries = [
  { name: 'Miami', country: 'usa' },
  { name: 'samarA', country: '  ruSsiA' },
  { name: 'Moscow ', country: ' Russia' },
];

normalize(countries);
// {
//   russia: [
//     'moscow',
//     'samara',
//   ],
//   usa: [
//     'miami',
//   ],
// }
*/

const normalizeText = (word) => word.trim().toLowerCase();

const normalize = (countries) => {
  const normalizedNames = countries.reduce((acc, { name, country }) => {
    const normalizedName = normalizeText(name);
    const normalizedCountry = normalizeText(country);

    if (!Object.hasOwn(acc, normalizedCountry)) {
      acc[normalizedCountry] = [];
    }

    if (!acc[normalizedCountry].includes(normalizedName)) {
      acc[normalizedCountry].push(normalizedName);
      acc[normalizedCountry].sort();
    }

    return acc;
  }, {});

  const normalizedCountries = Object.fromEntries(
    Object.entries(normalizedNames).sort(),
  );

  return normalizedCountries;
};

/*

export default (data) => data
  .map(({ name, country }) => ({ city: name.toLowerCase(), country: country.toLowerCase() }))
  .map(({ city, country }) => ({ city: city.trim(), country: country.trim() }))
  .map(({ city, country }) => [country, city])
  .sort() // sort countries and cities
  .reduce((acc, [country, city]) => {
    const citiesAcc = acc[country] ?? [];
    const cities = citiesAcc.concat(city);
    const uniqueCities = new Set(cities);
    return { ...acc, [country]: [...uniqueCities] };
  }, {});

*/
