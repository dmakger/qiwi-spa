import React from 'react';
import clCommon from "./core/styles/_Text36.module.scss";
import TextEB from "../core/text/extra-bold/TextEB";

const Text36EB = ({className, children, ...props}) => {
    return <TextEB className={[className, clCommon.text].join(" ")} {...props}>{children}</TextEB>
};

export default Text36EB;