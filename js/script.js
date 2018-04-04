//current speed

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
      msg = "";
      break;
    case 5:
      msg = "Please stop !!";
      break;
    case 6:
      msg = "I'm a bot but and I'm not able to finish it...so you ??!!";
      break;
    case 7:
      msg = "You are a looser 7";
      break;
    case 8:
      msg = "You are a looser 8";
      break;
    case 9:
      msg = "You are a looser 9";
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

//setinterval
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
