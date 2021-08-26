$(".dot-1").on("click",function(){
    
    // alert($(this).css("background-color"));
    
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
        $("html").css("--secondary-text", "hsl(221, 14%, 31%)");
        $("html").css("--white", "#fff");

        $(this).css("background-color", "var(--equal-key-background)");

        $(".dot-2").css("background-color", "rgba(0, 0, 0, 0)");
        $(".dot-3").css("background-color", "rgba(0, 0, 0, 0)");



    }
})
$(".dot-2").on("click",function(){
    
    // alert($(this).css("background-color"));
    
    if ($(this).css("background-color") == "rgba(0, 0, 0, 0)"){
        
        $(".dot-1").css("background-color", "rgba(0, 0, 0, 0)");
        $(".dot-3").css("background-color", "rgba(0, 0, 0, 0)");
        
        $(".calculator").css("color", "hsl(60, 10%, 19%)");
        
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
        
        $(this).css("background-color", "var(--equal-key-background)");
        
    }
})
$(".dot-3").on("click",function(){
    
    // alert($(this).css("background-color"));
    
    if ($(this).css("background-color") == "rgba(0, 0, 0, 0)"){

        $(".dot-1").css("background-color", "rgba(0, 0, 0, 0)");
        $(".dot-2").css("background-color", "rgba(0, 0, 0, 0)");

        $(".calculator").css("color", "hsl(60, 10%, 19%)");
        
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
        
        $(this).css("background-color", "var(--equal-key-background)");
    }
})


// Calculator

$(".calculator__screen").text(null);

$(".key").on("click",function(){
    var input = $(this).text();

    var text = $(".calculator__screen").text(); 
    
    
    var currentText = "" + text + input;
    

    if (input == "="){
        var result = math.evaluate(text);

        $(".calculator__screen").text(result);
    }
    else if (input == "reset"){
        $(".calculator__screen").text(null);
    }
    else if (input == "del"){
        $(".calculator__screen").text(text.slice(0,-1));
    }
    else {
        // if (input == "&times;"){
        //     input = "*"
        // }
    
        $(".calculator__screen").text(currentText);
    }

})
