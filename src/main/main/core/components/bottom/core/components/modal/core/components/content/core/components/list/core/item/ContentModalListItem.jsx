import React from 'react';
import cl from './_ContentModalListItem.module.scss'
import Text24EB from "../../../../../../../../../../../../../../../../core/ui/text/24/Text24EB";

const ContentModalListItem = ({title, setActive, className, ...props}) => {
    const handleOnClick = () => {
        setActive(title)
    }
    return (
        <button className={[cl.block, className].join(" ")} onClick={handleOnClick} {...props}>
            <Text24EB className={cl.title}>{title}</Text24EB>
        </button>
    );
};

export default ContentModalListItem;