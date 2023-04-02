import React from 'react';
import Button from "../../../../core/ui/button/Button";

const ButtonDefault = ({className, children, ...props}) => {
    return (
        <Button className={className} {...props}>{children}</Button>
    );
};

export default ButtonDefault;