function calc(op) {
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  if (isNaN(a) || isNaN(b)) return;

  let res = 0;
  if (op === "+") res = a + b;
  else if (op === "-") res = a - b;
  else if (op === "*") res = a * b;
  else if (op === "/") res = b !== 0 ? a / b : "Ошибка";

  if (typeof res === "number") res = res.toFixed(2);
  document.getElementById("result").textContent = res;
}

function showSqrt() {
  let box = document.getElementById("result");
  let value = parseFloat(box.textContent);
  if (!isNaN(value)) {
    box.textContent = Math.sqrt(value).toFixed(2);
  }
}