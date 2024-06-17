document.getElementById("playVideoButton").addEventListener("click", function() {
  var videoUrl = "videos/video.mp4"; // Replace with the URL to your video file
  
  // Screen dimensions and position
  var primaryScreenWidth = window.screen.width;
  var primaryScreenHeight = window.screen.height;
  var externalScreenLeft = primaryScreenWidth; // Assuming the external screen is to the right of the primary screen
  var externalScreenTop = 0;

  var videoWindow = window.open("", "VideoWindow", `width=600,height=500,left=${externalScreenLeft},top=${externalScreenTop}`);
  videoWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Playing Video</title>
      </head>
      <body>
          <video autoplay id="myVideo" width="100%" height="100%" controls>
              <source src="${videoUrl}" type="video/mp4">
              Your browser does not support the video tag.
          </video>
      </body>
      </html>
  `);
  videoWindow.document.close();

  // Move the new window to the external screen
  videoWindow.moveTo(externalScreenLeft, externalScreenTop);
  videoWindow.resizeTo(primaryScreenWidth, primaryScreenHeight);
});

document.getElementById("playVideoButton2").addEventListener("click", function() {
  var videoUrl = "videos/video.mp4"; // Replace with the URL to your video file
  
  // Screen dimensions and position
  var primaryScreenWidth = window.screen.width;
  var primaryScreenHeight = window.screen.height;
  var externalScreenLeft = primaryScreenWidth; // Assuming the external screen is to the right of the primary screen
  var externalScreenTop = 0;

  var videoWindow = window.open("", "VideoWindow", `width=600,height=500,left=${externalScreenLeft},top=${externalScreenTop}`);
  videoWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Playing Video</title>
      </head>
      <body>
          <video autoplay id="myVideo" width="100%" height="100%" controls>
              <source src="${videoUrl}" type="video/mp4">
              Your browser does not support the video tag.
          </video>
      </body>
      </html>
  `);
  videoWindow.document.close();

  // Move the new window to the external screen
  videoWindow.moveTo(externalScreenLeft, externalScreenTop);
  videoWindow.resizeTo(primaryScreenWidth, primaryScreenHeight);
});

function switchSection() {
  var section1 = document.getElementById('pirmais');
  var section2 = document.getElementById('pirmaisdivi');

  if (section1.style.display === 'none') {
    section1.style.display = 'block';
    section2.style.display = 'none';
  } else {
    section1.style.display = 'none';
    section2.style.display = 'block';
  }
}

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      toTop.classList.add("active");
    } else {
      toTop.classList.remove("active");
    }
  })

