for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
      var buttonInnerhtml = this.innerHTML;

      makeSound(buttonInnerhtml);
      buttonAnimation(buttonInnerhtml);
   
  });
}


//detectecing keyboard presses

document.addEventListener("keypress", function(event){

   makeSound(event.key); 
   buttonAnimation(event.key);
});


//function for key press 


function makeSound(key) {

   switch (key) {
      case "w":
         var crash = new Audio("sounds/nyk.mp3");
         crash.play();

         break;

      

      default: console.log(buttonInnerhtml);
         break;
   }
}

function buttonAnimation(currentkey){
   var activebutton = document.querySelector("." + currentkey);

   activebutton.classList.add("pressed");

   setTimeout(function(){
      activebutton.classList.remove("pressed");
   }, 100);
   }
