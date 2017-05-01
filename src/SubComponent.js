import React from 'react';

const SubComponent = (props) => {
    return (
        <div>
            <p>This is a subcomponent</p>
            <button className="btn btn-success" onClick={props.func}>Button</button>
            <p>{props.someText}</p>
        </div>
    );
}

export default SubComponent;
