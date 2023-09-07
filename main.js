var status = "";

function setup(){
    var canvas = canvas.createCanvas(680,560);
    Webcam.set({
        width:350,
        height:300,
        imageFormat : 'png',
        pngQuality:90
    });
}

function start() {
    var  objectDetector = ml5.objectDetector('cocoSSD, modelLoaded');
    document.getElementById("status").innerHTML= "status: indentificando o iten";
}

function draw() {
    Image(video,0,0,480,380);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotResult (results, error) {
    if (error) {
        console.error(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}