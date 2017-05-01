import React, { Component } from 'react';
import Popup from 'react-popup';
import Provider from 'react-popup';

import CustomContent from './CustomContent';

import logo from '../content/images/logo.svg';
import '../content/css/App.css';
import '../content/css/popup.css';


class App extends Component {

    constructor() {
        super();

        this.reusablePopup = Popup.register({
            title: 'Reusable Popup Title',
            content: 'Content that is specific to this reusable component',
            buttons: {
                left: ['cancel'],
                right: ['ok']
            }
        });
    }

    renderDefault = () => {
        Popup.alert('Hello, I\'m a default popup');
    }

    renderDefaultWithTitle = () => {
        Popup.create({
            title: 'Popup Title',
            content: 'Hello, I\'m a default popup with a title',
            className: 'alert',
            buttons: {
                right: ['ok']
            }
        });
    }

    renderNoOverLayLeftButton = () => {
        Popup.create({
            title: null,
            content: 'No overlay, buttons on left',
            buttons: {
                left: ['ok', 'cancel']
            },
            noOverlay: true
        });
    }

    renderCustomButton = () => {
        Popup.create({
            title: 'Custom Buttons',
            content: 'Custom buttons with default content string',
            buttons: {
                left: [
                    {
                        text: 'Launch content box',
                        action: (popup) => {
                            this.launchContentBox();      
                            popup.close();                            
                        }
                    }
                ]
            }
        })
    }

    launchContentBox = () => {
        Popup.prompt('Type your name below', 'What\'s your name?', {
            placeholder: 'Placeholder yo',
            type: 'text'
        }, {
            text: 'Save',
            className: 'success',
            action: function (Box) {
                Popup.alert('Your name is: ' + Box.value);
                Box.close();
            }
        });
    }

    renderAtMouseClick = (e) => {
        Popup.create({
            content: <CustomContent />,
            buttons: {
                right: ['ok', 'cancel']
            },
            noOverlay: false,
            position: {
                x: e.clientX,
                y: e.clientY
            }
        });
    }

    renderReusablePopup = () => {
        Popup.queue(this.reusablePopup);
    }

    render() {
        debugger;
        return (
            <div className="App">
                <Provider />
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <div className="row">
                    <button className="btn btn-success" onClick={this.renderDefault}>Launch Default Popup</button>
                    <button className="btn btn-default" onClick={this.renderDefaultWithTitle}>Launch Default with Title</button>
                    <button className="btn btn-danger" onClick={this.renderNoOverLayLeftButton}>Launch Popup No Overlay, Left Buttons</button>
                    <button className="btn btn-primary" onClick={this.renderCustomButton}>Custom Button</button>
                    <button className="btn btn-success" onClick={this.renderReusablePopup}>Launch Reusable Popup</button>
                </div>
                <div style={{textAlign: 'center', marginTop: '50px'}}>
                    <p className="App-intro">Click anywhere in the box below to launch popup at mouse click coordinates</p>
                    <div className="popup-pos-div" onClick={this.renderAtMouseClick} />
                </div>
            </div>
        );
    }
}

export default App;
