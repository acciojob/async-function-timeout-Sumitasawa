
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function showMessage() {
  const text = document.getElementById("text").value;
  const delay = Number(document.getElementById("delay").value);

  await wait(delay); 
  document.getElementById("output").textContent = text;
}

document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault(); 
  showMessage();
});
