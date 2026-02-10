const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

function swapToYes(e) {
  e.preventDefault();
  noBtn.innerText = "Yes 💘";
  noBtn.classList.remove("maybe");
  noBtn.classList.add("yes");

}

// Touch start 
noBtn.addEventListener("touchstart", swapToYes);
// Onclick
noBtn.addEventListener("click", swapToYes);

// On Hover
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 300 - 100;
  const y = Math.random() * 300 - 100;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});


yesBtn.addEventListener("click", () => {
  response.innerText = "Yay! 💕 You made my day!";
})
