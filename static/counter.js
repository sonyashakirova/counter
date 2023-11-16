const value = document.getElementById("value");
const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");

minusBtn.addEventListener("click", () => {
  value.innerHTML = Number(value.innerHTML) - 1;
});

plusBtn.addEventListener("click", () => {
  value.innerHTML = Number(value.innerHTML) + 1;
});
