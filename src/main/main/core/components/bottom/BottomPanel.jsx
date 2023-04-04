import React from 'react';
import cl from './_BottomPanel.module.scss'
import Text32EB from "../../../../../core/ui/text/32/Text32EB";
import ModalBottomPanel from "./core/components/modal/ModalBottomPanel";
import {timeDevList} from "../../services/services";

const BottomPanel = ({current, setCurrent, className, ...props}) => {
    return (
        <div className={[cl.panel, className].join(" ")} {...props}>
            <div className={cl.content}>
                <Text32EB className={cl.title}>Время разработки:</Text32EB>
                <ModalBottomPanel list={timeDevList} active={current} setActive={setCurrent} />
            </div>
        </div>
    );
};

export default BottomPanel;