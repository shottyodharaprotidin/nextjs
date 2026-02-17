import React from 'react';
import Skycons, { SkyconsType } from 'react-skycons';

const SunnyWeather = () => {
    return (
        <Skycons
        color="white"
        type={SkyconsType.PARTLY_CLOUDY_DAY} 
        animate={true}
        size={70}
        resizeClear={true}
      />
    );
};

export default SunnyWeather;