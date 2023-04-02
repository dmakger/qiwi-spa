import React from 'react';
import cl from './_Page404.module.scss'
import H1 from "../core/ui/title/H1/H1";
import ButtonToDefault32EB from "../core/ui/button/to/default/32/ButtonToDefault32EB";
import Text24R from "../core/ui/text/24/Text24R";
import {MAIN_URL} from "../core/service/urls";

const Page404 = () => {
    return (
        <div className={cl.page}>
            <div className={cl.text}>
                <H1>(×_×)</H1>
                <H1 className={cl.title}>404.</H1>
                <Text24R>Такой страницы не существует :(</Text24R>
            </div>
            <ButtonToDefault32EB to={MAIN_URL}>Перейти на главный экран</ButtonToDefault32EB>
        </div>
    );
};

export default Page404;