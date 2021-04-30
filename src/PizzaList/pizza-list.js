import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {addToOrder} from "../redux/actions/actions";
import {useHistory} from "react-router-dom";

import "./pizza-list.css";

const PizzaList = ({pizzas, addToOrder}) => {

    let history = useHistory();

    const names = Object.keys(pizzas);
    const ingredients = Object.values(pizzas);

    const addToOrderFunc = item => {
        addToOrder(item);
        alert("Піццу додано");
    }

    const toOrder = () => {
        history.push('/order');
    }

    const allPizzas = names.map((item, idx) => {
        return <div className="border" key={Math.random()*1000000000}>
            <h1> {item} </h1>
            <span> Інгрідієнти: </span>
            {
                Object.entries(ingredients[idx])
                    .map(item => <div key={Math.random()*1000000000}>
                        <span> {item[0]} : {item[1]}</span>
                        <br/>
                    </div>)
            }
            <button onClick={() => addToOrderFunc(item)}> Add to order </button>
        </div>
    })

    return <div>
        <h1 className='title'> Всі піци </h1>
        <button className="btn-order" onClick={() => history.push('/statistic')}> Статистика </button>
        {allPizzas}
        <button className="btn-order" onClick={toOrder}> Замовити </button>
    </div>
}

const mapStateToProps = state => {
    return {
        pizzas: state.pizzas
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    addToOrder
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PizzaList)