import {Route, Switch} from "react-router-dom";
import PizzaList from "../PizzaList/pizza-list";
import Order from "../Order/order";
import React from "react";
import {Statistic} from "../Statistics/statistics";

export const App = () => {

    return <div>
        {/*<span>sdsd</span>*/}
        {/*<Statistic />*/}
        <Switch>
            <Route exact path='/' component={PizzaList} />
            <Route path='/order' component={Order} />
            <Route path='/statistic' component={Statistic} />
        </Switch>
    </div>
}