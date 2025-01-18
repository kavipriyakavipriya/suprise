
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// using event handler and arrow function
// yesBtn.addEventListener("click", () => {
//   question.innerHTML = "I love you too...ummmmaaaaaahhhhhhhhhh";
//   gif.src = "https://github.com/kavipriyakavipriya/suprise/blob/main/gifs/happy.gif";
// });

function yes(){
  document.querySelector('.question').innerHTML="I love you too...ummmmaaaaaahhhhhhhhhh";
  gif.src = "https://github.com/kavipriyakavipriya/suprise/blob/main/gifs/happy.gif";
};

function no(){
  
  document.querySelector('.question').innerHTML="unkuda Duuuuuuuuuuuu,na sogama irruka :(";
  gif.src = "https://github.com/kavipriyakavipriya/suprise/blob/main/gifs/sad.gif";

  const screen = document.querySelector(".screen");
  const screenSize = screen.getBoundingClientRect();
  const noBtnSize = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the screen/wrapper
  const maxX = screenSize.width - noBtnSize.width;
  const maxY = screenSize.height - noBtnSize.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
};
