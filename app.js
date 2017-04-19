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
    outputBox.id = "outputTextArea";
    outputBox.rows = "20";
    outputBox.cols = "100";
    outputBox.value = result;
    outputDiv.appendChild(outputBox);
};
//target the 'reverse button and execute reversal function when clicked
let reverseBtn = document.getElementById("reverseBtn");
reverseBtn.addEventListener("click", reverseText);
