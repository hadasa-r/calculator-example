import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Header } from './components/Header';
import { Calculator } from './components/Calculator';

export default class App extends Component {
    displayName = App.name

    render() {
        return (
            <div className="App">
                <Header></Header>
                <Layout>
                    <Route exact path='/' component={Home} />
                    <Route path='/Calculator' component={Calculator} />
                </Layout>
            </div>
        );
    }
}
