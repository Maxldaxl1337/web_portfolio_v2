// TYPE WRITE //
window.onload = function () {
    typeWriter('typewrite1', text1, 60, function () {
      typeWriter('typewrite2', text2, 70);
    });
  };

  const text1 = "ximilian";
  const text2 = " Huetter";

  function typeWriter(elementId, text, speed, callback) {
    const element = document.getElementById(elementId);
    let i = 0;

    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        if (callback) {
          callback(); 
        }
      }
    }

    type();
  }

// BLINKY BLINKY //
let visibleCursor = false
setInterval(() => {
    if (visibleCursor){
        document.getElementById("cursor").style.opacity = 0;
    } else {
        document.getElementById("cursor").style.opacity = 1;
    }
    visibleCursor = !visibleCursor
}, 400);