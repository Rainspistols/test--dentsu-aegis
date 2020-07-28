// [1,2,3,4,5,6,7,8,9]
// Napisz funkcję, która usuwa ze wskazanej tablicy parzyste numery

const filterEven = (arr) => arr.filter((item) => item % 2 === 0);

console.log('TASK3', filterEven([1, 2, 3, 4, 5, 6, 7, 8, 9]));
