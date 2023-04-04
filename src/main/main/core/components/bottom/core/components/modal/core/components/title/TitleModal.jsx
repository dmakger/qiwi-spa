import React from 'react';
import cl from "./_TitleModal.module.scss";
import Text32EB from "../../../../../../../../../../../core/ui/text/32/Text32EB";

const TitleModal = ({title, className, ...props}) => {
    return (
        <div className={[cl.block, className].join(" ")} {...props}>
            <Text32EB className={cl.title}>{title.toString().toLowerCase()}</Text32EB>
        </div>
    );
};

export default TitleModal;