import React from 'react';
import clCommon from "./core/styles/_Text48.module.scss";
import TextEB from "../core/text/extra-bold/TextEB";

const Text48EB = ({className, children, ...props}) => {
    return <TextEB className={[className, clCommon.text].join(" ")} {...props}>{children}</TextEB>
};

export default Text48EB;