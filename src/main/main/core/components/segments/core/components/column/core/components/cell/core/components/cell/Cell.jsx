import React from 'react';
import cl from './_Cell.module.scss'
import Text32EB from "../../../../../../../../../../../../../../core/ui/text/32/Text32EB";

const Cell = ({title, classNameTitle, className, ...props}) => {
    return (
        <div className={[cl.cell, className].join(" ")} {...props}>
            <Text32EB className={[cl.title, classNameTitle].join(" ")}>{title}</Text32EB>
        </div>
    );
};

export default Cell;