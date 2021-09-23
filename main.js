chainx = 0;
chainy = 0;

glassx = 0;
glassy = 0;

hatx = 0;
haty = 0;
function preload() {
    glass = loadImage('https://i.postimg.cc/9QNKxssR/unnamed.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        chainy = results[0].pose.nose.y+40;
        console.log(" eye x = " + results[0].pose.leftEye.x);
        console.log(" eye y = " + results[0].pose.leftEye.y);
        glassx = results[0].pose.leftEye.x-60;
        glassy = results[0].pose.leftEye.y-40;
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(glass, glassx, glassy, 85, 85);
}

function take_snapshot(){
    save('myFilterImage.png');
}