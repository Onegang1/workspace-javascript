//key up --> display key code
function showkeycode(e) {
    var lastkeyE = document.getElementById('lastKey');
    lastkeyE.textContent = "Last key in ASCII code :" + e.keyCode;

}

//bind the action
$('#message').keyup(showkeycode);

//press s key, move the + symbol
var posX = 100;
var posY = 10;
function moveit(e) {
    if (e.key = "s") {
        //animation
        $('img').animate({ left: "400px" }, 500, 'linear');
    }
    //cpuld you use up key to move up
    if (e.key = "ArrowUp") {
        //animation
        $('img').animate({ top: "400px" }, 500, 'linear');
    }
}

    //binding 
    document.addEventListener('keydown', moveit);

    //click --- show the position of the mouse
    function showmouse(e){
        var lastKeyE = document.getElementById('lastKey');
        lastKeyE.textContent = "position ("+e.pageX+" , "+e.pageY+")";
    }
    
    document.addEventListener('mousemove',showmouse)