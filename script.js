
window.onload = function() {
    const background = document.querySelector('.foreground');
    setInterval(function() {
        const opacity = Math.random(); // Generate a random opacity value between 0 and 1
        background.style.opacity = opacity; // Apply the random opacity value to the background image
    }, 100); // Change opacity every 2 seconds (adjust as needed)
};
window.onload = function() {
    const gif = document.getElementById('gif');
    const audio = document.getElementById('audio');

    // Set timeout to hide the GIF after 2 seconds (adjust as needed)
    setTimeout(function() {
        gif.style.display = 'none';
        playSound();
    }, 2000); // Hide after 2 seconds (2000 milliseconds)

    function playSound() {
        audio.play(); // Play the sound
    }
};
document.addEventListener('DOMContentLoaded', function() {
  var overlay = document.getElementById('overlay');
  var clickSound = document.getElementById('clickSound');

  // Hide the overlay and play sound when clicked
  overlay.addEventListener('click', function() {
    overlay.style.display = 'none';
    clickSound.play();
  });
});
function checkHash() {
    // Check if the URL contains "#play"
    if (window.location.hash === '#play') {
      // If yes, display the image with a fade-in effect
      fadeIn(document.getElementById('image-container'));
    } else {
      // Otherwise, hide the image
      document.getElementById('image-container').style.opacity = '0';
    }
  }

  function fadeIn(element) {
    let opacity = 0;
    element.style.display = 'block';
    let fadeInInterval = setInterval(function() {
      if (opacity < 1) {
        opacity += 0.1;
        element.style.opacity = opacity;
      } else {
        clearInterval(fadeInInterval);
      }
    }, 50);
  }

  // Check hash when the page loads
  window.addEventListener('load', checkHash);

  // Check hash when the hash changes
  window.addEventListener('hashchange', checkHash);
  function checkHash() {
    // Check if the URL contains "#play"
    if (window.location.hash === '#play') {
      // If yes, display the image
      document.getElementById('image-container').style.opacity = '1';
    } else {
      // Otherwise, hide the image
      document.getElementById('image-container').style.opacity = '0';
    }
  }

  // Check hash when the page loads
  window.addEventListener('load', checkHash);

  // Check hash when the hash changes
  window.addEventListener('hashchange', checkHash);
  document.getElementById('overlay').addEventListener('load', function() {
    this.addEventListener('ended', function() {
      this.currentTime = 0;
      this.pause();
    });
  });
