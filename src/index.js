import "./styles.css";

const player = document.getElementById("player");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const captureButton = document.getElementById("capture");

const constraints = {
  video: {
    facingMode: {
      exact: "environment"
    }
  }
};

captureButton.addEventListener("click", () => {
  // Draw the video frame to the canvas.
  context.drawImage(player, 0, 0, canvas.width, canvas.height);
  // Convert the canvas to dataURl
  var dataURL = canvas.toDataURL();
  //Give the image tag the data URL
  document.getElementById("canvasImg").src = dataURL;

  player.srcObject.getVideoTracks().forEach(track => track.stop());
});

// Attach the video stream to the video element and autoplay.
navigator.mediaDevices.getUserMedia(constraints).then(stream => {
  player.srcObject = stream;
});
