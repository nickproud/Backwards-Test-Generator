const reverseBtn = document.getElementById("reverseBtn");
const resetBtn = document.getElementById("resetBtn");
const pageBody = document.querySelector("body");
const outputHead = document.getElementById("outputHeader");

//Text reveral function
function reverseText() {
    let textInput = document.getElementById("inputBox").value;
    let inputArray = [];
    for (let i = 0; i < textInput.length; i++) {

        inputArray.push(textInput[i]);
    }
  
    console.log("Array before reversal will be " + inputArray);
    inputArray.reverse();
    console.log("Array after reversal will be " + inputArray);
    let result = "";

    for (let i = 0; i < inputArray.length; i++) {

        result = result + inputArray[i];
    };

    console.log("Reversed result is " + result);
    let outputDiv = document.getElementById("textareaDiv");
    let outputBox = document.createElement("textarea");
    let resetBtn = document.createElement("button");
    resetBtn.textContent = "Reset";
    resetBtn.id = "resetBtn";
    
    outputBox.id = "outputTextArea";
    outputBox.rows = "10";
    outputBox.cols = "100";
    outputBox.value = result;
    outputHead.style.display = "block";
    reverseBtn.style.display = "none";
    pageBody.appendChild(outputBox);
    pageBody.appendChild(resetBtn);
    resetBtn.addEventListener("click", resetPage);
  

   
    
};

function resetPage() {
    let pageBody = document.querySelector("body");
    let outputBox = document.getElementById("outputTextArea");
    pageBody.removeChild(outputBox);
    let resetButton = document.getElementById("resetBtn");
    pageBody.removeChild(resetButton);
    outputHead.style.display = "none";
    reverseBtn.style.display = "block";
    let inputbox = document.getElementById("inputBox");
    inputbox.value = "";
   
}



reverseBtn.addEventListener("click", reverseText);



