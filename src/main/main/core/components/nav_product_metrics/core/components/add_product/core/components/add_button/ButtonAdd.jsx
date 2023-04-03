import React, {useState} from 'react';
import cl from './_ButtonAdd.module.scss'
import addBlackSVG from '../../../../../../../../../../../core/static/img/add-fill-black.svg'
import addWhiteSVG from '../../../../../../../../../../../core/static/img/add-fill-white.svg'
import Text16EB from "../../../../../../../../../../../core/ui/text/16/Text16EB";

const ButtonAdd = ({className, ...props}) => {
    const [image, setImage] = useState(addBlackSVG);
    const swapImage = (newImage) => {
        setImage(newImage)
    }
    return (
        <button className={[cl.button, className].join(" ")}
             onMouseOver={() => swapImage(addWhiteSVG)}
             onMouseOut={() => swapImage(addBlackSVG)}
             {...props}>
            <img src={image} alt="add" className={cl.image}/>
            <Text16EB className={cl.title}>Добавить продкутовую метрику</Text16EB>
        </button>
    );
};

export default ButtonAdd;