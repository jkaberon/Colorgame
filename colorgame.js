/*var colors = ["rgb(255,0,0)","rgb(255,255,0)","rgb(0,255,0)",
"rgb(0,255,255)","rgb(0,0,255)","rgb(255,0,255)"];
var answer = colors[3];*/
var colorDisplay = document.getElementById("colorDisplay");
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var try_text = document.querySelector("#try");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var is_hard=true;
//var answer = null;
var answerRGB = null;
for(var i=0; i<squares.length; i++){
	squares[i].addEventListener("click",handle);
}
document.querySelector(".thing").addEventListener("click",
	function(){
		if(is_hard)restart();
		else restart_easy();
	});
easy.addEventListener("click",restart_easy);
hard.addEventListener("click",restart);
restart();

function handle(){
	//console.log(this.style.backgroundColor);
	if(this.style.backgroundColor==answerRGB){
		h1.style.backgroundColor=answerRGB;
		try_text.textContent="Correct!";
		for(var i=0; i<squares.length; i++){
			squares[i].style.backgroundColor=answerRGB;
		}
		if(is_hard)hard.style.backgroundColor=answerRGB;
		else easy.style.backgroundColor=answerRGB;
	}
	else {
		try_text.textContent="Try Again";
		this.style.backgroundColor="#232323";
	}
}

function restart(){
	//var colors = [];
	//easy.classList.remove("selected");
	easy.style.backgroundColor="white";
	easy.style.color="rgb(56, 117, 216)";
	hard.classList.add("selected")
	hard.style.color="white";
	is_hard=true;
	try_text.textContent="";
	var answer = Math.floor(Math.random()*6);
	for(var i=0; i<squares.length; i++){
		var color=generateRGB();
		squares[i].style.backgroundColor=color;
		if(i==answer){
			answerRGB=color;
			colorDisplay.textContent=color;
		}
	}
	h1.style.backgroundColor="rgb(56, 117, 216)";
	hard.style.backgroundColor="rgb(56, 117, 216)";
}

function restart_easy(){
	hard.style.backgroundColor="white";
	hard.style.color="rgb(56, 117, 216)";
	easy.classList.add("selected");
	easy.style.color="white";
	is_hard=false;
	try_text.textContent="";
	var answer = Math.floor(Math.random()*3);
	for(var i=0; i<3; i++){
		var color = generateRGB();
		squares[i].style.backgroundColor=color;
		if(i==answer){
			answerRGB=color;
			colorDisplay.textContent=color;
		}
	}
	for(var i=3; i<6; i++){
		squares[i].style.backgroundColor="#232323";
	}
	h1.style.backgroundColor="rgb(56, 117, 216)";
	easy.style.backgroundColor="rgb(56, 117, 216)";
}

function generateRGB(){
	var first = Math.floor(Math.random()*256);
	var second = Math.floor(Math.random()*256);
	var third = Math.floor(Math.random()*256);
	return "rgb("+first+", "+second+", "+third+")";
}

/*for(var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click",function(){
		alert("yo");
	});
}*/