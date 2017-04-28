const reverseBtn = document.getElementById("reverseBtn");
const resetBtn = document.getElementById("resetBtn");
const pageBody = document.querySelector("body");
const outputHead = document.getElementById("outputHeader");


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


        if (textInput == "") {
            alert("cannot insert a blank value");
        }
        else {
            console.log("Reversed result is " + result);
            let outputDiv = document.getElementById("textareaDiv");
            let outputHead = document.createElement("h2");
            let outputBox = document.createElement("textarea");
            let resetBtn = document.createElement("button");
            resetBtn.textContent = "Reset";
            resetBtn.id = "resetBtn";

            outputHead.id = "outputHead";
            outputHead.textContent = "Your reversed text:";
            outputBox.id = "outputTextArea";
            outputBox.rows = "10";
            outputBox.cols = "100";
            outputBox.value = result;
            outputHead.style.display = "block";
            reverseBtn.style.display = "none";

            pageBody.appendChild(outputHead);
            pageBody.appendChild(outputBox);
            pageBody.appendChild(resetBtn);
           
            $('#resetBtn').click(resetPage);
        }

};

function resetPage() {
    let pageBody = document.querySelector("body");
    let outputBox = document.getElementById("outputTextArea");
    let outputHead = document.getElementById("outputHead");
    pageBody.removeChild(outputBox);
    let resetButton = document.getElementById("resetBtn");
    pageBody.removeChild(resetButton);
    outputHead.style.display = "none";
    
    reverseBtn.style.display = "block";
    let inputbox = document.getElementById("inputBox");
    inputbox.value = "";
   
}

$('#reverseBtn').click(reverseText);



