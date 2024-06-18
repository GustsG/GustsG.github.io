var presentationRequest;

    document.getElementById('startPresentation').addEventListener('click', function() {
        if (!navigator.presentation) {
            alert('Presentation API not supported on this browser.');
            return;
        }

        presentationRequest = new PresentationRequest(['secondary-screen.html']);
        
        presentationRequest.start().then(function(presentationConnection) {
            console.log('Presentation started. Connection ID:', presentationConnection.id);

            presentationConnection.onconnect = function() {
                console.log('Presentation connected.');
            };

            presentationConnection.onterminate = function() {
                console.log('Presentation terminated.');
            };

            presentationConnection.onmessage = function(event) {
                console.log('Message received:', event.data);
            };

            // Save the connection object for later use
            window.presentationConnection = presentationConnection;
        }).catch(function(error) {
            console.error('Unable to start presentation:', error);
        });
});

document.getElementById('presentbutton1').addEventListener('click', function() {
  if (window.presentationConnection && window.presentationConnection.state === 'connected') {
      window.presentationConnection.send(JSON.stringify({action: 'play', url: 'videos/video.mp4'}));
  } else {
      console.log('Presentation connection is not established or no longer active.');
  }
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
  });

