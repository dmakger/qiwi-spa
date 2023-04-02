import React from 'react';
import cl from './_Button.module.scss'
import clCommon from "../../../../core/styles/_ButtonCore.module.scss"

const Button = ({className, children, ...props}) => {
    return (
        <button className={[cl.button, className, clCommon.button].join(" ")} {...props}>{children}</button>
    );
};

export default Button;