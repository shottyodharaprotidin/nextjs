import React from 'react';
import Skycons, { SkyconsType } from 'react-skycons';
const RainyWeather = () => {
    return (
        <Skycons
        color="white"
        type={SkyconsType.SLEET} 
        animate={true}
        size={70}
        resizeClear={true}
      />
    );
};

export default RainyWeather;