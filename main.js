canvas=document.getElementById('mycanvas');
ctx=canvas.getContext("2d");
car_width=100;
car_height=90;
car_x=20;
car_y=180;
background_image="racing.gif";
car2_width=100;
car2_height=90;
car2_x=20;
car2_y=70;
car_image="images.car 1.jpg";
car2_image="images.car2.jpg"
function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    car_imgTag=new Image();
    car_imgTag.onload=uploadcar;
    car_imgTag.src=car_image;

    car2_imgTag=new Image();
    car2_imgTag.onload=uploadcar2;
    car2_imgTag.src=car2_image
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadcar(){
    ctx.drawImage(car_imgTag, car_x,car_y,car_width,car_height);
}
function uploadcar2(){
    ctx.drawImage(car2_imgTag, car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38')
    {
        up();
        console.log("up");
    }
    if(keyPressed=='40')
    {
        down();
        console.log("down");
    }
    if(keyPressed=='37')
    {
        left();
        console.log("left");
    }
    if(keyPressed=='39')
    {
        right();
        console.log("right");
    }
}
function up()
{
    if(car_y>=0)
    {
        car_y=car_y-10;
        console.log("when up arrow in pressed="+car_x+"-"+car_y);
        uploadBackground();
        uploadcar();
    }
        ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
}

function down()
{
    if(car_y<=500)
    {
        car_y=car_y+10;
        console.log("when down arrow in pressed, x="+car_x+"| y="+car_y);
        uploadBackground();
        uploadcar();
    }
        ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
}

function left()
{
    if(car_x>=0)
    {
        car_x=car_x-10;
        console.log("when left arrow in pressed,x="+car_x+"| y="+car_y);
        uploadBackground();
        uploadcar();
    }
        ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
}

function right()
{
    if(car_x<=700)
    {
        car_x=car_x+10;
        console.log("when right arrow in pressed,x="+car_x+"| y="+car_y);
        uploadBackground();
        uploadcar();
    }
        ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
}

function up()
{
    if(car2_y>=0)
    {
        car2_y=car2_y-10;
        console.log("when up arrow in pressed="+car2_x+"-"+car2_y);
        uploadBackground();
        uploadcar2();
    }
        ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

function down()
{
    if(car2_y<=500)
    {
        car2_y=car2_y+10;
        console.log("when down arrow in pressed, x="+car2_x+"| y="+car2_y);
        uploadBackground();
        uploadcar2();
    }
        ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

function left()
{
    if(car2_x>=0)
    {
        car2_x=car2_x-10;
        console.log("when left arrow in pressed,x="+car2_x+"| y="+car2_y);
        uploadBackground();
        uploadcar2();
    }
        ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

function right()
{
    if(car2_x<=700)
    {
        car2_x=car2_x+10;
        console.log("when right arrow in pressed,x="+car2_x+"| y="+car2_y);
        uploadBackground();
        uploadcar2();
    }
        ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}