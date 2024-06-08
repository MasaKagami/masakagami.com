import React, { useEffect, useState } from 'react';
import './outro.css';
import MusicButton from '../../assets/music-button.png';
import Arrow from '../../assets/arrow.png'
import Arrow2 from '../../assets/arrow-2.png'
import Arrow3 from '../../assets/arrow-3.png'

const Outro = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = [
    { text: 'THANKS', colorClass: 'outro-english' },
    { text: 'MERCI', colorClass: 'outro-french' },
    { text: '有難うございます', colorClass: 'outro-japanese' },
    { text: 'GRACIAS', colorClass: 'outro-spanish' },
    { text: 'GRAZIE', colorClass: 'outro-italian' },
    { text: 'DANKE', colorClass: 'outro-german' },
    { text: 'OBRIGADO', colorClass: 'outro-portuguese' }
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex(currentIndex =>
        currentIndex === words.length - 1 ? 0 : currentIndex + 1
      );
    }, 1600);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id='outro'>
      <div className='outro-header'>
        <div className='rotating-text'>
          <p>
            {words.map((word, index) => (
              <span key={index} className={`word ${word.colorClass} ${index === currentWordIndex ? 'visible' : 'hidden'}`}>
                {word.text.split('').map((letter, idx) => (
                  <span key={idx} className='letter'>{letter}</span>
                ))}
              </span>
            ))}
          </p>
        </div>
        <h1>Thank you for making it to the end.</h1>
      </div>
      <div className='outro-content-container'>
        <div className='outro-content'>
          <p><br></br>I hope you've enjoyed my portfolio. Click the button to the right<br/> to listen to some music I've curated for you.</p>
          <img src={Arrow} alt='arrow' className='outro-arrow-1'/>
          <img src={Arrow2} alt='arrow 2' className='outro-arrow-2'/>
          <img src={Arrow3} alt='arrow 3' className='outro-arrow-3'/>
          {/* <img src={Arrow2} alt='arrow2' className='outro-arrow-2'/>
          <img src={Arrow2} alt='arrow2' className='outro-arrow-2'/> */}
        </div>
        <a href='/music' target="_blank" rel="noopener noreferrer" className='outro-button'>
          <img src={MusicButton} alt='button'/>
        </a>
      </div>
    </section>
  );
}

export default Outro;
