import React from 'react';
import cl from "./_ModalProductList.module.scss";
import ModalProductListItem from "./core/components/item/ModalProductListItem";

const ModalProductList = ({list, addItemInData, popItemFromData, className, ...props}) => {
    return (
        <div className={[cl.list, className].join(" ")} {...props}>
            {list.map(item => (
                <ModalProductListItem key={item.index} el={item}
                                      addItemInData={addItemInData}
                                      popItemFromData={popItemFromData} />
            ))}
        </div>
    );
};

export default ModalProductList;