function preload()
{
 }

function setup()
{
  canvas=createCanvas(380,380);
  canvas.center();
  video=createCapture(VIDEO);
  video.hide();
 }

function start()
{
    object_detector=ml5.objectDetector("Cocossd",modelLoaded);
    document.getElementById("stat").innerHTML="Detecting objects";
    input=document.getElementById("text_input").value;
}

function modelLoaded()
{
console.log("Model loaded !");
status=true;
}

function draw()
{
    image(video,0,0,380,380);
}

function gotResult(error,results)
{
  if (error) {
    console.log(error);
  } else {
    console.log(results);
    objects=results;
  }
}

function draw()
{
 image(mage,0,0,650,400);
if (status!="") {
  for (i = 0; i < objects.length; i++)
  {
    fill("Red");
    pecent=floor(objects[i].confidence*100);
 text(objects[i].label+" "+pecent+"%",objects[i].x,objects[i].y);
 textSize(25);
 noFill();
 stroke("Black");
 rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
 document.getElementById("stat").innerHTML="Detected objects";
  }
  
}
 
}