let sondgoiniilber = 0;
let tegshniilber = 0;

for (let i = 1; i <= 101; i++) {
  if (i % 2 === 0) {
    tegshniilber = tegshniilber + i;
  } else {
    sondgoiniilber = sondgoiniilber + i;
  }
}
console.log(`sondgoi toonii niilber ni ${sondgoiniilber}`);
console.log(`tegsh toonii niilber ni ${tegshniilber}`);
if (sondgoiniilber > tegshniilber) {
  console.log(`${sondgoiniilber}>${tegshniilber}`);
} else {
  console.log(`${sondgoiniilber}<${tegshniilber}`);
}
