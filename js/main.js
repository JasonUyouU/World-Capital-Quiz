document.getElementById('secondQ').style.display = 'none';
document.getElementById('second').style.display = 'none';
document.getElementById('secondButton').style.display = 'none';
document.getElementById('thirdQ').style.display = 'none';
document.getElementById('third').style.display = 'none';
document.getElementById('thirdButton').style.display = 'none';
document.getElementById('fourthQ').style.display = 'none';
document.getElementById('fourth').style.display = 'none';
document.getElementById('fourthButton').style.display = 'none';

function submitAnswer () {
	var firstans=document.getElementById("first").value
	var secondans=document.getElementById("second").value
	if (firstans == "Kathmandu" || firstans == "kathmandu") {
		document.getElementById('firstQ').style.display = 'none';
		document.getElementById('secondQ').style.display = '';
		document.getElementById('first').style.display = 'none';
		document.getElementById('second').style.display = '';
		document.getElementById('firstButton').style.display = "none";
		document.getElementById('secondButton').style.display = "";
		
		return
	} else {
		alert("try again")
	}
}
function submitAnswer2 () {
	var secondans=document.getElementById("second").value
	if (secondans == "Seoul" || secondans == "seoul") {
		document.getElementById('secondQ').style.display = 'none';
		document.getElementById('thirdQ').style.display = '';
		document.getElementById('second').style.display = 'none';
		document.getElementById('third').style.display = '';
		document.getElementById('secondButton').style.display = 'none';
		document.getElementById('thirdButton').style.display = '';
	} else {
		alert("try again")
	}
}
function submitAnswer3 () {
	var thirdans=document.getElementById("third").value
	if (thirdans == "Tokyo" || thirdans == "tokyo") {
		document.getElementById('thirdQ').style.display = 'none';
		document.getElementById('fourthQ').style.display = '';
		document.getElementById('third').style.display = 'none';
		document.getElementById('fourth').style.display = '';
		document.getElementById('thirdButton').style.display = 'none';
		document.getElementById('fourthButton').style.display = '';
	} else {
		alert("try again")
	}
}