import React from 'react';
import cl from "./_ModalProduct.module.scss";
import ButtonDefault16EB from "../../../../../../../../../../../core/ui/button/click/default/16/ButtonDefault16EB";
import ModalProductList from "./core/components/list/ModalProductList";

const ModalProduct = ({archiveProductMetrics, closeWindowOnClick, addProductOnClick,
                          addItemInData, popItemFromData, className, ...props}) => {

    return (
        <div className={[cl.modal, className].join(" ")} {...props}>
            <ModalProductList list={archiveProductMetrics}
                              addItemInData={addItemInData}
                              popItemFromData={popItemFromData}
                              className={cl.list}/>
            <div className={cl.modalNav}>
                <ButtonDefault16EB className={cl.modalNavItem} onClick={closeWindowOnClick}>Закрыть</ButtonDefault16EB>
                <ButtonDefault16EB className={cl.modalNavItem} onClick={addProductOnClick}>Добавить</ButtonDefault16EB>
            </div>
        </div>
    );
};

export default ModalProduct;