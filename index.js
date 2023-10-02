var no = document.querySelectorAll(".drum").length;

for ( var i = 0 ; i < no ; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var key = this.innerHTML;
        fun(key);
        animationKey(key);
    });
    
    
}

function fun(key) {


    switch (key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            this.style.color = "black";
            break;
        
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            this.style.color = "black";
            break;

        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            this.style.color = "black";
            break;
        
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            this.style.color = "black";
            break;
            
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            this.style.color = "black";
            break;
        
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            this.style.color = "black";
            break;

        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            this.style.color = "black";
            break;
    

        default:
            alert("The Inner HTML is not proper... ");
            break;
    }
}

// function fn() {

//           if (this.innerHTML === 'w'){
//             var audio = new Audio("sounds/crash.mp3");
//             audio.play();
//             //console.log("Its " + this.innerHTML);
//             this.style.color = "black";
//           }
//           else if (this.innerHTML === 'a') {
//             var audio = new Audio("sounds/kick-bass.mp3");
//             audio.play();
//             this.style.color = "black";
//           }
//           else if (this.innerHTML === 's') {
//             var audio = new Audio("sounds/snare.mp3");
//             audio.play();
//             this.style.color = "black";
//           }
//           else if (this.innerHTML === 'd') {
//             var audio = new Audio("sounds/tom-1.mp3");
//             audio.play();
//             this.style.color = "black";
//           }
//           else if (this.innerHTML === 'j') {
//             var audio = new Audio("sounds/tom-2.mp3");
//             audio.play();
//             this.style.color = "black";
//           }
//           else if (this.innerHTML === 'k') {
//             var audio = new Audio("sounds/tom-3.mp3");
//             audio.play();
//             this.style.color = "black";
//           }
//           else if (this.innerHTML === 'l') {
//             var audio = new Audio("sounds/tom-4.mp3");
//             audio.play();
//             this.style.color = "black";
//           }

//           else{
//             alert("Please click on the Instruments.")
//           }
    
    
// }

document.addEventListener("keydown", function(event)
{
    var keypr = event.key;
    fun(keypr);
    animationKey(keypr);
    //alert(keypr);
});

    function fun(keypr){

    
    switch (keypr) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            document.querySelectorAll(".drum")[0].style.color = "black";
            break;
        
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            document.querySelectorAll(".drum")[1].style.color = "black";
            break;

        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            document.querySelectorAll(".drum")[2].style.color = "black";
            break;
        
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            document.querySelectorAll(".drum")[3].style.color = "black";
            break;
            
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            document.querySelectorAll(".drum")[4].style.color = "black";
            break;
        
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            document.querySelectorAll(".drum")[5].style.color = "black";
            break;

        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            document.querySelectorAll(".drum")[6].style.color = "black";
            break;
    

        default:
            alert("Please press only the letters you can see... ");
            break;
    }
}

function animationKey(keys) {
    //alert("Its " + keys);
    var keyClass = document.querySelector('.' + keys); 
    keyClass.classList.add("pressed");
    
    setTimeout(function() {
        keyClass.classList.remove("pressed")
    }, 100);
}