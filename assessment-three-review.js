"use strict"

$("h1").click(function(){
    $(this).css("color", "blue");
});

//The prevent default in this function is stopping the text input from working

// $("body").keydown(function(event){
//     event.preventDefault()
//     switch (event.keyCode){
//         case 66:
//             $("h1").css("color", "blue");
//             break;
//         case 89:
//             $("h1").css("color", "yellow");
//             break;
//         case 82:
//             $("h1").css("color", "red");
//             break;
//     }
// })

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

$("#add-btn").click(function(event){
    event.preventDefault()

    var addThis = $("#input").val()
    $("#input").val("")
    $("#add-to-me").append("<li>" + addThis + "</li>")
})

function moveLis(){
    var moveThis = $(this).text()
    $(this).remove("li")
    $("#add-to-me").prepend("<li>" + moveThis + "</li>")
    $("#add-to-me").children().first().bind("click", moveLis)
}

$("li").click(moveLis)

setTimeout(function(){
    $("*").css("font-family", "Comic Sans MS")
}, 5000)

// setTimeout(function(){
//     console.log("test")
//     $("body").css("background-image", "url(https://images.pexels.com/photos/2740956/pexels-photo-2740956.jpeg?cs=srgb&dl=black-and-white-laptop-2740956.jpg&fm=jpg)")
// }, 10000)

$("#get-hype").click(function(){
    $("#thundercats").css("font-weight", "bold")
});

// var whatSpanWeOn = 1;

// $("#get-hype").click(function(){
//     $("#thundercats span:nth-child(" + whatSpanWeOn + ")") .css("font-weight", "bold");
//     whatSpanWeOn++;
// })