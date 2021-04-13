import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import { RoutesApp } from '../Routes';

import 'antd/dist/antd.css';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowHeight:0
        }
    }

    componentDidMount() {

    }

    render() {


        return (
            <div>
                <RoutesApp />
            </div>
        );
    }
}



let mapStateToProps = (state) => ({

});

let mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);

