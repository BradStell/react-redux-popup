import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SubComponent from './SubComponent';
import logo from '../content/images/logo.svg';
import * as actions from '../store/customComponentActions';

class CustomContent extends Component {

    click() {
        this.props.actions.updateMessage();
    }
    
    render() {
        return (
            <div>
                <h3>Custom Component Header</h3>
                <img src={logo} className="App-logo" alt="logo" />
                <p>This component is tied into the redux store to monitor count</p>
                <SubComponent func={this.click.bind(this)} someText={this.props.someText} />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        someText: state.customPopup.someText
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomContent);