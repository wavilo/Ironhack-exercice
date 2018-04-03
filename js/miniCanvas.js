// link to 30 questions https://opentdb.com/api.php?amount=30&difficulty=easy

// 20180403131938
// https://opentdb.com/api.php?amount=30&difficulty=easy

//Questions

var allQuestion = [
  {
    question:
      "The name of the main character of the video game &quot;The Legend of Zelda&quot;, is Zelda.",
    correct_answer: "False",
    incorrect_answers: "True"
  },
  {
    question: "Nintendo started out as a playing card manufacturer.",
    correct_answer: "True",
    incorrect_answers: "False"
  },
  {
    question: "Igneous rocks are formed by excessive heat and pressure.",
    correct_answer: "False",
    incorrect_answers: "True"
  }
  //   {
  //     question:,
  //     correct_answer: ,
  //     incorrect_answers: ["True"]
  //   },
  //   {
  //     question:,
  //     correct_answer: ,
  //     incorrect_answers: ["True"]
  //   },
  //   {
  //     question:,
  //     correct_answer: ,
  //     incorrect_answers: ["True"]
  //   },
  //   {
  //     question:,
  //     correct_answer: ,
  //     incorrect_answers: ["True"]
  //   },
  //   {
  //     question:,
  //     correct_answer: ,
  //     incorrect_answers: ["True"]
  //   },
  //   {
  //     question:,
  //     correct_answer: ,
  //     incorrect_answers: ["True"]
  //   },
];

// $(".true").click(function() {
//   console.log("yolo");
// });

//function to launch a question
function randomQuiz() {
  var randomNb = Math.floor(Math.random() * 3); // random number on the array
  document.querySelector(".mini-game h2").innerHTML =
    allQuestion[randomNb].question;

  $(".btn-reponse").click(function() {
    // console.log($(this).hasClass("true"));
    if (
      allQuestion[randomNb].correct_answer == "True" &&
      $(this).hasClass("true")
    ) {
      $(".congrats-message").html(
        "Good answer, you increase the speed of the ball"
      );
      speed = speed + 1;
    } else if (
      allQuestion[randomNb].correct_answer == "True" &&
      $(this).hasClass("false")
    ) {
      $(".congrats-message").html("Bad answer");
    } else if (
      allQuestion[randomNb].correct_answer == "False" &&
      $(this).hasClass("false")
    ) {
      $(".congrats-message").html(
        "Good answer, you increase the speed of the ball"
      );
      speed = speed + 1;
    } else if (
      allQuestion[randomNb].correct_answer == "False" &&
      $(this).hasClass("true")
    ) {
      $(".congrats-message").html("Bad answer");
    }
  });
}

//setinterval
setInterval(randomQuiz, 5000);
