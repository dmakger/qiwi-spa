import React from 'react';
import clCommon from "./core/styles/_Text24.module.scss";
import TextEB from "../core/text/extra-bold/TextEB";

const Text24R = ({className, children, ...props}) => {
    return <TextEB className={[className, clCommon.text].join(" ")} {...props}>{children}</TextEB>
};

export default Text24R;