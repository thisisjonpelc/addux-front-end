console.log("SCRIPT LOADED");

var labels = document.querySelectorAll(".accordion__label");

for(var i = 0; i < labels.length; i++){
    labels[i].addEventListener("click", function(e){
        //console.log(e);

        var label = e.target;
        var checkbox = label.parentElement.children[0];
        
        var accordion = label.parentElement.parentElement;

        //console.log(accordion);

        if(!checkbox.checked){
            //console.log("Unchecking Box!");
            var checkboxes = accordion.querySelectorAll(".accordion__item input");
            //console.log(checkboxes);
            for(var j = 0; j < checkboxes.length; j++){
                if(checkboxes[j].id !== checkbox.id && checkboxes[j].checked){
                    console.log("Unchecking previous open box");
                    checkboxes[j].checked=false;
                }
            }
        }
        else{
            console.log("Unchecking box!");
        }


    });
}

var leftButton = document.querySelector("#scroll-left");
var rightButton = document.querySelector("#scroll-right");
//var mainContent = document.querySelector(".main-content");
var mainContent = $('.main-content');

leftButton.onclick = function(){
    console.log("SCROLL LEFT!");

    mainContent.animate({scrollLeft: mainContent.scrollLeft() - 250}, 500);
}

rightButton.onclick = function(){
    console.log("SCROLL RIGHT!");
    mainContent.animate({scrollLeft: mainContent.scrollLeft() + 250}, 500);
}

var appNavigation = document.querySelector(".app-nav");
var listButton = appNavigation.children[3];
var notesButton = appNavigation.children[2];
var adduxList = document.querySelector(".addux-list");
var notes = document.querySelector(".notes");

listButton.onclick = function(){
    console.log("CLICKED LIST BUTTON");
    adduxList.classList.toggle("addux-list--active");
}

notesButton.onclick = function(){
    console.log("CLICKED NOTES BUTTON");
    notes.classList.toggle("notes--active");
}

adduxList.children[0].onclick = function(){
    console.log("CLICKED CLOSE BUTTON");
    adduxList.classList.remove("addux-list--active");
}

notes.children[0].onclick = function() {
    console.log("CLICKED CLOSE BUTTON");
    notes.classList.remove("notes--active");
}