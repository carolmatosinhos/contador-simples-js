document.getElementById("sub").addEventListener("click", subtraction)
document.getElementById("add").addEventListener("click", addition)


function subtraction() {
  let value = document.getElementById("cont").innerText
  value = parseInt(value) - 1
  document.getElementById("cont").innerText = value
}

function addition() {
  let value = document.getElementById("cont").innerText
  value = parseInt(value) + 1
  document.getElementById("cont").innerText = value
}