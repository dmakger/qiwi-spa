import React from 'react';
import clCommon from "./core/styles/_Text16.module.scss";
import TextEB from "../core/text/extra-bold/TextEB";

const Text16EB = ({className, children, ...props}) => {
    return <TextEB className={[className, clCommon.text].join(" ")} {...props}>{children}</TextEB>
};

export default Text16EB;