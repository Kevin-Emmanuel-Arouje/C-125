noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

  function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(550, 550);
  canvas.position(560,150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
     noseX=results[0].pose.nose.x;
     noseY=results[0].pose.nose.y;
     rightWristX=results[0].pose.rightWrist.x;
     leftWristX=results[0].pose.leftWrist.x;
     difference=floor(rightWristX - leftWristX);
  }
}

function draw() {
background('#969A97');
document.getElementById("square_side").innerHTML="The width and the height of the square is-" + difference + "px";
  fill("red");
  stroke("red");
  square(noseX, noseY, difference);
}
