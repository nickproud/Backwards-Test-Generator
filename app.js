const reverseBtn = document.getElementById("reverseBtn");
const resetBtn = document.getElementById("resetBtn");
const pageBody = document.querySelector("body");
const outputHead = document.getElementById("outputHeader");
const mainModal = document.getElementById("mainModal");
let textInput = document.getElementById("textInput").value;
let modalTitle = document.getElementsByClassName("modal-title").value;


function reverseText() {
    let result = "";
    let textInput = document.getElementById("textInput").value;

    let inputArray = [];
    for (let i = 0; i < textInput.length; i++) {

        inputArray.push(textInput[i]);
        console.log(inputArray);
    }

    console.log("Array before reversal will be " + inputArray);
    inputArray.reverse();

    console.log("Array after reversal will be " + inputArray);
    

    for (let i = 0; i < inputArray.length; i++) {

        result = result + inputArray[i];
    };

    









    if (textInput == "") {
        $(".modal-title").html("No text!:");
        $(".modal-body").html("Cannot insert blank value");
    }
    else {

        $(".modal-title").html("Reversed text:");
        $(".modal-body").html(result);
    }


}




$(reverseBtn).on("click", function () {
    reverseText();
   
});

$('.close').on('click', function () {
    $(".modal-body").html("");

});
    

        