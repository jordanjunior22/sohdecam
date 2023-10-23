import React from 'react';
import './map.css'
function Map() {
  const iframeStyle = {
    border: '0',
    width: '100%',
  };

  return (
    <div className='map Flex-x-direction PaddingAll'>
      <div className='bamenda'>
        <h3 className='MarginTopAndBottom TextCenter AddOpacity'>Bamenda</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.2604520736363!2d10.1693281!3d5.9588125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105f1611c9ca28a3%3A0xc726c6ea9c2b087f!2sX559%2BGPG%2C%20Bamenda%2C%20Cameroon!5e0!3m2!1sen!2sus!4v1698064230129!5m2!1sen!2sus" 
        
        
        loading="lazy" 
        >
        </iframe>
      </div>
      
      <div className='mbouda'>
        <h3 className='MarginTopAndBottom TextCenter AddOpacity'>Mbouda</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.6539180414056!2d10.244390600000001!3d5.6180125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105fa00662baebf1%3A0xc6d48daf59451cc!2sJ69V%2B6Q2%2C%20Mbouda%2C%20Cameroon!5e0!3m2!1sen!2sus!4v1698064407998!5m2!1sen!2sus" 
        
        loading="lazy" 
        >
        </iframe>
      </div>

    </div>
  );
}

export default Map;
