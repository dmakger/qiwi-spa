import React from 'react';
import cl from "./_TopBar.module.scss";
import LogoMini from "../../../../../../core/ui/logo/mini/LogoMini";


const TopBar = ({menu, activeId, className, ...props}) => {
    return (
        <div className={[cl.topBar, className].join(" ")} {...props}>
            <div className={cl.wrapper}>
                <LogoMini className={cl.logo} />
            </div>
        </div>
    );
};

export default TopBar;