import React from 'react';
import cl from "./_ButtonDefault32.module.scss"
import ButtonDefault from "../core/ui/button/ButtonDefault";
import Text32EB from "../../../../text/32/Text32EB";
import clCommon from "../../../core/styles/_ButtonCore.module.scss";

const ButtonDefault32EB = ({className, children, ...props}) => {
    return (
        <ButtonDefault className={[className, cl.button].join(" ")} {...props}>
            <Text32EB className={clCommon.title}>{children}</Text32EB>
        </ButtonDefault>
    )
};

export default ButtonDefault32EB;