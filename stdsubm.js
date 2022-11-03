let submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2020-05-14",
    passed: true,
  },
  { name: "Jack", score: 59, date: "2020-07-05", passed: false },
  { name: "Jill", score: 88, date: "2020-04-22", passed: true },
];

// class Submission {
//     name: String;
//     score: Number;
//     date: String;
//     passed: Boolean;
// }

function addSubmission(array, newName, newScore, newDate) {
  //   let newSubmission = [
  //     { name: newName },
  //     { score: newScore },
  //     { date: newDate },
  //   ];

  let newSubmission = {
    //construct an object //
    name: newName,
    score: newScore,
    date: newDate,
  };

  newSubmission.score >= 60
    ? (newSubmission.passed = true)
    : (newSubmission.passed = false);

  array.push(newSubmission);
  console.log(array);
}
//If score greater than or equal to 60 then passed, otherwise failed
// check to see if they passed or failed

//create an object with the name,score, newDate and whether or not they passed

//I need to have an object with a name, score, date
//push to my submissions array

addSubmission(submissions, "Sally", 40, "2020-01-01");



function deleteSubmissionByIndex(array, index) {
  return array.splice(index, 1);
}

console.log(deleteSubmissionByIndex(submissions, 0));

console.log(submissions);

function deleteSubmissionByName(array, name) {
  // findIndex method
  let index = array.findIndex(function (submission) {
    /*
            submission = { 
                name: "Jane", 
                score: 95, 
                date: "2020-01-24", 
                passed: true 
            }
            */

    console.log(submission);
    console.log(name);

    return submission.name === name;
  });

  // splice method
  return array.splice(index, 1);
}

console.log(deleteSubmissionByName(submissions, "Sally"));
console.log(submissions);
// function findName(name) {
// return name === "";
// }

function editSubmission(array, index, score) {
  //   let editSubmission = [{ score: newScore }];

  // get the array object by index
  // let editSubmission = submissions[index];

//   update an object’s score
  array[index].score = score;

  array[index].score >= 60
    ? (array[index].passed = true)
    : (array[index].passed = false);

  //   array.push(editSubmission);
//   console.log(array);
  return array;
}

editSubmission(submissions, 0, 3);
editSubmission(submissions, 0, 75);
editSubmission(submissions, 2, 50);
console.log(submissions);
// 6

function findSubmissionByName(array,name){
  let submissionThatMatchesName = array.find((submission) => {
    return submission.name === name;
  });
  return submissionThatMatchesName;
}


  function findLowestScore (array){
    for (let i = 0; i <= array.length; i++){
    array.forEach(array.score)}
    console.log(findLowestScore(submissions[i]))
    findLowestScore(submissions[i])
  }

  function findAverageScore (array){

    let sum = 0;
    // loop through each elemenr in the array
    for (let i = 0; i <= array.length; i++){
      sum = sum + array[i].score
    }

    let avg = sum/array.length

    // inside the loop, add to the sum variable


  }

  