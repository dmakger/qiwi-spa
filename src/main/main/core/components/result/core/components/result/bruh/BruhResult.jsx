import React from 'react';
import cl from "./_BruhResult.module.scss";
import ResultCore from "../core/components/result_core/ResultCore";

const BruhResult = ({price, percent, className, ...props}) => {
    return (
        <ResultCore price={price} percent={percent} classNameItem={cl.item} className={[className, cl.block].join(" ")} {...props} />
    );
};

export default BruhResult;