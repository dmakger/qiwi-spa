import React from 'react';
import clCommon from "./core/styles/_Text24.module.scss";
import TextR from "../core/text/regular/TextR";

const Text24R = ({className, children, ...props}) => {
    return <TextR className={[className, clCommon.text].join(" ")} {...props}>{children}</TextR>
};

export default Text24R;