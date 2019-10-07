
var nb_1 = 30;
var nb_2 = 20;
var result = nb_1 + nb_2;

function Add(){
  document.getElementById('result-exo-1-1').innerHTML = result;  
}


var nb_3 = 3;
var nb_4 = 2;
var result2 = nb_3 * nb_4;

function Mul(){
  document.getElementById('result-exo-1-2').innerHTML = result2;  
}

var nb_5 = 12;
var nb_6 = 5;
var result3 = nb_5 % nb_6;

function Div(){
  document.getElementById('result-exo-1-3').innerHTML = result3;  
}

function Soustraire(){
    
var nb_7 = document.getElementById("ex1_input1").value; 
var nb_8 = document.getElementById("ex1_input2").value; 
var result4 = nb_7 - nb_8;

  document.getElementById('ex1_result').innerHTML = result4;  
}

function Multiplier(){
    
var nb_9 = document.getElementById("ex2_input1").value; 
var nb_10 = document.getElementById("ex2_input2").value; 
var result5 = nb_9 * nb_10;

  document.getElementById('ex2_result').innerHTML = result5;  
}

function Diviser(){
    
var nb_11 = document.getElementById("ex3_input1").value; 
var nb_12 = document.getElementById("ex3_input2").value; 
var result6 = nb_11 / nb_12;

  document.getElementById('ex3_result').innerHTML = result6;  
}


function Additionner(){
    
var nb_a = document.getElementById("ex4_input1").value; 
var nb_b = document.getElementById("ex4_input2").value; 
var results = nb_a/1 + nb_b/1;

  document.getElementById('ex4_result').innerHTML = results;  
}
var resultat = 0;
document.getElementById("ex6_result").innerHTML = resultat ;

function plusTen(){
var resultat1 = resultat += 10 ;
	document.getElementById("ex6_result").innerHTML = resultat1 ;
}

function diviseFive(){
var resultat2 = resultat / 5 ;
	document.getElementById("ex6_result").innerHTML = resultat2 ;
}

function multiplyHeight(){
var resultat3 = resultat * 8 ;
	document.getElementById("ex6_result").innerHTML = resultat3 ;
}

function minusTwo(){
var resultat4 = resultat - 2 ;
	document.getElementById("ex6_result").innerHTML = resultat4 ;
}

function combinePlusTenMinusTwo(){
var resultat4 = resultat += 10 - 2 ;
	document.getElementById("ex6_result").innerHTML = resultat4 ;
}

function reset(){
var resultat5 = resultat = 0 ;
	document.getElementById("ex6_result").innerHTML = resultat5 ;
}

function convertToPound(){
    
var kg1 = document.getElementById("ex9_input1").value; 
var pound1 = kg1 * 2.2046;

  document.getElementById('ex9_1_result').innerHTML = pound1;  
}



function convertToKg(){
    
var pound2 = document.getElementById("ex9_input2").value; 
var kg2 = pound2/  2.2046;

  document.getElementById('ex9_2_result').innerHTML = kg2;  
}

function iterateWords(){
    
var input = ex10_result.innerHTML
ex10_result.innerHTML = input + document.getElementById("ex10_input").value 

}

function resetWords(){

document.getElementById('ex10_result').innerHTML = '';

}

function dyna(){

  var w = window.outerWidth;
  var h = window.outerHeight;
  var txzt = "width=" + w + ", height=" + h;

document.getElementById('taille').innerHTML = txzt ;  

}
var rangeslider = document.getElementById("sliderRange"); 
var output = document.getElementById("demo"); 
output.innerHTML = rangeslider.value; 
  
rangeslider.oninput = function() { 
  output.innerHTML = this.value; 
} 


function enter(){
    
    var element = document.getElementById("nombre").value;
	
 if (element%3 ==0) {
    console.log("C'est un multiple de 3");
}else if (element%7 ==0){
	console.log("C'est un multiple de 7");
}else if (element%3 !=0){
    console.log("Ce n'est pas un multiple de 3");
}else if (element%7 !=0){
    console.log("Ce n'est pas un multiple de 7");
}
}