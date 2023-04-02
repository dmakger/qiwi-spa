import React from 'react';
import clCommon from "./core/styles/_Text32.module.scss";
import TextEB from "../core/text/extra-bold/TextEB";

const Text32EB = ({className, children, ...props}) => {
    return <TextEB className={[className, clCommon.text].join(" ")} {...props}>{children}</TextEB>
};

export default Text32EB;