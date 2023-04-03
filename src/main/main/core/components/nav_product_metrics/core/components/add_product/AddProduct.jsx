import React, {useState} from 'react';
import ButtonAdd from "./core/components/add_button/ButtonAdd";
import cl from './_AddProduct.module.scss'
import ModalProduct from "./core/components/modal/ModalProduct";

const AddProduct = ({archiveProductMetrics, addProductOnWindow, className, ...props}) => {
    const [isActive, setIsActive] = useState(false)
    const [newData, setNewData] = useState([])
    const addItemInData = (v) => {setNewData([v, ...newData])}
    const popItemFromData = (v) => {newData.filter(el => el !== v)}

    const closeWindowOnClick = () => {
        setIsActive(false)
        setNewData([])
    }
    const addProductOnClick = () => {
        addProductOnWindow(newData)
        closeWindowOnClick()
    }
    return (
        <div className={className} {...props}>
            <ButtonAdd onClick={() => setIsActive(!isActive)} className={cl.button}/>
            <ModalProduct className={isActive ? cl.active : cl.default}
                          archiveProductMetrics={archiveProductMetrics}
                          addItemInData={addItemInData}
                          popItemFromData={popItemFromData}
                          closeWindowOnClick={closeWindowOnClick}
                          addProductOnClick={addProductOnClick} />
        </div>
    );
};

export default AddProduct;