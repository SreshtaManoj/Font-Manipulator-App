dif=0;
leftWristX=0;
rightWristY=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(500, 500);
    canvas.position(500, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet Model loaded');
}
function draw(){
    background('#61f288');
    document.getElementById("font").innerHTML = "Width and Height of the font will be =" + dif +"px";
    fill('#de683a');
    text('Sreshta', 50, 400);
    textSize(dif);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x
        rightWristX=results[0].pose.rightWrist.x
        dif=floor(leftWristX-rightWristX)
        
    }
    }