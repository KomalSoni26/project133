img = "";
objects = [];
check = "";
function back1(){
    window.location.replace("index.html");
}

function preload(){
  img = loadImage('bedroom.jpg');
}
 
function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
  console.log("Model Loaded!")
  check= true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
}
function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text ("Bed",110,135);
    noFill();
    stroke("#FF0000");
    rect(100,125,250,250);

    fill("#FF0000");
    text ("furniture",20,205);
    noFill();
    stroke("#FF0000");
    rect(10,195,150,150);
    

}
