import React, { useEffect } from 'react';

function MusicRedirect() {
  useEffect(() => {
    // Array of YouTube video URLs
    const videos = [
      "https://www.youtube.com/watch?v=ZJM4AQSbZDk&ab_channel=MuraMasaVEVO",
      "https://www.youtube.com/watch?v=93ASUImTedo&ab_channel=DisclosureVEVO",
      "https://www.youtube.com/watch?v=tG35R8F2j8k&ab_channel=ChildishGambinoVEVO",
      // Add more URLs as needed
    ];

    // Randomly select a video from the array
    const randomVideo = videos[Math.floor(Math.random() * videos.length)];

    // Redirect to the randomly selected video
    window.location.href = randomVideo;
  }, []);

  return (
    <div>Redirecting to a music video...</div>
  );
}

export default MusicRedirect;
