// Theme changing algorithm

// On clicking the first dot
$(".dot-1").on("click",function(){
    
    // Condition that checks if the dot's background color is transparent
    if ($(this).css("background-color") == "rgba(0, 0, 0, 0)"){

        // Change theme
        $("html").css("--main-background", "hsl(222, 26%, 31%)");
        $("html").css("--keypad-background", "hsl(223, 31%, 20%)");
        $("html").css("--screen-background", "hsl(224, 36%, 15%)");
        $("html").css("--action-key-background", "hsl(225, 21%, 49%)");
        $("html").css("--action-key-shadow", "hsl(224, 28%, 35%)");
        $("html").css("--equal-key-background", "hsl(6, 63%, 50%)");
        $("html").css("--equal-key-shadow", "hsl(6, 70%, 34%)");
        $("html").css("--key-background", "hsl(30, 25%, 89%)");
        $("html").css("--key-shadow", "hsl(28, 16%, 65%)");

        $("html").css("--secondary-text", "hsl(221, 14%, 31%)");//  Change dot background color
        $("html").css("--white", "#fff");

        //  Change dot background color
        $(this).css("background-color", "var(--equal-key-background)");

        // Change other dots background color to transparent
        $(".dot-2").css("background-color", "rgba(0, 0, 0, 0)");
        $(".dot-3").css("background-color", "rgba(0, 0, 0, 0)");
    }
})

// On clicking the second dot
$(".dot-2").on("click",function(){
    
    if ($(this).css("background-color") == "rgba(0, 0, 0, 0)"){
        
        // Change theme
        $("html").css("--main-background", "hsl(0, 0%, 90%)");
        $("html").css("--keypad-background", "hsl(0, 5%, 81%)");
        $("html").css("--screen-background", "hsl(0, 0%, 93%)");
        $("html").css("--action-key-background", "hsl(185, 42%, 37%)");
        $("html").css("--action-key-shadow", "hsl(185, 58%, 25%)");
        $("html").css("--equal-key-background", "hsl(25, 98%, 40%)");
        $("html").css("--equal-key-shadow", "hsl(25, 99%, 27%)");
        $("html").css("--key-background", "hsl(45, 7%, 89%)");
        $("html").css("--key-shadow", "hsl(35, 11%, 61%)");
        $("html").css("--secondary-text", "hsl(60, 10%, 19%)");
        $("html").css("--white", "hsl(60, 10%, 19%)");

        //  Change dot background color
        $(this).css("background-color", "var(--equal-key-background)");

        // Change other dots background color to transparent
        $(".dot-1").css("background-color", "rgba(0, 0, 0, 0)");
        $(".dot-3").css("background-color", "rgba(0, 0, 0, 0)");
        
    }
})

// On clicking the second dot
$(".dot-3").on("click",function(){
    
    if ($(this).css("background-color") == "rgba(0, 0, 0, 0)"){

        // Change theme
        $("html").css("--main-background", "hsl(268, 75%, 9%)");
        $("html").css("--keypad-background", "hsl(268, 71%, 12%)");
        $("html").css("--screen-background", "hsl(268, 71%, 12%)");
        $("html").css("--action-key-background", "hsl(281, 89%, 26%)");
        $("html").css("--action-key-shadow", "hsl(285, 91%, 52%)");
        $("html").css("--equal-key-background", "hsl(176, 100%, 44%)");
        $("html").css("--equal-key-shadow", "hsl(177, 92%, 70%)");
        $("html").css("--key-background", "hsl(268, 47%, 21%)");
        $("html").css("--key-shadow", "hsl(290, 70%, 36%)");
        $("html").css("--secondary-text", "hsl(52, 100%, 62%)");
        $("html").css("--white", "hsl(52, 100%, 62%)");

        //  Change dot background color
        $(this).css("background-color", "var(--equal-key-background)");

        // Change other dots background color to transparent
        $(".dot-1").css("background-color", "rgba(0, 0, 0, 0)");
        $(".dot-2").css("background-color", "rgba(0, 0, 0, 0)");
    }
})


