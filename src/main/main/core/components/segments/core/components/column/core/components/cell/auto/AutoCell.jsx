import React from 'react';
import DefaultCell from "../default/DefaultCell";
import NiceCell from "../nice/NiceCell";
import BruhCell from "../bruh/BruhCell";
import MiddleCell from "../middle/MiddleCell";

const AutoCell = ({title, className, ...props}) => {
    if (typeof(title) === "number")
        if (title > 0)
            return <NiceCell title={title} className={className} {...props} />
        else if (title < 0)
            return <BruhCell title={title} className={className} {...props} />
        else
            return <MiddleCell title={title} className={className} {...props} />
    return <DefaultCell title={title} className={className} {...props} />
};

export default AutoCell;