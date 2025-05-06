const checkBtn = document.getElementById("check-btn");
const input = document.getElementById("text-input");
const result = document.getElementById("result")
const userInput=document.getElementById("user-input")

checkBtn.addEventListener("click", function () {
  const inputValue = input.value.trim();

  if (inputValue === "") {
    alert("Please input a value.");
        userInput.textContent=""
    return;
  }

  if(isPalindrome(inputValue)){
    userInput.textContent=`${inputValue} is a palindrome`
    return;
  }

  userInput.textContent=`${inputValue} is not a palindrome`
  return;

});



function isPalindrome(input){
  input = input.toLowerCase().replace(/[_\- .,()\/\\]/g, '');
  
  if(isSingleChar(input)){
      return  true;
  }

  if (revereseString(input)==input){
    return true;
  }

    return false
}


function isSingleChar(letter) {
  if (letter.length === 1) {
      return true
  }
  return false;
}

function revereseString(input){
  let reversed="";
  for (let i=input.length-1 ; i>=0 ; i--){
  reversed +=input[i]
  }
  return reversed;
}
// console.log(isPalindrome(input));
