import React from 'react';

export default React => props => {
    let classString = 'example-button';
    if (props.disabled) {
        classString += ' example-button--disabled'
    }
    return (
        <div className={classString}>
            {props.text}
        </div>  
    );
};