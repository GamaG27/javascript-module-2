/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp)

hint: get body, create timeout, change color after 5000

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

const time = setTimeout(() => {
  document.body.style.backgroundColor = "blue";
}, 2550);

let colorindex = 0;

const timer = setInterval(() => {
  const color = ["black", "yellow", "brown", "green"];
  document.body.style.backgroundColor = color[colorindex];
  colorindex = (colorindex + 1) % color.length;
}, 1000);
