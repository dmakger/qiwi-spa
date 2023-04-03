import React from 'react';
import cl from './_MiddleCell.module.scss'
import Cell from "../core/components/cell/Cell";

const MiddleCell = ({title, className, ...props}) => {
    return (
        <Cell title={title} className={[cl.cell, className].join(" ")} {...props} />
    );
};

export default MiddleCell;