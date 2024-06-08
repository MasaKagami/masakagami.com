import React, { useEffect } from 'react';

function MusicRedirect() {
  useEffect(() => {
    window.location.href = "https://www.youtube.com/watch?v=ZJM4AQSbZDk&ab_channel=MuraMasaVEVO";
  }, []);

  return (
    <div>Redirecting to music...</div>
  );
}

export default MusicRedirect;