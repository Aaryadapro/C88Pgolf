var canvas= new fabric.Canvas("myCanvas")

ball_x = 0;
ball_y = 0;

hole_y = 400;
hole_x = 800;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img){
        hole_object = Img;
        hole_object.scaleToWidth(150);
        hole_object.scaleToHeight(140);
        hole_object.set({
            top:hole_y,
            left:hole_x
        });
        canvas.add(hole_object);
    });
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img){
        ball_object = Img;
        ball_object.scaleToWidth(150);
        ball_object.scaleToHeight(140);
        ball_object.set({
            top:ball_y,
            left:ball_x
        });
        canvas.add(ball_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x == hole_x)&&(ball_y == hole_y)){
		canvas.remove(ball_object);
		document.getElementById("hd3").innerHTML = "You have hit the goal";
		document.getElementById("myCanvas").style.borderColor = "red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y > 0){
			ball_y = ball_y - block_image_height;
			console.log("when up arrow key is pressed, x = "+ball_x+", y = "+ball_y);
			canvas.remove(ball_object);
			load_img();
		}
	}

	function down()
	{
		if(ball_y <= 395){
			ball_y = ball_y + block_image_height;
			console.log("when down arrow key is pressed, x = "+ball_x+", y = "+ball_y);
			canvas.remove(ball_object);
			load_img();
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			
				ball_x = ball_x - block_image_width;
				console.log("when left arrow key is pressed, x = "+ball_x+", y = "+ball_y);
				canvas.remove(ball_object);
				load_img();
			
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x = ball_x + block_image_width;	
				console.log("when right arrow key is pressed, x = "+ball_x+", y = "+ball_y);
				canvas.remove(ball_object);
				load_img();
		}
	}
	
}

