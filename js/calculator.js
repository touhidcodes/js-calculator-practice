function deleteMe() {
  document.getElementById("output-result").value = "";
}

function removeMe() {
  const output = document.getElementById("output-result");
  output.value = output.value.slice(0, -1);
}

function calculator(newValue) {
  document.getElementById("output-result").value += newValue;
}

function finalResult() {
  const a = document.getElementById("output-result").value;
  const b = eval(a);
  document.getElementById("output-result").value = b;
}
