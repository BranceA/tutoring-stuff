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

$(".runner").mouseenter(function(){
    $(this).css("margin-left", "auto")
})

var whereAreWe = "left"

$(".runner").mouseenter(function(){
    if(whereAreWe === "left"){
        $(this).css("margin-right", "0")
        $(this).css("margin-left", "auto")
        whereAreWe = "right"
    } else if (whereAreWe === "right"){
        $(this).css("margin-left", "0")
        $(this).css("margin-right", "auto")
        whereAreWe = "left"
    }
})