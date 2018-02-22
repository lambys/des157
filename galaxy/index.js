"use strict";

// bunny image
var bun = document.getElementById('bun');

var width = window.innerWidth;
var height = window.innerHeight;

// KONVA library for drag&drop events
function drawImage(imageObj) {
  var stage = new Konva.Stage({
    container: 'container',
    width: 700,
    height: 700
  });

  var layer = new Konva.Layer();

  //planet shape
  var planet = new Konva.Ellipse({
    x: 600,
    y: 600,
    radius: { x: 100, y: 100
    },
    //gradient color fill
    fillLinearGradientStartPoint: {x: -50, y: -50},
    fillLinearGradientEndPoint: {x: 50,y: 50},
    fillLinearGradientColorStops: [0, 'pink', 1, 'purple'],
    strokeWidth: 0
  });

  // add the planet shape to the layer
  layer.add(planet);

  // bunny ufo
  var bunImg = new Konva.Image({
    image: imageObj,
    x: 1,
    y: 1,
    width: 300,
    height: 300,
    draggable: true
  });

  //add img to the layer
  layer.add(bunImg);
 // add the layer to the stage
  stage.add(layer);

//when clicking and dragging
  stage.on("dragmove", function(){
  msg1.innerHTML = "almost there!";
  //resets bunny image if dropped
  bunImg.setImage(imageObj);
  //resets end result gradient back to normal
  planet.setFillLinearGradientStartPoint({x : -50, y : -50});
    planet.setFillLinearGradientEndPoint({x : 50, y : 50});
    planet.setFillLinearGradientColorStops([0, 'pink', 1, 'purple']);
    });

//creates drop event based on end of drag
   stage.on("dragend", function(e){
       var pos = stage.getPointerPosition();
       var shape = layer.getIntersection(pos);
       if (shape) {
           planet.fire('drop', {
               type : 'drop',
               evt : e.evt
           }, true);
       }
   });

//end drop result: img and colors change
   stage.on("drop", function(e){
     e.target.fillLinearGradientStartPoint({x : -50, y : -50});
     e.target.fillLinearGradientEndPoint({x : 50, y : 50});
     e.target.fillLinearGradientColorStops([0, 'purple', 1, 'pink']);
     bunImg.setImage(imageObj2);
       msg1.innerHTML = "we made it!";
       layer.draw();
   });

}
var imageObj = new Image();
imageObj.onload = function() {
  drawImage(this);
};
imageObj.src = 'https://78.media.tumblr.com/63c3ffe2801d06d2803c29532f3104f0/tumblr_p47pinDWKm1wgcsb4o1_400.gif';

var imageObj2 = new Image();
imageObj2.src = 'https://78.media.tumblr.com/390e73fce89a8c2f04507092acdb44f4/tumblr_p4je6b4dy21wgcsb4o1_400.png';

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
