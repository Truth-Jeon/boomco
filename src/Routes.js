import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom';

import LinkList from 'LinkList/App';

class Routes extends Component {
    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/:refcode" exact component={LinkList} />

                    {/*<Route path='*' component={LinkList} />*/}
                </Switch>
            </BrowserRouter>
        );
    }
}

let mapStateToProps = (state) => ({

});

let mapDispatchToProps = (dispatch) => ({

});

export const RoutesApp = connect(mapStateToProps, mapDispatchToProps)(Routes);
