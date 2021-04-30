import React from "react";
import {connect} from "react-redux";

const Order = ({order}) => {

    console.log(order)

    const allPizzas = order.length > 0
        ? order.map(item => {
            return <span key={Math.random()*1000000000}>
                <span> Піцца --- {item.name}: x{item.count}</span>
                <br/>
            </span>
        })
        : 'Піцу не додано!'

    return <div>
        <h1 className='title'> Ваше замовлення </h1>
        <p/>
        <div className="order">
            {allPizzas}
        </div>
    </div>

}

const mapStateToProps = state => {
    return {
        order: state.order
    }
}

export default connect(mapStateToProps)(Order)