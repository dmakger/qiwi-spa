import React from 'react';
import cl from './_BruhCell.module.scss'
import Cell from "../core/components/cell/Cell";

const BruhCell = ({title, className, ...props}) => {
    return (
        <Cell title={title} classNameTitle={cl.title} className={[cl.cell, className].join(" ")} {...props} />
    );
};

export default BruhCell;