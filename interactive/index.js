"use strict";

//form
var community = document.getElementById('community');
var choose = document.getElementById('choose');
var star = document.getElementById('star');
var planet = document.getElementById('planet');

var identity = document.getElementById('identity');

//
var color = document.getElementById("color");
var userColor = color.options[color.selectedIndex].value;

//h1
var label = document.getElementById('label');

//buttons
var start = document.getElementById('start');
var view = document.getElementById('view');
var submit = document.getElementById('submit');

var confirm = document.getElementById('confirm');

// p5 container
var galaxy = document.getElementById('galaxy1');

// options
var design = document.getElementById('design');
var junior = document.getElementById('junior');
var student = document.getElementById('student');
var davis = document.getElementById('davis');

start.addEventListener('click', function(){
  label.innerHTML="communities";
  p2.style.display="block";
  community.style.display="block";
  submit.style.display="block";
// hiding...
  p1.style.display="none";
  start.style.display="none";
})

submit.addEventListener('click', function(){
  label.innerHTML="is this okay?";
// showing....
  p2b.style.display="block";
  yes.style.display="block";
  no.style.display="block";
  results.style.display="block";
// hiding...
  submit.style.display="none";
  p2.style.display="none";
  community.style.display="none";

  if (davis.checked ==true){
    results.innerHTML+="city of davis resident <br>"
  }
  if (design.checked ==true){
    results.innerHTML+="design major <br>"
  }
  if (student.checked ==true){
    results.innerHTML+="UC davis student <br>"
  }
  if (junior.checked ==true){
    results.innerHTML+="third-year student <br>"
  }
})

yes.addEventListener('click', function(){
    // messages
    label.innerHTML="customize";
    p2.innerHTML="how do you want to represent yourself?";

    // showing...
    identity.style.display="block";
    p2.style.display="block";
    confirm.style.display="block";

    // hiding..
    p2b.style.display="none";
    yes.style.display="none";
    no.style.display="none";
    results.style.display="none";
})

confirm.addEventListener( 'click', function(){
    // messages


    // showing...
custom.style.display="block";

    // hiding..
    identity.style.display="none";

})


// p5 planets
function setup() {
 var canvas= createCanvas(1000, 1000);
  canvas.parent('galaxy1');

}

function draw() {
  fill('pink');
  background('black');
  ellipse(300, 300, 100, 100);
  fill('lightgreen');
  ellipse(600, 500, 150, 150);
  fill('lightblue');
  ellipse(450, 400, 50, 50);
  fill('purple');
  ellipse(900, 300, 100, 100);
}

view.addEventListener('click', function(){
// displaying..
galaxy1.style.display="block";
choose.style.display="block";

// hiding...
label.style.display="none";
p1.style.display="none";
start.style.display='none';
view.style.display="none";
community.style.display="none";
})

// particles library!
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 211,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 2,
        "color": "#FFB6C1"
      },
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 3,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 10,
      "direction": "right",
      "random": true,
      "straight": true,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "repulse": {
        "distance": 100,
        "duration": 0.5
      },
      "push": {
        "particles_nb": 5
      },
    }
  },
  "retina_detect": true
});
