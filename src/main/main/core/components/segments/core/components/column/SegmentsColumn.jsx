import React from 'react';
import cl from './_SegmentsColumn.module.scss'
import Text36EB from "../../../../../../../../core/ui/text/36/Text36EB";
import AutoCell from "./core/components/cell/auto/AutoCell";

const SegmentsColumn = ({title, data, className, ...props}) => {
    return (
        <div className={[className, cl.column].join(" ")} {...props}>
            <Text36EB className={cl.title}>{title}</Text36EB>
            <div className={cl.content}>
                {data.map((title, index) => (
                    <AutoCell key={index} title={title} className={cl.cell} />
                ))}
            </div>
        </div>
    );
};

export default SegmentsColumn;