var answers = ["B","B","B","C","A","A","D","B","D","A","A","C","B","A","A","B","B","B","A","B"], 
    tot = answers.length;

function getCheckedValue( radioName ){
    var radios = document.getElementsByName( radioName ); // Get radio group by-name
    for(var y=0; y<radios.length; y++)
      if(radios[y].checked) return radios[y].value; // return the checked value
}

function getScore(){
  var score = 0;
  var wrong = 0;
  for (var i=0; i<tot; i++)
    if(getCheckedValue("question"+i)===answers[i]) {
    	score += 1; // increment
    	document.getElementById(".answers"+i).style.color = 'lightgreen'; //turn question green
    }
    else{
    	document.getElementById(".answers"+i).style.color = 'red'; //turn question red
    }
    
  return score;
}

function returnScore(){
	var percent = 0;
	percent = (Number(getScore())/Number(tot))*100;
	document.getElementById(".result").innerHTML = "Score: " + getScore() + "/" + tot + " : " + percent + "%";
	returnPic();
}

function returnPic(){
	var per = (Number(getScore())/Number(tot))*100;
	var pics = ["img/wow.gif","img/gauss.jpg","img/tesla.jpg","img/kilby.jpg","img/shock.jpg","img/volta.jpg","img/bell.jpg","img/thomson.jpg","img/boole.jpg","img/babbage.jpg","img/moore.jpg","img/doge.jpg"]
	if(per===100){
		document.getElementById(".pic").src = pics[0];
		document.getElementById(".post").innerHTML = "YOU ARE A WIZARD!"
	}
	else if(per < 100 && per >= 90){
		document.getElementById(".pic").src = pics[1];
		document.getElementById(".post").innerHTML = "You are Carl Friedrich Gauss!"
	}
	else if(per < 90 && per >= 80){
		document.getElementById(".pic").src = pics[2];
		document.getElementById(".post").innerHTML = "You are Nikola Tesla!"
	}
	else if(per < 80 && per >= 70){
		document.getElementById(".pic").src = pics[3];
		document.getElementById(".post").innerHTML = "You are Jack Kilby!"
	}
	else if(per < 70 && per >= 60){
		document.getElementById(".pic").src = pics[4];
		document.getElementById(".post").innerHTML = "You are William Shockley!"
	}
	else if(per < 60 && per >= 50){
		document.getElementById(".pic").src = pics[5];
		document.getElementById(".post").innerHTML = "You are Alessando Volta!"
	}
	else if(per < 50 && per >= 40){
		document.getElementById(".pic").src = pics[6];
		document.getElementById(".post").innerHTML = "You are Alexander Graham Bell!"
	}
	else if(per < 40 && per >= 30){
		document.getElementById(".pic").src = pics[7];
		document.getElementById(".post").innerHTML = "You are Elihu Thomson!"
	}
	else if(per < 30 && per >= 20){
		document.getElementById(".pic").src = pics[8];
		document.getElementById(".post").innerHTML = "You are George Boole!"
	}
	else if(per < 20 && per >= 10){
		document.getElementById(".pic").src = pics[9];
		document.getElementById(".post").innerHTML = "You are Charles Babbage!"
	}
	else if(per < 10 && per >= 1){
		document.getElementById(".pic").src = pics[10];
		document.getElementById(".post").innerHTML = "You are Gordon Moore!"
	}
	else if(per===0){
		document.getElementById(".pic").src = pics[11];
		document.getElementById(".post").innerHTML = "such wow"
	}
}

function reload(){
	location.reload();
}

