import React, {Component} from 'react';
import {MainPageWrapperContext} from "../core/wrapper/core/context/MainPageWrapperContext";
import cl from './_MainPage.module.scss'
import {getAllProductMetrics, getStartProductMetrics, timeDevList} from "./core/services/services";
import NavProductMetrics from "./core/components/nav_product_metrics/NavProductMetrics";
import {addList, popList} from "../../core/service/list";
import Segments from "./core/components/segments/Segments";
import Result from "./core/components/result/Result";
import BottomPanel from "./core/components/bottom/BottomPanel";

class MainPage extends Component {
    static contextType = MainPageWrapperContext;

    constructor(props) {
        super(props);
        this.state = {
            productMetrics: getStartProductMetrics(),
            archiveProductMetrics: getAllProductMetrics(),
            currentTimeDev: timeDevList[0]
        }
    }

    setCurrentTimeDev(newState) {
        this.setState({currentTimeDev: newState})
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

    addListArchiveProductMetrics(list) {
        this.setArchiveProductMetrics(addList(this.state.archiveProductMetrics, list))
    }

    popListArchiveProductMetrics(list) {
        this.setArchiveProductMetrics(popList(this.state.archiveProductMetrics, list))
    }

    render() {
        const {productMetrics, archiveProductMetrics, currentTimeDev} = this.state;
        return (
            <div className={cl.block}>
                <div className={cl.content}>
                    <NavProductMetrics productMetrics={productMetrics}
                                       className={cl.products}
                                       setProductMetrics={this.setProductMetrics.bind(this)}
                                       archiveProductMetrics={archiveProductMetrics}
                                       addProductOnWindow={this.addProductOnWindow.bind(this)}
                                       popProductFormWindow={this.popProductFormWindow.bind(this)}/>
                    <Segments className={cl.segments}/>
                    <Result className={cl.result}/>
                </div>

                <BottomPanel current={currentTimeDev} setCurrent={this.setCurrentTimeDev.bind(this)} className={cl.bottom}/>
            </div>
        );
    }
}

export default MainPage;
