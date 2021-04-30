import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {store} from "./redux/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import {App} from "./app/app";

ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>,
    document.getElementById('root')
);
