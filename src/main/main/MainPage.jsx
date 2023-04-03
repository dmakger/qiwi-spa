import React, {Component} from 'react';
import {MainPageWrapperContext} from "../core/wrapper/core/context/MainPageWrapperContext";
import cl from './_MainPage.module.scss'
import {getAllProductMetrics, getStartProductMetrics} from "./core/services/services";
import NavProductMetrics from "./core/components/nav_product_metrics/NavProductMetrics";
import {addList, popList} from "../../core/service/list";
import Segments from "./core/components/segments/Segments";

class MainPage extends Component {
    static contextType = MainPageWrapperContext;

    constructor(props) {
        super(props);
        this.state = {
            productMetrics: getStartProductMetrics(),
            archiveProductMetrics: getAllProductMetrics(),
        }
    }

    // WINDOW
    addProductOnWindow(newState) {
        this.addListProductMetrics(newState)
        this.popListArchiveProductMetrics(newState)
    }

    popProductFormWindow(newState) {
        this.addListArchiveProductMetrics(newState)
        this.popListProductMetrics(newState)
    }

    // PRODUCT METRICS
    setProductMetrics(newState) {
        this.setState({
            productMetrics: newState
        })
    }

    addListProductMetrics(list) {
        this.setProductMetrics(addList(this.state.productMetrics, list))
    }

    addProductMetrics(v) {
        this.setProductMetrics(
            [v, ...this.state.productMetrics]
        )
    }

    popProductMetrics(v) {
        this.setProductMetrics(
            this.state.productMetrics.filter(el => el !== v)
        )
    }

    popListProductMetrics(list) {
        this.setProductMetrics(popList(this.state.productMetrics, list))
    }


    // ARCHIVE
    setArchiveProductMetrics(newState) {
        this.setState({
            archiveProductMetrics: newState
        })
    }

    addArchiveProductMetrics(v) {
        this.setArchiveProductMetrics(
            [v, ...this.state.archiveProductMetrics]
        )
    }

    addListArchiveProductMetrics(list) {
        this.setArchiveProductMetrics(addList(this.state.archiveProductMetrics, list))
    }

    popListArchiveProductMetrics(list) {
        this.setArchiveProductMetrics(popList(this.state.archiveProductMetrics, list))
    }

    render() {
        const {productMetrics, archiveProductMetrics} = this.state;
        return (
            <div className={cl.content}>
                <NavProductMetrics productMetrics={productMetrics}
                                   setProductMetrics={this.setProductMetrics.bind(this)}
                                   archiveProductMetrics={archiveProductMetrics}
                                   addProductOnWindow={this.addProductOnWindow.bind(this)}
                                   popProductFormWindow={this.popProductFormWindow.bind(this)}
                                   className={cl.left}/>
                <Segments className={cl.segments} />

            </div>
        );
    }
}

export default MainPage;
