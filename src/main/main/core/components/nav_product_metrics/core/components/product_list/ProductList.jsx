import React from 'react';
import cl from './_ProductList.module.scss'
import ProductListItem from "./core/components/product_list_item/ProductListItem";

const ProductList = ({list, setList, popProductFormWindow, className, ...props}) => {

    return (
        <div className={[className, cl.list].join(" ")} {...props}>
            {list.map(item => (
                <ProductListItem className={cl.listItem}
                                 popProductFormWindow={popProductFormWindow}
                                 key={item.index}
                                 title={item.title}
                                 index={item.index}
                                 list={list}
                                 setList={setList}
                                 size={item.size}
                                 sizes={item.sizes} />
            ))}
        </div>
    );
};

export default ProductList;