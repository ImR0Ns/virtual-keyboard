function changeColors(key, clasa) {
    $(document).on('keydown',function(e) {
        if(e.which == key) {
            $("." + clasa).css("color", "white");
            $("." + clasa).css("background-color", "green");
        }
    });
    $(document).on('keyup',function(e) {
        if(e.which == key) {
            $("." + clasa).css("color", "#8ee4af");
            $("." + clasa).css("background-color", "white");
        }
    });
}
$(document).ready(function(){
    //first row
    changeColors(81, "q");
    changeColors(87, "w");
    changeColors(69, "e");
    changeColors(82, "r");
    changeColors(84, "t");
    changeColors(89, "y");
    changeColors(85, "u");
    changeColors(73, "i");
    changeColors(79, "o");
    changeColors(80, "p");

    //second row
    changeColors(65, "a");
    changeColors(83, "s");
    changeColors(68, "d");
    changeColors(70, "f");
    changeColors(71, "g");
    changeColors(72, "h");
    changeColors(74, "j");
    changeColors(75, "k");
    changeColors(76, "l");

    //last row
    changeColors(90, "z");
    changeColors(88, "x");
    changeColors(67, "c");
    changeColors(86, "v");
    changeColors(66, "b");
    changeColors(78, "n");
    changeColors(77, "m");

    //space
    changeColors(32, "space");
  
})