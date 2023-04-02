import React, {Component} from 'react';
import {MainPageWrapperContext} from "../core/wrapper/core/context/MainPageWrapperContext";
import H1 from "../../core/ui/title/H1/H1";
import cl from './_MainPage.module.scss'

class MainPage extends Component {
    static contextType = MainPageWrapperContext;

    render() {
        return (
            <div className={cl.content}>
                <H1>UNIT-экономика</H1>
            </div>
        );
    }
}

export default MainPage;