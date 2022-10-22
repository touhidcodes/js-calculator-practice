function deleteMe() {
  document.getElementById("show-result").value = "";
}

function removeMe() {
  const output = document.getElementById("show-result");
  output.value = output.value.slice(0, -1);
}

function calculator(newValue) {
  document.getElementById("show-result").value += newValue;
}
