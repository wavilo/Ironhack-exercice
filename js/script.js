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

// //////////////////
// //background image
// //////////////////

// var img = new Image();
// img.src = "./images/background/background-4.jpg";

// var canvas = document.querySelector("#canvas");
// var ctx = canvas.getContext("2d");

// var backgroundImage = {
//   img: img,
//   x: 0,
//   speed: -1,

//   move: function() {
//     this.x += this.speed;
//     this.x %= canvas.width;
//   },

//   draw: function() {
//     ctx.drawImage(this.img, this.x, 0);
//     if (this.speed < 0) {
//       ctx.drawImage(this.img, this.x + canvas.width, 0);
//     } else {
//       ctx.drawImage(this.img, this.x - this.img.width, 0);
//     }
//   }
// };

// function updateCanvas() {
//   backgroundImage.move();

//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   backgroundImage.draw();

//   requestAnimationFrame(updateCanvas);
// }

// img.onload = updateCanvas;

// /////////////////
// //character
// ////////////////
