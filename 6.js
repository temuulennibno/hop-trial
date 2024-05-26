// 6.Check if a password is strong (strong password is at least 8 characters long) .
// Нууц үгийг хүчтэй үгүйг шалгаад хүчтэй бол "strong",
// сул бол "weak" гэж хэвлэнэ үү. Багадаа 8 тэмдэгт агуулвал хүчтэй гэж тооцно .

const password = "qwerty123456";
console.log(password.length);

if (password.length >= 8) {
  console.log("strong");
} else {
  console.log("weak");
}
