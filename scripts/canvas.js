const  canvas = document.querySelector('canvas');

let c = canvas.getContext('2d');


function draw (){
    let x = 50;
    let y = 230;
    let radius = 40;

    c.beginPath();
    c.moveTo(x,y);
    c.bezierCurveTo(x,y,x,y-120,x+90,y-130);
    c.arc(x+90, y-170, radius, x-80,false);
    c.moveTo(140,100);
    c.bezierCurveTo(200,100,230,180,230,230);

    c.strokeStyle = "white"
    c.lineWidth = "15";
    c.stroke();
}

draw();