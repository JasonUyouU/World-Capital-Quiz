document.getElementById('secondQ').style.display = 'none';
document.getElementById('second').style.display = 'none';
document.getElementById('secondButton').style.display = 'none';
document.getElementById('thirdQ').style.display = 'none';
document.getElementById('third').style.display = 'none';
document.getElementById('thirdButton').style.display = 'none';
document.getElementById('fourthQ').style.display = 'none';
document.getElementById('fourth').style.display = 'none';
document.getElementById('fourthButton').style.display = 'none';
document.getElementById('fifthQ').style.display = 'none';
document.getElementById('fifth').style.display = 'none';
document.getElementById('fifthButton').style.display = 'none';
document.getElementById('sixthQ').style.display = 'none';
document.getElementById('sixth').style.display = 'none';
document.getElementById('sixthButton').style.display = 'none';
document.getElementById('seventhQ').style.display = 'none';
document.getElementById('seventh').style.display = 'none';
document.getElementById('seventhButton').style.display = 'none';
document.getElementById('eighthQ').style.display = 'none';
document.getElementById('eighth').style.display = 'none';
document.getElementById('eighthButton').style.display = 'none';
document.getElementById('ninthQ').style.display = 'none';
document.getElementById('ninth').style.display = 'none';
document.getElementById('ninthButton').style.display = 'none';
document.getElementById('tenthQ').style.display = 'none';
document.getElementById('tenth').style.display = 'none';
document.getElementById('tenthButton').style.display = 'none';

function submitAnswer () {
	var firstans=document.getElementById("first").value
	var secondans=document.getElementById("second").value
	if (firstans == "Kathmandu" || firstans == "kathmandu") {
		alert("You're correct! 1/10 let's see if you can get all ten!")
		document.getElementById('firstQ').style.display = 'none';
		document.getElementById('secondQ').style.display = '';
		document.getElementById('first').style.display = 'none';
		document.getElementById('second').style.display = '';
		document.getElementById('firstButton').style.display = "none";
		document.getElementById('secondButton').style.display = "";

		return
	} else {
		alert("Try again!")
	}
}
function submitAnswer2 () {
	var secondans=document.getElementById("second").value
	if (secondans == "Kabul" || secondans == "kabul") {
		alert("YES! 2/10")
		document.getElementById('secondQ').style.display = 'none';
		document.getElementById('thirdQ').style.display = '';
		document.getElementById('second').style.display = 'none';
		document.getElementById('third').style.display = '';
		document.getElementById('secondButton').style.display = 'none';
		document.getElementById('thirdButton').style.display = '';
	} else {
		alert("Give it another try")
	}
}
function submitAnswer3 () {
	var thirdans=document.getElementById("third").value
	if (thirdans == "Helsinki" || thirdans == "helsinki") {
		alert("Keep going, that's three straight!")
		document.getElementById('thirdQ').style.display = 'none';
		document.getElementById('fourthQ').style.display = '';
		document.getElementById('third').style.display = 'none';
		document.getElementById('fourth').style.display = '';
		document.getElementById('thirdButton').style.display = 'none';
		document.getElementById('fourthButton').style.display = '';
	} else {
		alert("Did you spell it correctly?")
	}
}
function submitAnswer4 () {
	var fourthans=document.getElementById("fourth").value
	if (fourthans == "Ottawa" || fourthans == "ottawa") {
		alert("There's is something special about you, 4/10!")
		document.getElementById('fourthQ').style.display = 'none';
		document.getElementById('fifthQ').style.display = '';
		document.getElementById('fourth').style.display = 'none';
		document.getElementById('fifth').style.display = '';
		document.getElementById('fourthButton').style.display = 'none';
		document.getElementById('fifthButton').style.display = '';
	} else {
		alert("That is the wrong answer...")
	}
}
function submitAnswer5 () {
	var fifthans=document.getElementById("fifth").value
	if (fifthans == "Rome" || fifthans == "rome") {
		alert("Half way to the goal line.")
		document.getElementById('fifthQ').style.display = 'none';
		document.getElementById('sixthQ').style.display = '';
		document.getElementById('fifth').style.display = 'none';
		document.getElementById('sixth').style.display = '';
		document.getElementById('fifthButton').style.display = 'none';
		document.getElementById('sixthButton').style.display = '';
	} else {
		alert("Wrong!")
	}
}
function submitAnswer6 () {
	var sixthans=document.getElementById("sixth").value
	if (sixthans == "Ankara" || sixthans == "ankara") {
		alert("I need to say no more, 6/10")
		document.getElementById('sixthQ').style.display = 'none';
		document.getElementById('seventhQ').style.display = '';
		document.getElementById('sixth').style.display = 'none';
		document.getElementById('seventh').style.display = '';
		document.getElementById('sixthButton').style.display = 'none';
		document.getElementById('seventhButton').style.display = '';
	} else {
		alert("Do you need to use Google?...")
	}
}
function submitAnswer7 () {
	var seventhans=document.getElementById("seventh").value
	if (seventhans == "Bern" || seventhans == "bern") {
		alert("7/10")
		document.getElementById('seventhQ').style.display = 'none';
		document.getElementById('eighthQ').style.display = '';
		document.getElementById('seventh').style.display = 'none';
		document.getElementById('eighth').style.display = '';
		document.getElementById('seventhButton').style.display = 'none';
		document.getElementById('eighthButton').style.display = '';
	} else {
		alert("That is incorrect.")
	}
}
function submitAnswer8 () {
	var eighthans=document.getElementById("eighth").value
	if (eighthans == "Caracas" || eighthans == "caracas") {
		alert("get two more right, and you win!")
		document.getElementById('eighthQ').style.display = 'none';
		document.getElementById('ninthQ').style.display = '';
		document.getElementById('eighth').style.display = 'none';
		document.getElementById('ninth').style.display = '';
		document.getElementById('eighthButton').style.display = 'none';
		document.getElementById('ninthButton').style.display = '';
	} else {
		alert("Give it another shot!")
	}
}
function submitAnswer9 () {
	var ninthans=document.getElementById("ninth").value
	if (ninthans == "Hanoi" || ninthans == "hanoi") {
		alert("Are you a genius? 9/10")
		document.getElementById('ninthQ').style.display = 'none';
		document.getElementById('tenthQ').style.display = '';
		document.getElementById('ninth').style.display = 'none';
		document.getElementById('tenth').style.display = '';
		document.getElementById('ninthButton').style.display = 'none';
		document.getElementById('tenthButton').style.display = '';
	} else {
		alert("Don't give up! You're almost finished!")
	}
}
function submitAnswer10 () {
	var fifthans=document.getElementById("fifth").value
	if (fifthans == "Abuja" || fifthans == "abuja") {
		alert("You are a genius")
	} else {
		alert("Last question, you can do it!")
	}
}