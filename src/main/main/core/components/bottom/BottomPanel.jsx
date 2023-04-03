import React from 'react';
import cl from './_BottomPanel.module.scss'
import Text32EB from "../../../../../core/ui/text/32/Text32EB";

const BottomPanel = ({current, className, ...props}) => {
    return (
        <div className={[cl.panel, className].join(" ")} {...props}>
            <div className={cl.content}>
                <Text32EB className={cl.title}>Время разработки:</Text32EB>
                <div className={cl.list}>
                    <Text32EB className={cl.listTitle}>{current.toString().toLowerCase()}</Text32EB>
                </div>
            </div>
        </div>
    );
};

export default BottomPanel;