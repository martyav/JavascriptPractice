$(document).ready(function() {
    'use strict';
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
    
    // Draw image primitives on the canvas 
    // Example: var circle = Shape.Circle(200, 200, 50);
    // The first two arguments are coordinates, while the third is the radius

    var world = Shape.Circle(200, 200, 80);
    world.fillColor = 'black';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'Hello world';

    // A tool for taking in user input 
    var tool = new Tool();

    // Our event handler. It places a circle whereever our user clicks inside the canvas
    tool.onMouseDown = function(event) {
        var circle = Shape.Circle(event.point, 50);
        circle.fillColor = 'red';
    };

    paper.view.draw();

    console.log("main.js loaded");
});