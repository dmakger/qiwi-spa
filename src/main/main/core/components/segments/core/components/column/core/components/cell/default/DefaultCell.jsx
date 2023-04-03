import React from 'react';
import Cell from "../core/components/cell/Cell";

const DefaultCell = ({title, className, ...props}) => {
    return (
        <Cell title={title} className={className} {...props} />
    );
};

export default DefaultCell;