"use strict";

//form
var community = document.getElementById('community');
var choose = document.getElementById('choose');

//h1
var label = document.getElementById('label');

//buttons
var start = document.getElementById('start');
var view = document.getElementById('view');
var submit = document.getElementById('submit');

// p5 container
var planets = document.getElementById('planets');


start.addEventListener('click', function(){
  label.innerHTML="customize";
  p2.style.display="block";
  p1.style.display="none";
  start.style.display="none";
  community.style.display="block";
  submit.style.display="block";
})

submit.addEventListener('click', function(){
  label.innerHTML="is this okay?";
  submit.style.display="none";
  p2.style.display="none";
  p2b.style.display="block";
  community.style.display="none";
})

function setup() {
 var canvas= createCanvas(1000, 1000);
  canvas.parent('planets');
}

function draw() {
  fill('pink');
  background('black');
  ellipse(300, 300, 100, 100);
}

view.addEventListener('click', function(){
// displaying..
planets.style.display="block";
choose.style.display="block";

// hiding...
label.style.display="none";
p1.style.display="none";
start.style.display='none';
view.style.display="none";
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
