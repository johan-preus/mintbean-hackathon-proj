import React, { Component, Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import GamePage from './GamePageComponent'
import Home from './HomeComponent'
import Header from './HeaderComponent'

class Main extends Component {
    render(){
        return(
            <Fragment>
                <Header />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route exact path="/play" component={GamePage} />
                    <Redirect to="/home" />
                </Switch>
            </Fragment>
        )
    }
}

export default Main