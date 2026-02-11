const yesBtn = document.getElementById('yesBtn')
const noBtn = document.getElementById('noBtn')
const response = document.getElementById('response')
const qestions = document.getElementById('qestions')

// no button inital Size
let noScale = 1;

// Yes button 
let yesPadding = 12;
let yesFontSize = 16;

const questionTexts = [
  "Every single day'🌞. Will you be my Valentine💝?",
  "You’re the best🥳 part of my day 💕 Will you say yes?",
  "My heart smiles😀 when I think💭 of you… Be my Valentine?",
  "Life feels sweeter with you in it 💘 Say yes?",
  "Every moment with you feels like magic ✨ Will you be my Valentine?",
  "If happiness had a name, it would be yours 💕 Say yes?",
  "You’re not just my choice💓 you’re my happiness… be mine?",
]




let questionIndex = 0;
qestions.innerText = questionTexts[questionIndex];

function nextQes() {
  questionIndex++;
  if (questionIndex < questionTexts.length) {
    qestions.innerText = questionTexts[questionIndex];
  } else {
    qestions.innerText = "💖 You answered all questions 💖";  
    response.innerText = "Told you… it was always going to be YES 💕"
    // yesBtn.style.opacity = "0";  
    noBtn.style.opacity = "0";
    noBtn.style.pointerEvents = "none";
  }
}

noBtn.addEventListener("click", () => {
  noScale -= 0.1;

  noBtn.style.transform = `scale(${noScale})`;

  yesPadding += 3;
  yesFontSize += 2;

  yesBtn.style.fontSize = yesFontSize + "px";
  yesBtn.style.padding = `${yesPadding}px ${yesPadding * 2}px`;
  nextQes();

})

yesBtn.addEventListener("click", () => {
  nextQes();

})
