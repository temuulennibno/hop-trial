const number = 2;
const degree = 3;

// 2
// 2 * 2 * 2

let pow = number;

for (let i = 1; i < degree; i++) {
  pow = pow * number;
}

console.log(pow);
