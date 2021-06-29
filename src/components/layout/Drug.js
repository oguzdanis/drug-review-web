import React, { Fragment } from 'react';
import './Drug.css';

const Drug = (props) => {
    return (
        <Fragment>
            <div className='expenses' >
                <div className='post-first-child'>{props.name}</div>
                <div>{props.description}</div>
           </div>
        </Fragment>
    )
};

export default Drug;