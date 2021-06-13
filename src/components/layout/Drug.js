import React from 'react';

const Drug = (props) => {
    return (
        <webview>
            <div>{props.id}</div>
            <div>{props.name}</div>
            <div>{props.description}</div>
            <div>{props.formul}</div>
            <div>{props.kullanimSekli}</div>
            <div>{props.url}</div>
        </webview>
    )
};

export default Drug;