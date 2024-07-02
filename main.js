// App ID EF1A139F is registered in the Google Cast SDK Developer Console
// and points to the following custom receiver:
// https://googlechrome.github.io/samples/presentation-api/receiver/index.html
const presentationRequest = new PresentationRequest('cast:EF1A139F');

// Make this presentation the default one when using the "Cast" browser menu.
navigator.presentation.defaultRequest = presentationRequest;

let presentationConnection;

// Start presentation on button click
document.getElementById('startPresentation').addEventListener('click', function() {
    if (!navigator.presentation) {
        alert('Presentation API not supported on this browser.');
        return;
    }

    log('Starting presentation request...');
    presentationRequest.start()
    .then(connection => {
        presentationConnection = connection;
        log('> Connected to ' + connection.url + ', id: ' + connection.id);

        connection.addEventListener('connect', function() {
            log('Presentation connected.');
        });

        connection.addEventListener('close', function() {
            log('Presentation closed.');
        });

        connection.addEventListener('terminate', function() {
            log('Presentation terminated.');
        });

        connection.addEventListener('message', function(event) {
            log('Message received:', event.data);
        });

        // Save the connection object for later use
        window.presentationConnection = connection;
    })
    .catch(error => {
        log('Unable to start presentation:', error);
    });
});


document.getElementById('presentbutton1').addEventListener('click', function() {
  if (window.presentationConnection && window.presentationConnection.state === 'connected') {
      window.presentationConnection.send(JSON.stringify({action: 'play', url: 'videos/video.mp4'}));
  } else {
      console.log('Presentation connection is not established or no longer active.');
  }
});

document.getElementById('presentbutton2').addEventListener('click', function() {
  if (window.presentationConnection && window.presentationConnection.state === 'connected') {
      window.presentationConnection.send(JSON.stringify({action: 'play', url: 'videos/video2.mp4'}));
  } else {
      console.log('Presentation connection is not established or no longer active.');
  }
});

document.getElementById('presentbutton3').addEventListener('click', function() {
  if (window.presentationConnection && window.presentationConnection.state === 'connected') {
      window.presentationConnection.send(JSON.stringify({action: 'play', url: 'videos/video3.mp4'}));
  } else {
      console.log('Presentation connection is not established or no longer active.');
  }
});


function switchSection(currentSectionId) {
  const sections = document.querySelectorAll('.section'); // Select all sections
  let currentIndex = 0; // Default to show the first if nothing is found
  // Find the index of the currently active section
  sections.forEach((section, index) => {
      if (section.id === currentSectionId) {
          currentIndex = index;
      }
      section.style.display = 'none'; // Hide all sections
  });
  // Calculate the next section index
  const nextIndex = (currentIndex + 1) % sections.length; // Loop back to the first after the last
  sections[nextIndex].style.display = 'block'; // Show the next section
}

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      toTop.classList.add("active");
    } else {
      toTop.classList.remove("active");
    }
  });
