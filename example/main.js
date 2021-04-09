var canvas = document.getElementById("canvas");
canvas.width = 300;
canvas.height = 300;

var field = new Field(canvas);

var coords = [
    [280.89040031876885,138.59479117723333],
    [121.32654168968212,70.11781326935098 ],
    [288.5008573225623 ,84.16459106279919 ],
    [282.8728103604571 ,99.39954636830058 ],
    [203.51643675501543,299.40472925380914],
    [187.89685776085034,48.281030463280786],
    [8.557375263275425 ,188.82499551935257],
    [65.53336030759216 ,258.9383229026874 ],
    [286.9779154643102 ,188.23312046654522],
    [150,120]
];

for(var i = 0; i < coords.length; i++){
    field.addVert(coords[i][0],coords[i][1]);
};
field.addEdge(field.verts[6],field.verts[1]);
field.addEdge(field.verts[1],field.verts[5]);
field.addEdge(field.verts[5],field.verts[2]);
field.addEdge(field.verts[2],field.verts[3]);
field.addEdge(field.verts[3],field.verts[0]);
field.addEdge(field.verts[0],field.verts[8]);
field.addEdge(field.verts[8],field.verts[4]);
field.addEdge(field.verts[4],field.verts[7]);
field.addEdge(field.verts[7],field.verts[6]);
field.addEdge(field.verts[5],field.verts[9]);
field.addEdge(field.verts[1],field.verts[9]);
field.addEdge(field.verts[6],field.verts[9]);
field.addEdge(field.verts[7],field.verts[9]);
field.addEdge(field.verts[7],field.verts[0]);
field.addEdge(field.verts[5],field.verts[0]);
field.addEdge(field.verts[9],field.verts[0]);


var start = 0;
var animate = function(t){
    if(start === 0)start = t;
    var dt = (t - start)/1000;//now things are in seconds, not in milliseconds
    start = t;
    field.render();
    requestAnimationFrame(animate);
};

requestAnimationFrame(animate);

