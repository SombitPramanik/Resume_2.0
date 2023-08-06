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

// Auto text type :
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 1000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};
window.onload = function () {
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.1em solid #fff}";
  document.body.appendChild(css);
};
// Download script
const downloadLink = document.getElementById('downloadLink');
downloadLink.addEventListener('click', function () {
  downloadLink.href = '/SOMBIT PRAMANIK RESUME.pdf';
});
// back to top function
document.addEventListener('DOMContentLoaded', function () {
  var backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 300) { // Adjust the scroll height as needed
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

// contact from date handling