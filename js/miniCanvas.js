//function to launch a question

var goodAnswers = 0;

function randomQuiz() {
  var randomNb = Math.floor(Math.random() * 34); // random number on the array
  $(".mini-game h2").html(allQuestion[randomNb].question); //random question
  $(".congrats-message").html("Please choose an answer"); //message
  //the click function on true or false
  $(".btn-reponse").click(function() {
    $(".btn-reponse").off();
    if (
      allQuestion[randomNb].correct_answer === "True" &&
      $(this).hasClass("true")
    ) {
      $(".congrats-message").html(
        "Good answer, you increase the speed of the ball"
      );
      goodAnswers += 1;
      $(".answers").html(goodAnswers);
      dx = parseFloat((dx * 1.2).toFixed(2));
      dy = parseFloat((dy * 1.2).toFixed(2));
    }
    if (
      allQuestion[randomNb].correct_answer === "True" &&
      $(this).hasClass("false")
    ) {
      $(".congrats-message").html("Bad answer");
      dx = parseFloat((dx / 1.2).toFixed(2));
      dy = parseFloat((dy / 1.2).toFixed(2));
    }
    if (
      allQuestion[randomNb].correct_answer === "False" &&
      $(this).hasClass("false")
    ) {
      $(".congrats-message").html(
        "Good answer, you increase the speed of the ball"
      );
      goodAnswers += 1;
      $(".answers").html(goodAnswers);
      dx = parseFloat((dx * 1.2).toFixed(2));
      dy = parseFloat((dy * 1.2).toFixed(2));
    }
    if (
      allQuestion[randomNb].correct_answer === "False" &&
      $(this).hasClass("true")
    ) {
      $(".congrats-message").html("Bad answer");
      dx = parseFloat((dx / 1.2).toFixed(2));
      dy = parseFloat((dy / 1.2).toFixed(2));
    }
  });
}

$(".btn-question").click(function() {
  randomQuiz();
});

//All questions
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
  },
  {
    question:
      "AMC&#039;s &#039;The Walking Dead&#039;, Rick, Carl, Daryl, Morgan, Carol and Maggie were introduced to us in Season 1.",
    correct_answer: "False",
    incorrect_answers: "True"
  },
  {
    question: "The HTML5 standard was published in 2014.",
    correct_answer: "True",
    incorrect_answers: "False"
  },
  {
    question:
      "The Indie Game Development Studio Cing, developers of Hotel Dusk and Last Window, went bankrupt on March 1st, 2010.",
    correct_answer: "True",
    incorrect_answers: "False"
  },
  {
    question: "A group of islands is called an &#039;archipelago&#039;.",
    correct_answer: "True",
    incorrect_answers: "False"
  },
  {
    question:
      "English new wave musician Gary Numan founded the video game development company Facepunch Studios in March 2009.",
    correct_answer: "False",
    incorrect_answers: "True"
  },
  {
    question:
      "Leonardo DiCaprio won an Oscar for Best Actor in 2004&#039;s &quot;The Aviator&quot;.",
    correct_answer: "False",
    incorrect_answers: "True"
  },
  {
    question: "French is an official language in Canada.",
    correct_answer: "True",
    incorrect_answers: "False"
  },
  {
    question: "Vatican City is a country.",
    correct_answer: "True",
    incorrect_answers: "False"
  },
  {
    question: "Steel is an alloy of Iron and Carbon.",
    correct_answer: "True",
    incorrect_answers: "False"
  },
  {
    question: "Nutella is produced by the German company Ferrero.",
    correct_answer: "False",
    incorrect_answers: "True"
  },
  {
    question: "There are 6 legendary cards in &quot;Clash Royale&quot;.",
    correct_answer: "False",
    incorrect_answers: "True"
  },
  {
    question: "Brezhnev was the 5th leader of the USSR.",
    correct_answer: "True",
    incorrect_answers: "False"
  },
  {
    question:
      "To bypass US Munitions Export Laws, the creator of the PGP published all the source code in book form.",
    correct_answer: "True",
    incorrect_answers: "False"
  },
  {
    question:
      "In Kingdom Hearts the Paopu fruit is said to intertwine the destinies for two people forever.",
    correct_answer: "True",
    incorrect_answers: "False"
  },
  {
    question: "Bulls are attracted to the color red.",
    correct_answer: "False",
    incorrect_answers: "True"
  },
  {
    question:
      "Bill Cipher in the show &quot;Gravity Falls&quot; is the good guy.",
    correct_answer: "False",
    incorrect_answers: "True"
  },
  {
    question:
      "In &quot;Overwatch,&quot; an allied McCree will say &quot;Step right up&quot; upon using his ultimate ability Deadeye.",
    correct_answer: "True",
    incorrect_answers: "False"
  },
  {
    question:
      "In 2010, Twitter and the United States Library of Congress partnered together to archive every tweet by American citizens.",
    correct_answer: "True",
    incorrect_answers: "False"
  },
  {
    question:
      "Samuel L. Jackson had the words, &#039;Bad Motherf*cker&#039; in-scripted on his lightsaber during the filming of Star Wars.",
    correct_answer: "True",
    incorrect_answers: "False"
  },
  {
    question:
      "In Alfred Hitchcock&#039;s film &#039;Psycho&#039; it is said he used chocolate syrup to simulate the blood in the famous shower scene from ",
    correct_answer: "True",
    incorrect_answers: "False"
  },
  {
    question:
      "Rebecca Chambers does not appear in any Resident Evil except for the original Resident Evil and the Gamecube remake.",
    correct_answer: "False",
    incorrect_answers: "True"
  },
  {
    question: "Antarctica is the largest desert in the world.",
    correct_answer: "True",
    incorrect_answers: "False"
  },
  {
    question:
      "Ana was added as a new hero for the game Overwatch on July 19th, 2016",
    correct_answer: "True",
    incorrect_answers: "False"
  },
  {
    question:
      "In the movie The Revenant, DiCaprio&#039;s character hunts down the killer of his son.",
    correct_answer: "True",
    incorrect_answers: "False"
  },
  {
    question: "The first dual-core CPU was the Intel Pentium D.",
    correct_answer: "False",
    incorrect_answers: "True"
  },
  {
    question:
      "In Monster Hunter Generations, guild style is a type of hunting style.",
    correct_answer: "True",
    incorrect_answers: "False"
  },
  {
    question:
      "The Roman god &quot;Jupiter&quot; was first known as &quot;Zeus&quot; to the Greeks.",
    correct_answer: "True",
    incorrect_answers: "False"
  },
  {
    question:
      "In Rugby League, performing a &quot;40-20&quot; is punished by a free kick for the opposing team.",
    correct_answer: "False",
    incorrect_answers: "True"
  },
  {
    question:
      "L&#039;H&ocirc;pital was the mathematician who created the homonymous rule that uses derivatives to evaluate limits with indeterminations.",
    correct_answer: "False",
    incorrect_answers: "True"
  },
  {
    question: "Finnish Lapphund dogs were used for herding reindeer.",
    correct_answer: "True",
    incorrect_answers: "False"
  }
];
