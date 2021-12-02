function setup() {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    var slider2 = document.getElementById('slider2');
    slider2.value = 0;
    var tParam = 0;

    function draw() {
	canvas.width = canvas.width;

	// use the sliders to get the angles
	//var tParam = slider1.value*0.01;
      
    
  if (tParam>9){
    tParam = 0;
  }
    

    var viewAngle = slider2.value*0.02*Math.PI;
    var locCamera = vec3.create();
    var distCamera = 400.0;
    locCamera[0] = distCamera*Math.sin(viewAngle);
    locCamera[1] = 100;
    locCamera[2] = distCamera*Math.cos(viewAngle);
	var TlookAt = mat4.create();
    mat4.lookAt(TlookAt, locCamera, [0,0,0], [0,1,0]);
     
	function moveToTx(loc,Tx)
	{var res=vec3.create(); vec3.transformMat4(res,loc,Tx); context.moveTo(res[0],res[1]);}

	function lineToTx(loc,Tx)
	{var res=vec3.create(); vec3.transformMat4(res,loc,Tx); context.lineTo(res[0],res[1]);}
	
	function drawPlane(color,Tx) {
      drawRectangle("black",Tx);
      drawTriangle("lightblue", Tx);
      drawWings("blue",Tx);
	}
      
      function drawWings(color, Tx){
        context.fillStyle = color;
        context.beginPath();        
        moveToTx([5,5,-5],Tx);
        lineToTx([25,5,-5],Tx);
        lineToTx([5,5,-20],Tx);
        context.closePath();
        context.fill();       
        
        context.beginPath();        
        moveToTx([5,5,5],Tx);
        lineToTx([25,5,5],Tx);
        lineToTx([5,5,20],Tx);
        context.closePath();
        context.fill();
       
      }
      
      function drawTriangle(color, Tx){
        
        //side sides
        context.fillStyle = color;
        
        context.beginPath();        
        moveToTx([30,0,5],Tx);
        lineToTx([30,10,5],Tx);
        lineToTx([40,5,0],Tx);
        lineToTx([30,0,5],Tx);
        context.closePath();
        context.fill();
        
        context.beginPath();        
        moveToTx([30,0,-5],Tx);
        lineToTx([30,10,-5],Tx);
        lineToTx([40,5,0],Tx);
        lineToTx([30,0,5],Tx);
        context.closePath();
        context.fill();

        //top/bottom sides
        context.beginPath();        
        moveToTx([30,0,5],Tx);
        lineToTx([30,0,-5],Tx);
        lineToTx([40,5,0],Tx);
        lineToTx([30,0,5],Tx);
        context.closePath();
        context.fill();
        
        context.beginPath();        
        moveToTx([30,10,5],Tx);
        lineToTx([30,10,-5],Tx);
        lineToTx([40,5,0],Tx);
        lineToTx([30,10,5],Tx);
        context.closePath();
        context.fill();
         
      }
      
      
      function drawRectangle(color,Tx) {
        //base
        context.fillStyle = "red";
        context.beginPath();
        moveToTx([0,0,5],Tx);
        lineToTx([0,10,5],Tx);
        lineToTx([0,10,-5],Tx);
        lineToTx([0,0,-5],Tx);
        lineToTx([0,0,5],Tx);
        context.closePath();
        context.fill();
        

        //top
        context.beginPath();
        moveToTx([30,0,5],Tx);
        lineToTx([30,10,5],Tx);
        lineToTx([30,10,-5],Tx);
        lineToTx([30,0,-5],Tx);
        lineToTx([30,0,5],Tx);
        context.closePath();
        context.fill();
        
        
        context.fillStyle = color;

        //sides= sides
        context.beginPath();
        moveToTx([0,0,5],Tx);
        lineToTx([30,0,5],Tx);
        lineToTx([30,10,5],Tx);
        lineToTx([0,10,5],Tx);
        lineToTx([0,0,5],Tx);
        context.closePath();
        context.fill();
        
        context.beginPath();
        moveToTx([0,0,-5],Tx);
        lineToTx([30,0,-5],Tx);
        lineToTx([30,10,-5],Tx);
        lineToTx([0,10,-5],Tx);
        lineToTx([0,0,-5],Tx);
        context.closePath();
        context.fill();
        
        //top/bottom sides
        context.beginPath();
        moveToTx([0,0,5],Tx);
        lineToTx([30,0,5],Tx);
        lineToTx([30,0,-5],Tx);
        lineToTx([0,0,-5],Tx);
        lineToTx([0,0,5],Tx);
        context.closePath();
        context.fill();
        
        context.beginPath();
        moveToTx([0,10,5],Tx);
        lineToTx([30,10,5],Tx);
        lineToTx([30,10,-5],Tx);
        lineToTx([0,10,-5],Tx);
        lineToTx([0,10,5],Tx);
        context.closePath();
        context.fill();
        
      }
      
	
      function drawRunway(Tx){
        context.fillStyle = "grey";
        context.strokeStyle = "grey";
        context.beginPath();
        moveToTx([0,0,-15],Tx);
        lineToTx([0,0,15],Tx);
        lineToTx([100,0,15],Tx);
        lineToTx([100,0,-15],Tx);
        lineToTx([0,0,-15],Tx);
        context.closePath();
        context.fill();
        
        context.fillStyle="yellow";
        context.beginPath();
        moveToTx([0,0,-2],Tx);
        lineToTx([0,0,2],Tx);
        lineToTx([5,0,2],Tx);
        lineToTx([5,0,-2],Tx);
        lineToTx([0,0,-2],Tx);
        context.closePath();
        context.fill();
        
        context.beginPath();
        moveToTx([15,0,-2],Tx);
        lineToTx([15,0,2],Tx);
        lineToTx([20,0,2],Tx);
        lineToTx([20,0,-2],Tx);
        lineToTx([15,0,-2],Tx);
        context.closePath();
        context.fill();
        
        context.beginPath();
        moveToTx([30,0,-2],Tx);
        lineToTx([30,0,2],Tx);
        lineToTx([35,0,2],Tx);
        lineToTx([35,0,-2],Tx);
        lineToTx([30,0,-2],Tx);
        context.closePath();
        context.fill();
        
        context.beginPath();
        moveToTx([45,0,-2],Tx);
        lineToTx([45,0,2],Tx);
        lineToTx([50,0,2],Tx);
        lineToTx([50,0,-2],Tx);
        lineToTx([45,0,-2],Tx);
        context.closePath();
        context.fill();
        
        context.beginPath();
        moveToTx([60,0,-2],Tx);
        lineToTx([60,0,2],Tx);
        lineToTx([65,0,2],Tx);
        lineToTx([65,0,-2],Tx);
        lineToTx([60,0,-2],Tx);
        context.closePath();
        context.fill();
        
        context.beginPath();
        moveToTx([75,0,-2],Tx);
        lineToTx([75,0,2],Tx);
        lineToTx([80,0,2],Tx);
        lineToTx([80,0,-2],Tx);
        lineToTx([75,0,-2],Tx);
        context.closePath();
        context.fill();
        
        context.beginPath();
        moveToTx([90,0,-2],Tx);
        lineToTx([90,0,2],Tx);
        lineToTx([95,0,2],Tx);
        lineToTx([95,0,-2],Tx);
        lineToTx([90,0,-2],Tx);
        context.closePath();
        context.fill();
      }
      
	function drawAxes(color,Tx) {
	    context.strokeStyle=color;
	    context.beginPath();
	    // Axes
	    moveToTx([120,0,0],Tx);lineToTx([0,0,0],Tx);lineToTx([0,120,0],Tx);
	    // Arrowheads
	    moveToTx([110,5,0],Tx);lineToTx([120,0,0],Tx);lineToTx([110,-5,0],Tx);
	    moveToTx([5,110,0],Tx);lineToTx([0,120,0],Tx);lineToTx([-5,110,0],Tx);
	    // X-label
	    moveToTx([130,0,0],Tx);lineToTx([140,10,0],Tx);
	    moveToTx([130,10,0],Tx);lineToTx([140,0,0],Tx);
	    context.stroke();
	}

	var Hermite = function(t) {
	    return [
		2*t*t*t-3*t*t+1,
		t*t*t-2*t*t+t,
		-2*t*t*t+3*t*t,
		t*t*t-t*t
	    ];
	}

    var HermiteDerivative = function(t) {
        return [
        6*t*t-6*t,
        3*t*t-4*t+1,
        -6*t*t+6*t,
        3*t*t-2*t
        ];
    }

	function Cubic(basis,P,t){
	    var b = basis(t);
	    var result=vec3.create();
	    vec3.scale(result,P[0],b[0]);
	    vec3.scaleAndAdd(result,result,P[1],b[1]);
	    vec3.scaleAndAdd(result,result,P[2],b[2]);
	    vec3.scaleAndAdd(result,result,P[3],b[3]);
	    return result;
	}
	
      
      //points and tangents 
	var p0=[0,0,0];
	var d0=[50,0,0];
	var p1=[150,0,0];
	var d1=[50,15,0];
	var p2=[300,150,0];
	var d2=[150,0,250];
    var p3=[45*5,30*5,30*5];
	var d3=[-50,0,50];
	var p4=[15*5,25*5,0];
	var d4=[-50,0,-50];
      
	var p5=[0,30*5,-30*5];
	var d5=[-50,30,0];
	var p6=[-15*5,25*5,0];
	var d6=[-50,-50,0];
	var p7=[-150,15*5,15*5];
	var d7=[-50,-50,0];
	var p8=[-15*5,50,-20];
	var d8=[50,0,0];
	var p9=[0,0,0];
	var d9=[50,0,0];
      
	var P0 = [p0,d0,p1,d1]; 
	var P1 = [p1,d1,p2,d2]; 
    var P2 = [p2,d2,p3,d3];
    var P3 = [p3,d3,p4,d4];
    var P4 = [p4,d4,p5,d5];
    var P5 = [p5,d5,p6,d6];
    var P6 = [p6,d6,p7,d7];
    var P7 = [p7,d7,p8,d8];
    var P8 = [p8,d8,p9,d9];

	var C0 = function(t_) {return Cubic(Hermite,P0,t_);};
	var C1 = function(t_) {return Cubic(Hermite,P1,t_);};
  	var C2 = function(t_) {return Cubic(Hermite,P2,t_);};
	var C3 = function(t_) {return Cubic(Hermite,P3,t_);};
	var C4 = function(t_) {return Cubic(Hermite,P4,t_);};
	var C5 = function(t_) {return Cubic(Hermite,P5,t_);};
	var C6 = function(t_) {return Cubic(Hermite,P6,t_);};
	var C7 = function(t_) {return Cubic(Hermite,P7,t_);};
	var C8 = function(t_) {return Cubic(Hermite,P8,t_);};



	var C0prime = function(t_) {return Cubic(HermiteDerivative,P0,t_);};
	var C1prime = function(t_) {return Cubic(HermiteDerivative,P1,t_);};
	var C2prime = function(t_) {return Cubic(HermiteDerivative,P2,t_);};
	var C3prime = function(t_) {return Cubic(HermiteDerivative,P3,t_);};
	var C4prime = function(t_) {return Cubic(HermiteDerivative,P4,t_);};
	var C5prime = function(t_) {return Cubic(HermiteDerivative,P5,t_);};
	var C6prime = function(t_) {return Cubic(HermiteDerivative,P6,t_);};
	var C7prime = function(t_) {return Cubic(HermiteDerivative,P7,t_);};
	var C8prime = function(t_) {return Cubic(HermiteDerivative,P8,t_);};


    var Ccomp = function(t) {  
      if (t<1){
            var u = t;
            return C0(u);
        } 
      else if (t<2) {
            var u = t-1.0;
            return C1(u);
        }          
      else if (t<3) {
            var u = t-2.0;
            return C2(u);
        }          
      else if (t<4) {
            var u = t-3.0;
            return C3(u);
        } 
      else if (t<5) {
            var u = t-4.0;
            return C4(u);
        }          
      else if (t<6) {
            var u = t-5.0;
            return C5(u);
        } 
      else if (t<7) {
            var u = t-6.0;
            return C6(u);
        }
      else if (t<8) {
            var u = t-7.0;
            return C7(u);
        }
      else {
            var u = t-8.0;
            return C8(u);
        } 
	}

    var Ccomp_tangent = function(t) {
if (t<1){
            var u = t;
            return C0prime(u);
        } 
      else if (t<2) {
            var u = t-1.0;
            return C1prime(u);
        }          
      else if (t<3) {
            var u = t-2.0;
            return C2prime(u);
        }          
      else if (t<4) {
            var u = t-3.0;
            return C3prime(u);
        } 
      else if (t<5) {
            var u = t-4.0;
            return C4prime(u);
        }          
      else if (t<6) {
            var u = t-5.0;
            return C5prime(u);
        } 
      else if (t<7) {
            var u = t-6.0;
            return C6prime(u);
        }      
      else if (t<8) {
            var u = t-7.0;
            return C7prime(u);
        }
      else {
            var u = t-8.0;
            return C8prime(u);
        }           
	}

    function drawTrajectory(t_begin,t_end,intervals,C,Tx,color) {
	    context.strokeStyle=color;
	    context.beginPath();
        moveToTx(C(t_begin),Tx);
        for(var i=1;i<=intervals;i++){
            var t=((intervals-i)/intervals)*t_begin+(i/intervals)*t_end;
            lineToTx(C(t),Tx);
        }
        context.stroke();
	}

	// make sure you understand these    

	//drawAxes("black", mat4.create());
	

    var Tgrey_to_canvas = mat4.create();
	mat4.fromTranslation(Tgrey_to_canvas,[350,300,0]);
	mat4.scale(Tgrey_to_canvas,Tgrey_to_canvas,[1,-1,-1]); // Flip the Y-axis
    mat4.multiply(Tgrey_to_canvas,Tgrey_to_canvas,TlookAt);
	//drawAxes("grey",Tgrey_to_canvas);


	drawTrajectory(0.0,1.0,100,C0,Tgrey_to_canvas,"red");
    drawTrajectory(0.0,1.0,100,C1,Tgrey_to_canvas,"blue");
    drawTrajectory(0.0,1.0,100,C2,Tgrey_to_canvas,"#666600");
    drawTrajectory(0.0,1.0,100,C3,Tgrey_to_canvas,"orange");
    drawTrajectory(0.0,1.0,100,C4,Tgrey_to_canvas,"magenta");
    drawTrajectory(0.0,1.0,100,C5,Tgrey_to_canvas,"brown");
    drawTrajectory(0.0,1.0,100,C6,Tgrey_to_canvas,"green");
    drawTrajectory(0.0,1.0,100,C7,Tgrey_to_canvas,"darkorange");
    drawTrajectory(0.0,1.0,100,C8,Tgrey_to_canvas,"lightblue");



      
	var Tgreen_to_grey = mat4.create();
	mat4.fromTranslation(Tgreen_to_grey,Ccomp(tParam));
	var Tgreen_to_canvas = mat4.create();
    var tangent = Ccomp_tangent(tParam);
    var angle = Math.atan2(tangent[1],tangent[0]);
	mat4.rotateZ(Tgreen_to_grey,Tgreen_to_grey,angle);
	mat4.multiply(Tgreen_to_canvas, Tgrey_to_canvas, Tgreen_to_grey);
    drawRunway(Tgrey_to_canvas);
	drawPlane("green",Tgreen_to_canvas);

      
      tParam = tParam + 0.01;
      
      window.requestAnimationFrame(draw);

    } //end draw
          	
  window.requestAnimationFrame(draw);


}
window.onload = setup;
