
import React from 'react';
import Skycons, { SkyconsType } from 'react-skycons';
const CloudyWeather = () => {
    return (
        <Skycons
        color="white"
        type={SkyconsType.CLOUDY} 
        animate={true}
        size={70}
        resizeClear={true}
      />
    );
};

export default CloudyWeather;