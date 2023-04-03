import React from 'react';
import cl from './_NavProductMetrics.module.scss'
import H1 from "../../../../../core/ui/title/H1/H1";
import AddProduct from "./core/components/add_product/AddProduct";
import ProductList from "./core/components/product_list/ProductList";

const NavProductMetrics = ({productMetrics, setProductMetrics, archiveProductMetrics,
                               addProductOnWindow, popProductFormWindow, className, ...props}) => {
    return (
        <div className={cl.block} {...props}>
            <H1 className={cl.title}>UNIT-экономика</H1>
            <div className={cl.panel}>
                <AddProduct className={cl.panelItem}
                            archiveProductMetrics={archiveProductMetrics}
                            addProductOnWindow={addProductOnWindow} />
                <ProductList list={productMetrics}
                             setList={setProductMetrics}
                             popProductFormWindow={popProductFormWindow}
                             className={cl.products} />
            </div>
        </div>
    );
};

export default NavProductMetrics;