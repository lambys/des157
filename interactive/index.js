"use strict";

//form
var community = document.getElementById('community');
var choose = document.getElementById('choose');
var star = document.getElementById('star');
var planet = document.getElementById('planet');

//
var color = document.getElementById("color");

//h1
var label = document.getElementById('label');

//buttons
var start = document.getElementById('start');
var view = document.getElementById('view');
var submit = document.getElementById('submit');
var confirm = document.getElementById('confirm');
var type = document.getElementById('type');

var avsubmit = document.getElementById('avsubmit');
var avback = document.getElementById('avback');

var calendar = document.getElementById('calendar');


// options
var design = document.getElementById('design');
var junior = document.getElementById('junior');
var student = document.getElementById('student');
var davis = document.getElementById('davis');


var info = document.getElementById('info');

var des = document.getElementById('des');
var thr = document.getElementById('thr');
var ucd = document.getElementById('ucd');
var dav = document.getElementById('dav');

var questions= document.getElementById('questions')

function colorSel(objId,theValue) {
    var imgs=["planets/blue-plain.png","planets/pink-plain.png",
    "planets/green-plain.png", "planets/purple-plain.png", "planets/orange-plain.png"];

    var d=document;
    theValue=imgs[theValue];
    if (!theValue || !d.getElementById ) return;
    var obj = d.getElementById(objId);
    if (obj) obj.src=theValue;
}


function ringSel(objId,theValue) {
    var imgs=["planets/blank.png","planets/rings.png"];
    var d=document;
    theValue=imgs[theValue];
    if (!theValue || !d.getElementById ) return;
    var obj = d.getElementById(objId);
    if (obj) obj.src=theValue;
}

function patternSel(objId,theValue) {
    var imgs=["planets/blank.png","planets/dots.png","planets/stripes.png",
      "planets/cracks.png"];
    var d=document;
    theValue=imgs[theValue];
    if (!theValue || !d.getElementById ) return;
    var obj = d.getElementById(objId);
    if (obj) obj.src=theValue;
}

// function sizeSel(objId,theValue) {
//     var d=document;
//       var sizes = d.getElementById(sizes);
//       var obj = d.getElementById(objId);
//       var s = d.getElementById(s);
//       var m = d.getElementById(m);
//       var l = d.getElementById(l);
//       var colorImg = d.getElementById(colorImg);
//       var patternImg = d.getElementById(patternImg);
//       var ringImg = d.getElementById(ringImg);
//     if (s.checked=="true"){
//       colorImg.style.width="200px";
//       patternImg.style.width="200px";
//       ringImg.style.width="200px";
//     }
//
//     if (m.checked=="true"){
//       colorImg.style.width="300px";
//       patternImg.style.width="300px";
//       ringImg.style.width="300px";
//     }
//
//     if (l.checked=="true"){
//       colorImg.style.width="400px";
//       patternImg.style.width="400px";
//       ringImg.style.width="400px";
//     }
// }

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

choose.addEventListener('mouseover', function(){

    if (dav.selected ==true){
      info.innerHTML="the city of davis, especially downtown davis, has a lively community with frequent events and gatherings to bring residents together.<br><br> below is a list of all the upcoming events in downtown davis.";
      calendar.href="https://http://davisdowntown.com/calendar/";

    }
    if (des.selected ==true){
      info.innerHTML="the design department at UC davis offers a range of unique events and exhibitions. you can often find events that provide information on internships and design careers. <br><br> below is an organized calendar of upcoming design events."
        calendar.href="https://http://arts.ucdavis.edu/design-events-and-exhibitions/";
    }
    if (ucd.selected ==true){
      info.innerHTML="uc davis provides a rich variety of entertainment events, art installations, exhibits, and workshops throughout the year that often go unnoticed. <br><br>below, you can find a categorized list of events in this community."
        calendar.href="https://www.ucdavis.edu/calendar/all-events/";
    }
    if (thr.selected ==true){
      info.innerHTML="third-year students at davis may be seeking internships or study abroad programs as they near graduation. <br><br> below, uc davis events can be relevant to these goals. <br>"
        calendar.href="https://www.ucdavis.edu/calendar/all-events/";
    }

})

yes.addEventListener('click', function(){
    // messages
    label.innerHTML="customize";
    p2.innerHTML="how do you want to represent yourself?";

    // showing...
    identity.style.display="block";
    p2.style.display="block";
    type.style.display="block";

    // hiding..
    p2b.style.display="none";
    yes.style.display="none";
    no.style.display="none";
    results.style.display="none";
})

no.addEventListener('click', function(){
  label.innerHTML="communities";
  p2.style.display="block";
  community.style.display="block";
  submit.style.display="block";
  // hiding...
  p2b.style.display="none";
  yes.style.display="none";
  no.style.display="none";
  results.style.display="none";


})

type.addEventListener( 'click', function(){
    // messages
    // showing...
custom.style.display="block";
confirm.style.display="block";
    // hiding..
    identity.style.display="none";
    type.style.display="none";
})

confirm.addEventListener('click', function() {
  // messages
    label.innerHTML="is this okay?";
    // showing...
    p2.style.display="none";
    questions.style.display="none";
    confirm.style.display="none";
    // hiding..
    avsubmit.style.display="block";
    avback.style.display="block";


})

avback.addEventListener( 'click', function(){
    // messages
    label.innerHTML="customize";
    // showing...
questions.style.display="block";
confirm.style.display="block";
    // hiding..
    avsubmit.style.display="none";
    avback.style.display="none";

})

avsubmit.addEventListener('click', function() {


  // displaying..
  choose.style.display="block";
  events.style.display="block";

  // hiding...
  label.style.display="none";
  questions.style.display='none';
  confirm.style.display="none";
  avsubmit.style.display="none";
  avback.style.display="none";
})
// // p5 planets
// function setup() {
//  var canvas= createCanvas(1000, 1000);
//   canvas.parent('galaxy1');
//
// }
//
// function draw() {
//   fill('pink');
//   background('black');
//   ellipse(300, 300, 100, 100);
//   fill('lightgreen');
//   ellipse(600, 500, 150, 150);
//   fill('lightblue');
//   ellipse(450, 400, 50, 50);
//   fill('purple');
//   ellipse(900, 300, 100, 100);
// }

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
