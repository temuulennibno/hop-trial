// haich chuluu daavuu

const player1 = "haich";
const player2 = "haich";

// hojson toglogchiig hevleh
// player1 wins

if (player1 === player2) {
  console.log("tie");
} else if (player1 === "haich") {
  if (player2 === "daavuu") {
    console.log("player1 wins");
  } else if (player2 === "chuluu") {
    console.log("player2 wins");
  }
}
