import React from 'react';
import AutoResult from "./core/components/result/auto/AutoResult";

const Result = ({className, ...props}) => {
    let price = -123043;
    let percent = 123;

    return <AutoResult price={price} percent={percent} className={className} {...props}/>
};

export default Result;