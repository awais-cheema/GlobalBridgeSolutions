const videoBoxes = document.querySelectorAll('.boxes');
const videos = document.querySelectorAll('.video-s3');

// Loop through each video box and attach event listeners
videoBoxes.forEach((videoBox, index) => {
  const video = videos[index]; // Get the corresponding video
  
  // Play video on hover
  videoBox.addEventListener('mouseenter', function() {
    video.play();
    video.muted = true; // Muted to avoid autoplay issues
    video.loop = true;  // Loop to play continuously
  });

  // Pause video when hover ends
  videoBox.addEventListener('mouseleave', function() {
    video.pause();
  });
});

const pkBtn = document.getElementById('PkBox');
const ukBtn = document.getElementById('ukBox');
const franceBtn = document.getElementById('frBox');
const germanyBtn = document.getElementById('gerBox');
const usBtn = document.getElementById('usBox');
const australiaBtn = document.getElementById('ausBox');

function contactPage() {
  window.location.href = 'contact-us.html';
}
pkBtn.addEventListener('click', contactPage);
ukBtn.addEventListener('click', contactPage);
franceBtn.addEventListener('click', contactPage);
germanyBtn.addEventListener('click', contactPage);
usBtn.addEventListener('click', contactPage);
australiaBtn.addEventListener('click', contactPage);