import React from 'react';
import cl from './_ContentModalList.module.scss'
import ContentModalListItem from "./core/item/ContentModalListItem";

const ContentModalList = ({list, active, setActive, className, ...props}) => {
    return (
        <div className={[cl.list, className].join(" ")} {...props}>
            {list.map((item, index) => (
                <>
                    {item !== active &&
                        <ContentModalListItem title={item}
                                              key={index}
                                              className={cl.item}
                                              setActive={setActive} />
                    }
                </>
            ))}
        </div>
    );
};

export default ContentModalList;