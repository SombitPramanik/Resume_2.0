// Responsive Naigation Bar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "right") {
      x.className += " responsive";
    } else {
      x.className = "right";
    }
  }
// on scroll function (navigation bar)
var prevScrollpos = window.pageYOffset;
var childNav = document.querySelector('.right');

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        childNav.classList.remove('hidden');
    } else {
        childNav.classList.add('hidden');
    }

    prevScrollpos = currentScrollPos;
};