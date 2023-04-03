import React from 'react';
import cl from "./_ResultCore.module.scss";
import Text48EB from "../../../../../../../../../../../core/ui/text/48/Text48EB";
import {moneyInText} from "../../../../../../../../../../../core/service/moneyInText";
import Text32EB from "../../../../../../../../../../../core/ui/text/32/Text32EB";

const getPrice = (price) => {
    return `${moneyInText(price)} руб.`
}

const getPercent = (price) => {
    return `${moneyInText(price)}%`
}

const ResultCore = ({price, percent, className, classNameItem, ...props}) => {

    return (
        <div className={[className, cl.block].join(" ")} {...props}>
            <Text48EB className={cl.title}>Итог</Text48EB>
            <div className={cl.result}>
                <Text32EB className={[cl.resultItem, classNameItem].join(" ")}>{getPrice(price)}</Text32EB>
                <Text32EB className={[cl.resultItem, classNameItem].join(" ")}>{getPercent(percent)}</Text32EB>
            </div>
        </div>
    );
};

export default ResultCore;