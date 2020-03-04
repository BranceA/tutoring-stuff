"use strict"

$("h1").click(function(){
    $(this).css("color", "blue");
});

$("body").keydown(function(event){
    event.preventDefault()
    switch (event.keyCode){
        case 66:
            $("h1").css("color", "blue");
            break;
        case 89:
            $("h1").css("color", "yellow");
            break;
        case 82:
            $("h1").css("color", "red");
            break;
    }
})
