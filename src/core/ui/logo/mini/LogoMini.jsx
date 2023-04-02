import React from 'react';
import logo from '../../../static/img/logo-mini.svg'
import cl from "./_LogoMini.module.scss"
import {Link} from "react-router-dom";
import {MAIN_URL} from "../../../service/urls";

const LogoMini = ({className, ...props}) => {
    return (
        <Link to={MAIN_URL} className={className} {...props}>
            <img src={logo} alt="logo" className={cl.logo}/>
        </Link>
    );
};

export default LogoMini;