import React, {useState} from 'react';
import cl from './_ModalBottomPanel.module.scss'
import TitleModal from "./core/components/title/TitleModal";
import ContentModal from "./core/components/content/ContentModal";

const ModalBottomPanel = ({list, active, setActive, className, ...props}) => {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <div className={[cl.modal, className].join(" ")}
             onMouseOver={() => setIsVisible(true)}
             onMouseOut={() => setIsVisible(false)}
             {...props}>
            <TitleModal title={active} />
            <ContentModal list={list}
                          className={isVisible ? cl.active : cl.default}
                          active={active} setActive={setActive} />
        </div>
    );
};

export default ModalBottomPanel;