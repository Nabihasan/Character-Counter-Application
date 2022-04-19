const charVal = document.getElementById("textarea");
let totalCount = document.getElementById("total-conter");
let remainingCoutn = document.getElementById("remaining-counter");

let userChar = 0;

// to update the character on screen
const updateCounter = () => {
  userChar = charVal.value.length;

  totalCount.innerText = userChar;

  remainingCoutn.innerText = 150 - userChar;
};

charVal.addEventListener("keyup", () => updateCounter());

// to copy the text
const copyText = () => {
  charVal.select();
  charVal.setSelectionRange(0, 99999);//mobile
  navigator.clipboard.writeText(charVal.value);//imp
};
