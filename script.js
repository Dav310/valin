const yesBtn = document.getElementById('yesBtn')
const noBtn = document.getElementById('noBtn')
const response = document.getElementById('response')

// no button inital Size
let noScale = 1;

// Yes button 
let yesPadding = 12;
let yesFontSize = 16;

noBtn.addEventListener("click", () => {
  noScale -= 0.1;

  noBtn.style.transform = `scale(${noScale})`;

  yesPadding += 3;
  yesFontSize += 2;

  yesBtn.style.fontSize = yesFontSize + "px";
  yesBtn.style.padding = `${yesPadding}px ${yesPadding * 2}px`;

  if (noScale <= 0.3) {
    noBtn.style.opacity = "0";
    noBtn.style.pointerEvents = "none";
    yesBtn.style.pointerEvents = "none";
    response.innerText = "See? Only YES was meant to be 💕";
  }

})

yesBtn.addEventListener("click", () => {
  response.innerText = ("Yay! 💕 You made my day!")
  noBtn.style.opacity = "0";


})
