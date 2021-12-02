function setup() {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    var Er = 1;
    var x1 = canvas.width/2;
    var y1 = canvas.height-30;
    var x2 = canvas.width/2;
    var y2 = canvas.height-30;
    var x3 = canvas.width/2;
    var y3 = canvas.height-30;
    var Dx = 2;
    var Dy = -2; 
    var Dx2 = 4; 
    var Dy2 = -4; 
    var Dx3 = 3;
    var Dy3 = -3; 

    function draw() {
		var speed = parseInt(document.getElementById('heat').value,10)*.06;

	canvas.width = canvas.width;
	
	
	function atom(color){
		context.beginPath();
		context.fillStyle = color;
		context.arc(22,22,20,0,2*Math.PI);
		context.fill();
		context.stroke();
	}
	
	//potentially change to include multiple different electrons?
	//means the x and y will have to change in the arc? 
	//or rotate w translations????? <- the point of the damn thing 
	function electron(color){
		context.beginPath();
		context.arc(30,0,5,0,2*Math.PI);
		context.fillStyle = color;
        context.fill();
		context.stroke();
	}
      
  
  //context.save();  //remove the first save 
 
 
 function axes(color) {
	    context.strokeStyle=color;
	    context.beginPath();
	    // Axes
	    context.moveTo(120,0);context.lineTo(0,0);context.lineTo(0,120);
	    // Arrowheads
	    context.moveTo(110,5);context.lineTo(120,0);context.lineTo(110,-5);
	    context.moveTo(5,110);context.lineTo(0,120);context.lineTo(-5,110);
	    // X-label
	    context.moveTo(130,-5);context.lineTo(140,5);
	    context.moveTo(130,5);context.lineTo(140,-5);
	    // Y-label
	    context.moveTo(-5,130);context.lineTo(0,135);context.lineTo(5,130);
	    context.moveTo(0,135);context.lineTo(0,142);
	    context.stroke();
	}
 
 function setCanvasTransform(Tx) {
	    context.setTransform(Tx[0],Tx[1],Tx[2],Tx[3],Tx[4],Tx[5],Tx[6],Tx[7]);
	}
 
 //first atom movement
      if(x1 + Dx > canvas.width-20||x1+Dy<2){
	  Dx = -Dx;}
      if(y1 + Dy > canvas.height-20 || y1+Dy< 2){
	  Dy = -Dy;}

	
	axes("green");
	
//first atom translation
 var Tatom1_to_canvas = mat3.create();
 mat3.fromTranslation(Tatom1_to_canvas,[50,150]);
 setCanvasTransform(Tatom1_to_canvas);
 atom("green");
 
 //mat3.rotate(Tatom1_to_canvas,Tatom1_to_canvas, 6);
 //mat3.fromTranslation(Tatom1_to_canvas,[x1*speed*3,y1*speed*2]);

 
//translation for first electron
/* var Tatom1_to_Electron1 = mat3.create();
mat3.fromTranslation(Tatom1_to_Electron1, [23,32]);
mat3.fromRotation(Tatom1_to_Electron1,Er*.001);
var TElectron1_to_Canvas = mat3.create();
mat3.multiply(TElectron1_to_Canvas, Tatom1_to_canvas, Tatom1_to_Electron1);
setCanvasTransform(TElectron1_to_Canvas);
electron(); */

      
      /* 
  //first atom    
	context.translate(50,150);
      context.rotate(6);
  context.translate(x1*speed*3,y1*speed*2);
	atom("green");
	context.translate(23,32);  // 22,22 for perfect circle
  context.rotate(Er*.001);   
  electron();
  //DrawAxes("black");
  context.save();
  context.translate(5,5);
  context.rotate(-Math.PI*(Er*.0006));
  electron();
  //undo the transformations to land us back at home
  context.restore();
  context.translate(40,15);
  context.rotate(-Math.PI*(Er)*.2);
  electron();
  context.restore();
  context.save();
  
      
        //DrawAxes("black");
      //second atom movement
      if(x2 + Dx2 > canvas.width-20||x2+Dy2<2)
        Dx2 = -Dx2;
      if(y2 + Dy2 > canvas.height-20 || y2+Dy2< 2)
        Dy2 = -Dy2;
      //second atom
      context.translate(x2*speed,y2*speed);
      context.translate(300,45);
      atom("red");
      context.translate(22,26);
      context.rotate(Er*.002);   
      electron();

      //third atom movement
      if(x3 + Dx3 > canvas.width-20||x3+Dy3<2)
        Dx3 = -Dx3;
      if(y3 + Dy3 > canvas.height-20 || y3+Dy3< 2)
        Dy3 = -Dy3;
      //third atom
      context.restore();
      context.translate(250,300);
      context.translate(x3*speed*3,y3*speed*2);
      context.save();
      atom("blue");
      context.translate(32,23);  // 22,22 for perfect circle
      context.rotate(Er*.0023); 
      electron();
      context.save();
      context.restore();
      context.translate(5,5);
      context.rotate(-Math.PI*(Er*.0012));
      electron();
      context.restore();
 */

     
	

  x1+=Dx;
  y1+=Dy;
  x2+=Dx2;
  y2+=Dy2;
  x3+=Dx3;
  y3+=Dy3;
  Er=(Er+20);
	
	window.requestAnimationFrame(draw);
}// end draw
  window.requestAnimationFrame(draw);
	draw();
} //end setup
window.onload = setup;