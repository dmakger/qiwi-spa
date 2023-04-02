import React from 'react';
import cl from "./_ButtonToDefault32.module.scss"
import ButtonToDefault from "../core/ui/button/ButtonToDefault";
import Text32EB from "../../../../text/32/Text32EB";
import clCommon from "../../../core/styles/_ButtonCore.module.scss";


const ButtonToDefault32EB = ({className, children, ...props}) => {
    return (
        <ButtonToDefault className={[className, cl.button].join(" ")} {...props}>
            <Text32EB className={clCommon.title}>{children}</Text32EB>
        </ButtonToDefault>
    )
};

export default ButtonToDefault32EB;