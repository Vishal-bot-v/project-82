var mouseEvent = "empty"
var last_postion_of_x, last_postion_of_y;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
width_of_line = 1;
canvas.addEventListner("mouseDown", my_mouseDown());

function my_mouseDown(e) {
    color = document.getElementById("color").Value;
    width_of_line = document.getElementById("width_of_line").Value;
    radius = document.getElementById("radius").Value;
    mouseEvent = "mouseDown";
}

canvas.addEventListner("mouseMove", my_mouseMove);

function my_mouseMove (e) {
    current_postion_of_mouse_x = e.clientX - canvas.offsetleft;
    current_postion_of_mouse_y = e.clientX - canvas.offsettop;
    if (mouseEvent == "mouseDown") {
        ctx = beginpath();
        ctx.strokeStyle = color;
        ctx.line_width = width_of_line;
        console.log("last_postion_of_x_and_y_coordinates =");
        console.log("x=" + last_postion_of_x + "y=" + last_postion_of_y);
        ctx.moveTo(last_postion_of_x, last_postion_of_y);
        console.log("current_postion_of_x_and_y_corrdinates =");
        console.log("x=" + current_postion_of_x + "y=" + current_postion_of_y);
        ctx.lineTo(current_postion_of_mouse_x, current_postion_of_mouse_y);
        ctx.strock();
    }

    last_postion_of_x = current_postion_of_mouse_x;
    last_postion_of_y = current_postion_of_mouse_y;
}

canvas.addEventListner("mouseUp", my_mouseup);
function my_mouseUp(e)
{
    mouseEvent = "mouseUp";
}