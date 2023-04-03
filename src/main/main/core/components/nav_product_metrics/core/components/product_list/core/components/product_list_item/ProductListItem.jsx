import React, {useState} from 'react';
import cl from './_ProductListItem.module.scss';
import Text24EB from "../../../../../../../../../../../core/ui/text/24/Text24EB";
import closeBlackSVG from "../../../../../../../../../../../core/static/img/close-fill-black.svg"
import closeRedSVG from "../../../../../../../../../../../core/static/img/close-fill-red.svg"

const symbolsTrue = '012345689,'

const ProductListItem = ({title, size, sizes, index, list, setList,
                             popProductFormWindow, className, ...props}) => {
    const [isActive, setIsActive] = useState(false);
    const [indexSize, setIndexSize] = useState(0);
    const [closeImage, setCloseImage] = useState(closeBlackSVG);

    const getDigit = () => {
        for (let i = 0; i < list.length; i++) {
            if (list[i].index === index)
                return i
        }
        return null
    }
    const curIndex = getDigit()

    const popELem = () => {
        popProductFormWindow([list[curIndex]])
    }

    const setDigit = (v) => {
        list[curIndex].digit = v
        setList(list)
    }

    const onClickSize = () => {
        if (indexSize === 1)
            setIndexSize(0)
        else
            setIndexSize(1)
        setDigit("")
    }

    const inputChange = (e) => {
        const value = e.target.value
        if (symbolsTrue.indexOf(value[value.length-1]) > -1 || (value === '')) {
            e.preventDefault();
            setDigit(value)
        }
    }

    return (
        <div className={[cl.product, className, isActive ? cl.active : ""].join(" ")} {...props}>
            <img onClick={popELem}
                 src={closeImage}
                 alt="close"
                 onMouseEnter={() => setCloseImage(closeRedSVG)}
                 onMouseOut={() => setCloseImage(closeBlackSVG)}
                 className={cl.close}/>
            <Text24EB className={cl.title}>{title}</Text24EB>
            <div className={cl.field}>
                <input placeholder="0"
                       value={list[curIndex].digit}
                       className={cl.fieldItem}
                       onFocus={() => setIsActive(true)}
                       onBlur={() => setIsActive(false)}
                       onChange={e => inputChange(e)}
                       type="text" />
                <button className={cl.size} onClick={onClickSize}>
                    <Text24EB className={cl.sizeTitle}>{sizes[indexSize]}</Text24EB>
                </button>
            </div>
        </div>
    );
};

export default ProductListItem;