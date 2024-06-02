for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log("==============");
for (let i = 9; i >= 0; i--) {
  console.log(i);
}

const test = "pinecone";
let newTest = "";
for (let i = test.length - 1; i >= 0; i--) {
  newTest += test[i];
}
console.log(newTest);
