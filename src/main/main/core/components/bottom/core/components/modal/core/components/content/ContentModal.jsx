import React from 'react';
import cl from './_ContentModal.module.scss'
import ContentModalList from "./core/components/list/ContentModalList";

const ContentModal = ({list, active, setActive, className, ...props}) => {
    return (
        <div className={[className, cl.block].join(" ")} {...props}>
            <ContentModalList list={list} active={active} setActive={setActive} />
        </div>
    );
};

export default ContentModal;