import React from 'react';

const SubComponent = (props) => {
    return (
        <div>
            <h4>This is a subcomponent</h4>
            <button className="btn btn-success" onClick={props.func}>Button</button>
            <p>{props.someText}</p>
        </div>
    );
}

export default SubComponent;
