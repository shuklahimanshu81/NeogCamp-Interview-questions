var inputTxt = document.querySelector("#input-txt");
var outputDiv = document.querySelector("#output-div");
var submitBtn = document.querySelector("#submit-btn");

submitBtn.disabled = true;
inputTxt.addEventListener("keyup", changeHandler);

function changeHandler() {
  if (inputTxt.value.length > 10 && inputTxt.value.indexOf("@") > -1) {
    submitBtn.disabled = false;
    outputDiv.innerText = "Success";
  } else {
    submitBtn.disabled = true;
    outputDiv.innerText =
      "Password length should be greater than 10 and should contain @";
  }
}

// function passwordChecker(input) {
//   for (let i = 0; i < input.length; i++) {
//     if (input.charAt(i) === "@") {
//       return true;
//     }
//   }
//   return false;
// }
