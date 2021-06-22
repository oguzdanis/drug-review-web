import React, { Fragment }  from 'react';

const Drug = (props) => {
    return (
        <Fragment>
            <div>{props.id}</div>
            <div>{props.name}</div>
            <div>{props.description}</div>
            <div>{props.formul}</div>
            <div>{props.kullanimSekli}</div>
            <div>{props.url}</div>
        </Fragment>
    )
};

export default Drug;