var canvas = document.getElementById("canvas");
canvas.width = 300;
canvas.height = 300;

var field = new Field(canvas);

for(var i = 0; i < 10; i++){
    field.addVert(Math.random()*300,Math.random()*300);
}



var start = 0;
var animate = function(t){
    if(start === 0)start = t;
    var dt = (t - start)/1000;//now things are in seconds, not in milliseconds
    start = t;
    field.render();
    requestAnimationFrame(animate);
};

requestAnimationFrame(animate);

