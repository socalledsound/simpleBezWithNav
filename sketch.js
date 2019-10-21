//simple bezier curve values + another type of easing function

//start by specifying a begin and end point and two control points
let beginY = 50, endY = 300, bez1 = 300, bez2 = 300;
//the number of points that will be generated in any loop
let resolution = 200; 
let fillColor = [220,90,190];    
//a counter to increment in the draw loop, we will use this to access individual points in the array
let count = 0;
//an empty array for the points we will generate in setup
let points = [];
//and add another array for timeValues
let timeValues = [];
function setup() {
  createCanvas(400, 400);
  
  
    //our for loop to generate the curve
  for(let i = 0; i < resolution; i++){
    //this time lets pass the normalized time value( between 0 and 1) into an easing function
    let t = easeInOutQuad(i/resolution);
    //and lets store those values too
    timeValues.push(t);
    
    
    
    //for each time value we generate a y value based on the overall curve shape
    let newPoint = bezierPoint(beginY, bez1, bez2, endY, t);
    //push the y value to the array of values
    points.push(newPoint);
  }
  
  
}

function draw() {
  background(255);
  //use the modulo symbol to keep our counter within the total length of the array
  let y = points[count%points.length];
  //let's use those timeValues for our x
  let x = timeValues[count%timeValues.length] * 400;
  fill(fillColor);
  ellipse(x, y, 100);
  //don't forget to increment the counter
  count++
}


//the easeinout  quad function from
// https://gist.github.com/gre/1650294
function easeInOutQuad(t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t }