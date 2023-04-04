import React from 'react';
import cl from './_Segments.module.scss'
import SegmentsColumn from "./core/components/column/SegmentsColumn";

const SEGMENTS = [
    {
        id: 1,
        title: 'Сегмент',
        data: ["0. Бизнесмен СНГ", "1. Ренегат", "2. Осенний хранитель", "3. Отдыхающий"]
    },
    {
        id: 2,
        title: 'Доходность (руб.)',
        data: [1234.0, 0, 1234.0, -1234.0]
    },
    {
        id: 3,
        title: 'Доходность (%)',
        data: [1234.0, -1234.0, 1234.0, -1234.0]
    },
]

const Segments = ({className, ...props}) => {
    return (
        <div className={[className, cl.list].join(" ")} {...props}>
            {SEGMENTS.map(item => (
                <SegmentsColumn key={item.id} title={item.title}
                                data={item.data}
                                className={cl.item} />
            ))}
        </div>
    );
};

export default Segments;