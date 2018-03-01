// creating the svg space thingie
var NS="http://www.w3.org/2000/svg";
var svg = document.createElementNS(NS,"svg");

svg.setAttribute("height", 500);
svg.setAttribute("width", 500);

document.body.appendChild(svg);

var x1;
var y1;
var x2;
var y2;

var new_circle = function(click){
    var x = click.offsetX;
    var y = click.offsetY;

    var circle = document.createElementNS(NS, "circle");

    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", 20);
    svg.appendChild(circle);

    if (!x1){
        x1 = x;
    }
    if (!y1){
        y1 = y;
    }

    x2 = x;
    y2 = y;

    var line = document.createElementNS(NS, "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("style", "stroke:rgb(0,0,0);stroke-width:2");
    svg.appendChild(line);

    x1 = x2;
    y1 = y2;
}

svg.addEventListener("click", new_circle);