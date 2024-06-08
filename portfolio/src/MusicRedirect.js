import React, { useEffect } from 'react';

function MusicRedirect() {
  useEffect(() => {
    // Array of YouTube video URLs
    const videos = [
      "https://www.youtube.com/watch?v=ZJM4AQSbZDk&ab_channel=MuraMasaVEVO",
      "https://www.youtube.com/watch?v=93ASUImTedo&ab_channel=DisclosureVEVO",
      "https://www.youtube.com/watch?v=tG35R8F2j8k&ab_channel=ChildishGambinoVEVO",
      "https://www.youtube.com/watch?v=F6VfsJ7LAlE&ab_channel=LIVELOVEASAPVEVO",
      "https://www.youtube.com/watch?v=q4GJVOMjCC4",
      "https://www.youtube.com/watch?v=GxgqpCdOKak",
      "https://www.youtube.com/watch?v=9Z55sZ2oVY4&ab_channel=MiguelVEVO",
      "https://www.youtube.com/watch?v=rKlA5tRu6f0&ab_channel=KAYTRANADA"


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
