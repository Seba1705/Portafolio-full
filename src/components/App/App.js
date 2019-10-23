import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';

import Header from '../Header/Header';
import About from '../About/About';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Header/>

                <Switch>
                    <Route path='/about' exact render={ () => <About/> }/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;
