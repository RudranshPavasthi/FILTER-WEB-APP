nosex=0
nosey=0
function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    pose_model=ml5.poseNet(video,modelloaded);
}

function take_pic(){
    save("my_filter.png");
}

function draw(){
    image(video,0,0,300,300);   
    image(moustache,nosex-30,nosey,60,50);
}

function modelloaded(){
    console.log("modelloaded successfully");
    pose_model.on("pose",getposes);
}

function getposes(results){
    if(results.length>0){
        //console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log(nosex,nosey);
    }
}

function preload(){
    moustache=loadImage("m.png");
}
