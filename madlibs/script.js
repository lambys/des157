// JavaScript Document
console.log('reading');

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    //capture the submit event
    document.f.onsubmit = processForm;
    document.f.onreset = clearForm;

    //define process function
    function processForm() {

        //putting the blanks into variables to be pulled up later
        var number = document.f.number.value;
        var favColor = document.f.favColor.value;
        var adj = document.f.adj.value;
        var plun = document.f.plun.value;
        var favDrink = document.f.favDrink.value;
        var veg = document.f.veg.value;
        var elem = document.f.elem.value;
        var myMsg = document.getElementById('myMsg');

        var pic = document.getElementById('pic');


            //print out into message
            myMsg.innerHTML = "far off into deep space, over " + number + " lightyears away, " +
            "a previously unknown " + favColor + " planet was discovered inhabited by " +adj+
            " " + plun + "!!" + " its oceans seem to be composed of sweet " +" "+ favDrink +
            " and its foliage appears to resemble that of " + veg + " on planet earth. " +
            "but, beware, its atmosphere is composed of " + elem +
            " which is a dangerous environment for humans!!"

            ;
            myMsg.className = "show";
            pic.className = "show";


        return false;

    }

    //clear form
    function clearForm() {
        myMsg.className = "hide";
        pic.className = "hide";
    }



});
