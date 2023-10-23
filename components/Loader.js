import React, { useEffect, useState } from 'react';
import './Loader.css'; // Make sure to import your CSS file

function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const loader = document.querySelector('.loader');

    const handleTransitionEnd = () => {
        if (loader.parentNode === document.body) {
          document.body.removeChild(loader);
        }
      };
      

    const onLoad = () => {
      loader.classList.add('loader--hidden');
      loader.addEventListener('transitionend', handleTransitionEnd);
    };

    window.addEventListener('load', onLoad);

    return () => {
      window.removeEventListener('load', onLoad);
    };
  }, []);

  return (
    <div className={`loader ${hidden ? 'loader--hidden' : ''}`}>
      <div className="loader__spinner"></div>
    </div>
  );
}

export default Loader;
