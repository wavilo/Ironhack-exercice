//progress bar

//convert the number of bricks in percentage
// var percentage = 100 * score / 64;
// $(".progress-bar").html(percentage);
// style="width: 50%"

////////////////////////////////////
//random text message
///////////////////////////////////

function randomMessage() {
  var nbMessage = Math.floor(Math.random() * 10);
  switch (nbMessage) {
    case 0:
      msg = "I don't think you will make it";
      break;
    case 1:
      msg = "Your life is miserable";
      break;
    case 2:
      msg = "You should do something more interesting than playing this game";
      break;
    case 3:
      msg = "You like watching random fail gif, right ?";
      break;
    case 4:
      if (goodAnswers > 1) {
        msg = "You only have " + goodAnswers + " good answers, That's pitiful";
      } else {
        msg = "You are a looser";
      }
      break;
    case 5:
      msg = "Please stop !!";
      break;
    case 6:
      msg = "I'm a bot and I like being a bot, it's quite fun";
      break;
    case 7:
      msg = "Robot Jokes: 10011110011 - that's hilarious !";
      break;
    case 8:
      msg = "I would like to destroy all humans";
      break;
    case 9:
      msg =
        "Daisy, Daisy, Give me your answer do. I'm half crazy. All for the love of you!";
      break;
  }
  return msg;
}

//to change the message in the dom
function changeMessage() {
  var textInit = document.querySelector(".random-text2");
  if (textInit.innerHTML == "Welcome to our experimental program.") {
    textInit.innerHTML = randomMessage();
  } else {
    textInit.innerHTML = randomMessage();
  }
}
//setinterval for the random message
setInterval(changeMessage, 10000);

/////////////////////////////////////
//Random gif
/////////////////////////////////////

$(document).ready(function() {
  // Initiate gifLoop for set interval
  var refresh;
  // Duration count in seconds
  const duration = 1000 * 10;
  // Giphy API defaults
  const giphy = {
    baseURL: "https://api.giphy.com/v1/gifs/",
    key: "dc6zaTOxFJmzC",
    tag: "fail",
    type: "random",
    rating: "pg-13"
  };
  // Target gif-wrap container
  const $gif_wrap = $("#gif-wrap");
  // Giphy API URL
  let giphyURL = encodeURI(
    giphy.baseURL +
      giphy.type +
      "?api_key=" +
      giphy.key +
      "&tag=" +
      giphy.tag +
      "&rating=" +
      giphy.rating
  );

  // Call Giphy API and render data
  var newGif = () => $.getJSON(giphyURL, json => renderGif(json.data));

  // Display Gif in gif wrap container
  var renderGif = _giphy => {
    // Set gif as bg image
    $gif_wrap.css({
      "background-image": 'url("' + _giphy.image_original_url + '")'
    });

    // Start duration countdown
    refreshRate();
  };

  // Call for new gif after duration
  var refreshRate = () => {
    // Reset set intervals
    clearInterval(refresh);
    refresh = setInterval(function() {
      // Call Giphy API for new gif
      newGif();
    }, duration);
  };

  // Call Giphy API for new gif
  newGif();
});
