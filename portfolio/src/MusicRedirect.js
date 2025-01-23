import React, { useEffect } from 'react';

function MusicRedirect() {
  useEffect(() => {
    // Array of YouTube video URLs
    const videos = [
      "https://soundcloud.com/jodyekagami"


      // Add more URLs as needed
    ];

    // Randomly select a video from the array
    const randomVideo = videos[Math.floor(Math.random() * videos.length)];

    // Redirect to the randomly selected video
    window.location.href = randomVideo;
  }, []);

  return (
    <div>Redirecting to masa's playlists...</div>
  );
}

export default MusicRedirect;
