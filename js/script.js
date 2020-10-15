//*************************
// Testing my script if it is linked
//*************************
console.log('js');

//*************************
// Defining the Function
//*************************

function calculateAccomodationCost(accom, meal){
  var myTotal = accom + meal;
  var withGST = myTotal + (12 / 100 * myTotal);
  return (withGST); //to return the value to the place where this function was called
}

// $('#calculate').click(function(){
//
// //*************************
// // Calling the Functions
// //*************************
//
// var stay = parseInt($('#accom').val());
// var food = parseInt($('#meal').val());
// console.log(stay, food);
//
// var totalCost = calculateAccomodationCost(stay, food);
// console.log('$', totalCost);
//
// });

var marks = [];

$('#grade').click(function(){
  var module1 = parseInt($('#module1').val());
  var module2 = parseInt($('#module2').val());
  var module3 = parseInt($('#module3').val());
  var module4 = parseInt($('#module4').val());

  // var module1 = $('#module1').val();
  // var module2 = $('#module2').val();
  // var module3 = $('#module3').val();
  // var module4 = $('#module4').val();

  if((module1 >= 0) && (module1 <= 100)){
    marks.push(module1);
  }

  if((module2 >= 0) && (module2 <= 100)){
    marks.push(module2);
  }

  if((module3 >= 0) && (module3 <= 100)){
    marks.push(module3);
  }

  if((module4 >= 0) && (module4 <= 100)){
    marks.push(module4);
  }

  if (marks.length < 4){
    var marks = []; //error?
    alert('please enter marks between 0 and 100');


  } else {
    console.log(marks);



  // finding total marks using function
  var totalMarks = totalMarksCalc(module1, module2, module3, module4);
  console.log('Total = ' + totalMarks);

  //finding average of marks using function
  var averageMarks = averageMarksCalc(totalMarks);
  console.log('Average = ' + averageMarks);

  var grade = findGrade(averageMarks);
  console.log('Grade = ' + grade);

  //finding the highest mark amongst the modules
  var highestMark = findHighest(marks);
  console.log('Highest mark = ' + highestMark);

}
});

function totalMarksCalc(mark1, mark2, mark3, mark4){
  return (mark1 + mark2 + mark3 + mark4)
}

function averageMarksCalc(total){
  return (total / 4);
}

// function definition to find the average of marks
function averageMarksCalc(total){
  return (total / 4);
}

// function definition to find the grade
function findGrade(avg){

  if (avg < 50) {
    return ('failed');
  } else if (avg < 80){
    return ('passed');
  } else {
    return ('passed with distinction');
  }
}

//function definition to find the highest
function findHighest(scores){
  var high = 0; //assumption
  var i = 0
  var moduleNumber = 0;
  var highResult = [];
  for (i = 0; i < scores.length; i++){
    console.log(scores[i]);
    if (scores[i] >= high) {
      high = scores[i];
      moduleNumber = i;

    }
  }
  console.log(high, moduleNumber+1);
  highResult.push(high);
  highResult.push(moduleNumber+1);
  console.log(highResult);
  return (highResult);

}

//1. feedback to users if mark is not in the range
//2. what if highest mark is in more than 1 module?
//3. Without refresh, if continued, the module number adds up to the previous
