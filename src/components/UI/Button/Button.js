import React, {Fragment} from 'react';
import './Button.css'

const Button = (props) => {
    return (
        <Fragment>
            <button onClick={props.nextPages} type="button" className={props.class}>{props.children}</button>
        </Fragment>
    );
};

export default Button;