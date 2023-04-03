import React, {useState} from 'react';
import cl from "./_ModalProductListItem.module.scss";
import Text24EB from "../../../../../../../../../../../../../../../../../core/ui/text/24/Text24EB";

const ModalProductListItem = ({addItemInData, popItemFromData, el, className, ...props}) => {
    const [isActive, setIsActive] = useState(false)
    const itemOnClick = () => {
        if (isActive) {
            popItemFromData(el)
            setIsActive(false)
        } else {
            addItemInData(el)
            setIsActive(true)
        }
    }
    return (
        <div className={[cl.item, className, isActive ? cl.active : ""].join(" ")} onClick={itemOnClick} {...props}>
            <Text24EB className={cl.itemTitle}>{el.title}</Text24EB>
        </div>
    );
};

export default ModalProductListItem;