import React from 'react';
import cl from './_NiceCell.module.scss'
import Cell from "../core/components/cell/Cell";

const NiceCell = ({title, className, ...props}) => {
    return (
        <Cell title={title} classNameTitle={cl.title} className={[cl.cell, className].join(" ")} {...props} />
    );
};

export default NiceCell;