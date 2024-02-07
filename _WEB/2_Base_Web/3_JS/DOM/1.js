const multipleBy = (x) => {
  return (y) => y * x;
};

const multipleByTwo = multipleBy(2);
const multipleByThree = multipleBy(3);
const multipleByFive = multipleBy(5);

const d1 = multipleByTwo(4); // 8
const d2 = multipleByThree(4); // 12
const d3 = multipleByFive(4); // 20

console.log(d1, d2, d3);
