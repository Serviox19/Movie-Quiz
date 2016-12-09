function submitAnswers(){
	var total = 5;
	var score = 0;

	// Get Input
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;

	// Validation
	for(i = 1; i <= total;i++){
		if(eval('q'+i) == null || eval('q'+i) == ''){
			alert('You missed question '+ i);
			return false;
		}
	}

	// Set Correct Answers
	var answers = ["c","b","d","a","b"];

	// Check Answers
	for(i = 1; i <= total;i++){
		if(eval('q'+i) == answers[i - 1]){
			score++;
		}
	}

	// Display Results
	var results = document.getElementById('results');
  // alert('You scored '+score+' out of ' +total);
	results.innerHTML = '<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';

  // //uncheck radio
  // var ele = document.getElementsByType("radio");
  // for(var i = 0; i < ele.length;i++)
  //    ele[i].checked = false;

	return false;
}
