import React from 'react';
import cl from "./_ButtonDefault32.module.scss"
import ButtonDefault from "../core/ui/button/ButtonDefault";
import clCommon from "../../../core/styles/_ButtonCore.module.scss";
import Text16EB from "../../../../text/16/Text16EB";

const ButtonDefault16EB = ({className, children, ...props}) => {
    return (
        <ButtonDefault className={[className, cl.button].join(" ")} {...props}>
            <Text16EB className={clCommon.title}>{children}</Text16EB>
        </ButtonDefault>
    )
};

export default ButtonDefault16EB;