let result = "";

for (let i = 0; i < 10; i++) {
  let rowResult = "";
  for (let j = 0; j < i + 1; j++) {
    rowResult += "* ";
  }
  result += `${rowResult}\n`;
}

console.log(result);

// rowResult = "";
// rowResult = "* * * * * * * * * * ";

// result = ""
// result = "* * * * * * * * * * \n* * * * * * * * * * \n"
