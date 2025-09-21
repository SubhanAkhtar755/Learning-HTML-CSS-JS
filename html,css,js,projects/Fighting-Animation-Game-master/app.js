var rightarrow = 0;
function abc() {
  
  var character = document.getElementById("character");
  if (event.keyCode === 39 && rightarrow < 990) {
    rightarrow = rightarrow + 10;
    character.style.left = rightarrow + "px";
  }
  if (event.keyCode === 37 && rightarrow > 10) {
    rightarrow = rightarrow - 10;
    character.style.left = rightarrow + "px";
  }
  if (event.keyCode === 32) {
    character.style.width = "350px";
    character.style.height = "350px";
    character.src = "image/bigbear-spit.gif";
    setTimeout(function () {
      character.style.width = "250px";
      character.style.height = "250px";
      character.src = "image/raiden-ff2-stance.gif";
    }, 1500);
  }if (event.keyCode === 65 ) {
    character.style.width = "350px";
    character.style.height = "350px";
    character.src = "image/bigbear-stance.gif";
    setTimeout(function () {
        character.style.width = "250px";
        character.style.height = "250px";
        character.src = "image/raiden-ff2-stance.gif";
      }, 1500);
  
  }
  if (event.keyCode === 66 ) {
    character.style.width = "250px";
    character.style.height = "250px";
    character.src = "image/raidenwalkback.gif";
    setTimeout(function () {
        character.style.width = "250px";
        character.style.height = "250px";
        character.src = "image/raiden-ff2-stance.gif";
      }, 1500);
  
  }

}
window.onkeydown = abc ;

