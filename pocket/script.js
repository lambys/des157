//messages
var msg1 = document.getElementById('msg1'),
  msg2 = document.getElementById('msg2'),
  msg3 = document.getElementById('msg3');

//items
var button = document.getElementById('button'),
  button2 = document.getElementById('button2'),
  button3 = document.getElementById('button3');

//statistics
var statlist = document.getElementById('statlist');
var stats = document.getElementById('stats');

//generates random stat numbers
var num = (Math.floor(Math.random() * 50) + 1),
  num2 = (Math.floor(Math.random() * 20) + 1);
num3 = (Math.floor(Math.random() * 30) + 1);

var reset = document.getElementById('reset');

"use strict";

//button 1: tamagotchi
button.addEventListener('click', function() {
  msg1.style.display = "block";
  statlist.innerHTML += "<br>+" + num + " nostalgia";

  //removes any existing messages
  if (msg2.style.display = "block") {
    msg2.style.display = "none";
  }

  if (msg3.style.display = "block") {
    msg3.style.display = "none";
  }
})

button.addEventListener('mouseover', function() {
  button.style.opacity = "0.6";
})

button.addEventListener('mouseout', function() {
  button.style.opacity = "0";
})


//button 2: headphones
button2.addEventListener('click', function() {
  msg2.style.display = "block";
  statlist.innerHTML += "<br>+" + num2 + " escapism";

  //removes any existing messages
  if (msg1.style.display = "block") {
    msg1.style.display = "none";
  }

  if (msg3.style.display = "block") {
    msg3.style.display = "none";
  }
})

button2.addEventListener('mouseover', function() {
  button2.style.opacity = "0.6";
})

button2.addEventListener('mouseout', function() {
  button2.style.opacity = "0";
})


//button 3: collar
button3.addEventListener('click', function() {
  msg3.style.display = "block";
  statlist.innerHTML += "<br>+" + num3 + " strength";

  //removes any existing messages
  if (msg1.style.display = "block") {
    msg1.style.display = "none";
  }

  if (msg2.style.display = "block") {
    msg2.style.display = "none";
  }
})

button3.addEventListener('mouseover', function() {
  button3.style.opacity = "0.6";
})

button3.addEventListener('mouseout', function() {
  button3.style.opacity = "0";
})

reset.addEventListener('click', function() {
  statlist.innerHTML = " ";
})
