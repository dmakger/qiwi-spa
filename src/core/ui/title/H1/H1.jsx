import React from 'react';
import cl from "./_H1.module.scss";
import clCommon from "../core/styles/_H.module.scss"

const H1 = ({children, className, ...props}) => {
    return (
        <h1 className={[className, cl.title, clCommon.title].join(" ")} {...props}>{children}</h1>
    );
};

export default H1;