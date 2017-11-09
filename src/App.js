import React, { Component } from 'react';

import getRouter from 'router/index';

export default class App extends Component {
    render() {
        return (
            <div  >
                 {getRouter()}
            </div>
        )
    }
}