import React from 'react';

import cl from "./_TextR.module.scss";
import Text from "../core/text/Text";

const TextR = ({className, children, ...props}) => {
    return <Text className={[className, cl.text].join(" ")} {...props}>{children}</Text>
};

export default TextR;