// Calculator algorithm

// Create an array for operations
const operations = ["+", "-", "/", "*"];

// An array of values that can't be the first input
const notAllowedFirst = ["*", "/",".","del","=","reset"];

// An array for numbers
const numbers = ["1","2","3","4","5","6","7","8","9"];

// Set to screen text to null
$(".calculator__screen").text(null);

// A boolean that keeps track of the validility of inputting a decimal
var decimalAllowed = true;

// A boolean to keep control of input raceived after result has been given
var answerMode;


// On clicking a key
$(".key").on("click",function(){

    // Variable to store the current input from the user
    var input = $(this).text();

    // Variable to store the current screen text
    var text = $(".calculator__screen").text();

    // Previous input to help with regulating use of operations e.g + - / *
    var prevInput = text[text.length-1];

    // This is the updated text plus the input the user gave
    var currentText = "" + text + input;

    // A boolean to regulate if an input is allowed or Not
    var isInputAllowed;

    
    // A condition that checks if the first value inputed is not allowed
    if (text.length == 0 && notAllowedFirst.includes(input)){
        isInputAllowed = false;
    }
    // A condition that checks if the first value inputed is allowed
    else if (text.length == 0 && notAllowedFirst.includes(input)== false){
        answerMode = false;
        isInputAllowed = true;
    }
    // A condition that checks if the input is a decimal
    else if (input == "."){
        // A condition that checks if the previous input was an operation
        if (operations.includes(prevInput)) {
            isInputAllowed = false;
        }
        // A condition that checks if the previous input was equal sign
        else if (answerMode === true){
            isInputAllowed = false;
        }
        // A condition that checks if decimal is allowed
        else if (decimalAllowed == true){
            isInputAllowed = true;
            decimalAllowed = false;
        } else {
            isInputAllowed = false;
        }
    }

    // A condition to check if last input was an equal sign so as to restrict a number being the next input
    else if (numbers.includes(input) && operations.includes(prevInput) == false){
        if (answerMode === false){
            isInputAllowed = true;
        }
        else if (operations.includes(input)){
            answerMode = false;
        }
        else {
            $(".calculator__screen").text(input);
            answerMode = false;
        }
    }

    // A condition that check if the user wants to delete the last input or more
    else if (input == "del" ){
        // A condition that checks if the input to be deleted is a decimal , if so change the status of decimalAllowed
        if(prevInput == "."){
            decimalAllowed = true;
        } 
        // A condition that checks if the input to be deleted is an operation , if so change the status of decimalAllowed
        else if (operations.includes(prevInput)){
            decimalAllowed = false;
        }

        $(".calculator__screen").text(text.slice(0,-1));
    }

    // A condition to check if the user wants to reset the calculator
    else if (input == "reset" ){
        $(".calculator__screen").text(null);

        // Change the status of decimalAllowed to true
        decimalAllowed = true;
    }

    // A condition to check if the user wants to get the result
    else if (input == "=" ){
        // Variable to store the result of the calculation
        var result = math.evaluate(text);

        answerMode = true;
        // Update the result
        $(".calculator__screen").text(+result.toFixed(7));
    }

    // A condition to check if the previous value and current user input is an operation
    else if(operations.includes(input) && operations.includes(prevInput)){
        // Check if the new operation is the same , if so the operation replaces the previous one 
        if (input === prevInput){
            isInputAllowed = false;
        }
        else {
            currentText = "" + text.slice(0,-1) + input;
            isInputAllowed = true;
        }
    }
    else {
        isInputAllowed = true;
    }

    // A condition that checks if an input is allowed
    if (isInputAllowed){
        $(".calculator__screen").text(currentText);

        // A condition that checks if the input was a valid input of an operation, if so change the status of decimalAllowed
        if (operations.includes(prevInput)){
            answerMode = false;
            decimalAllowed = true;
        }
    }



})