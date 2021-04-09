var Field = function(canvas){
    var width = canvas.width;
    var height = canvas.height;
    var ctx = canvas.getContext("2d");
    var verts = {};
    var edges = {};
    var that = this;
    this.r = 5;
    
    var idd = 0;
    var genid = function(){
        return idd++;
    }
    
    this.addVert = function(x,y){
        var id = genid();
        vert = {
            id,x,y,edges:{}
        };
        verts[id] = vert;
        return vert;
    };
    this.addEdge = function(v1,v2){
        var id = genid();
        edge = {
            id,x,y,verts:[v1,v2]
        };
        v1.edges[id] = edge;
        v2.edges[id] = edge;
        edges[id] = edge;
        return edge;
    };
    this.removeVert = function(vert){
        var es = vert.edges;
        for(var i in es){
            that.removeEdge(es[i]);
        }
        delete verts[vert.id]
    };
    this.removeEdge = function(edge){
        //removing all traces
        var id = edge.id;
        delete edge.verts[0].edges[id];
        delete edge.verts[1].edges[id];
        delete edges[id];
    };
    this.render = function(){
        ctx.clearRect(0,0,width,height);
        for(var i in verts){
            var v = verts[i];
            ctx.beginPath();
            ctx.arc(v.x,v.y,v.r || that.r,0,6.28);
            ctx.closePath();
            ctx.fill();
            //drawing the number
            ctx.strokeText(v.id,v.x,v.y);
        }
        for(var i in edges){
            var e = edges[i];
            var v1 = edge.verts[0];
            var v2 = edge.verts[1];
            ctx.beginPath();
            ctx.moveTo(v1.x,v1.y);
            ctx.lineTo(v2.x,v2.y);
            ctx.stroke();
        }
    };
}