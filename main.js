document.querySelectorAll(".presentButton").forEach(function(button) {
  button.addEventListener('click', function() {
  if (!navigator.presentation) {
      alert('Presentation API not supported on this browser.');
      return;
  }

  var presentationRequest = new PresentationRequest(['secondary-screen.html']);
  
  presentationRequest.start().then(function(presentationConnection) {
      console.log('Presentation started.', presentationConnection);
      // Handle the presentation connection state changes
      presentationConnection.onconnect = function() {
          console.log('Presentation connected.');
      };
      presentationConnection.onterminate = function() {
          console.log('Presentation terminated.');
      };
      presentationReturnValue.onmessage = function(event) {
          console.log('Message received:', event.data);
      };
  }).catch(function(error) {
      console.error('Unable to start presentation:', error);
  });
});
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

