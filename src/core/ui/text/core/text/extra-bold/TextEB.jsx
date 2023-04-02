import React from 'react';

import cl from "./_TextEB.module.scss";
import Text from "../core/text/Text";

const TextEB = ({className, children, ...props}) => {
    return <Text className={[className, cl.text].join(" ")} {...props}>{children}</Text>
};

export default TextEB;