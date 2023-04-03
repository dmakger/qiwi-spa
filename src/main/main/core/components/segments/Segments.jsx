import React from 'react';
import cl from './_Segments.module.scss'
import SegmentsColumn from "./core/components/column/SegmentsColumn";

const SEGMENTS = [
    {
        id: 1,
        title: 'Сегмент',
        data: ["0. Пиво", "1. Квас", "2. Ряженка", "3. Растишка"]
    },
    {
        id: 2,
        title: 'Прибыль (руб.)',
        data: [1234.0, -1234.0, 1234.0, -1234.0]
    },
    {
        id: 3,
        title: 'Прибыль (%)',
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