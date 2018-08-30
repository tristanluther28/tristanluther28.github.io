window.onload=function() {
	canv=document.getElementById("gc");
	ctx=canv.getContext("2d");
	setInterval(game,1000/speed);
}

function play(){
	document.addEventListener("keydown",keyPush);
	 $("body").css("overflow","hidden");
}

function end(){
	$("body").css("overflow","visible");
	px=py=10;
	gs=tc=20;
	ax=ay=15;
	xv=yv=0;
	trail=[];
	tail = 5;
	points = max;
}

function reset(){
	px=py=10;
	gs=tc=20;
	ax=ay=15;
	xv=yv=0;
	trail=[];
	tail = 5;
	points = max;
}

px=py=10;
gs=tc=20;
ax=ay=15;
xv=yv=0;
trail=[];
tail = 5;
points = 0;
max = 0;
speed = 10;

function game() {
	px+=xv;
	py+=yv;
	//Unbounded Map
	/*if(px<0) {      
		px= tc-1;
	}
	if(px>tc-1) {
		px= 0;
	}
	if(py<0) {
		py= tc-1;
	}
	if(py>tc-1) {
		py= 0;
	}*/
	//Bounded Map
	if(px<-1 || px>tc || py<-1 || py>tc){
		reset();
	}
	ctx.fillStyle="black";
	ctx.fillRect(0,0,canv.width,canv.height);

	ctx.fillStyle="lime";
	for(var i=0;i<trail.length;i++) {
		ctx.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);
		if(trail[i].x==px && trail[i].y==py) {
			tail = 5;
			points = 0;
		}
	}
	trail.push({x:px,y:py});
	while(trail.length>tail) {
	trail.shift();
	}

	if(ax==px && ay==py) {
		tail++;
		points++;
		ax=Math.floor(Math.random()*tc);
		ay=Math.floor(Math.random()*tc);
		if(points >= max){
			max = points;
		}		
	}
	ctx.fillStyle="red";
	ctx.fillRect(ax*gs,ay*gs,gs-2,gs-2);
	document.getElementById(".high").innerHTML = "High Score: " + max;
	document.getElementById(".score").innerHTML = "Current Score: " + points;
}
function keyPush(evt) {
	switch(evt.keyCode) {
		case 37:
			xv=-1;yv=0;
			break;
		case 38:
			xv=0;yv=-1;
			break;
		case 39:
			xv=1;yv=0;
			break;
		case 40:
			xv=0;yv=1;
			break;
	}
}