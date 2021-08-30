var obj = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9
}
var str = "";
function add(id) {
    $("." + id).on("click", function(){
        if(id === "apply"){
            if(str.length === 4){
                str = "";
                $(".pin-key").text("Pin code accepted!");
            } else {
                str = "";
                $(".pin-key").text("You need 4 numbers to validate");
            }
        }else if(id === "deleteall") {
            str = "";
            $(".pin-key").text("You deleted everything");
        }else if(id === "deleteone"){
            str = str.substring(0, str.length - 1);
            $(".pin-key").text(str);
        }else if(str.length < 4){ // max length of pin
            str += obj[id];
            $(".pin-key").text(str);
        } else { alert("Max 4 numbers!"); }
    })
}
$(document).ready(function(){
    add("one");
    add("two");
    add("three");
    add("four");
    add("five");
    add("six");
    add("seven");
    add("eight");
    add("nine");
    add("deleteall");
    add("deleteone");
    add("apply");
})
