import React from 'react';
import NiceResult from "../nice/NiceResult";
import BruhResult from "../bruh/BruhResult";
import MiddleResult from "../middle/MiddleResult";

const AutoResult = ({price, percent, className, ...props}) => {
    if (typeof(price) === 'number') {
        if (price > 0)
            return <NiceResult price={price} percent={percent} className={className} {...props} />
        else if (price < 0)
            return <BruhResult price={price} percent={percent} className={className} {...props} />
    }
    return <MiddleResult price={price} percent={percent} className={className} {...props} />
};

export default AutoResult;