import React from "react";
import {getPizzaInfo} from "../getPopularPizza";

export const Statistic = () => {

    const {popular, ingridients} = getPizzaInfo(['cap','cap','onions','gavay','cap', 'tonno','vegeterian', 'king_one'])

    return <div>
        <h1 className='title'> Найпопулярніша піца </h1>
        <div className="pizzas-list">
            {
                popular.map(item => <span key={item}> {item} </span>)
            }
        </div>
        <br />
        <h1 className='title'> Інгрідієнти для них </h1>
        <div className="pizzas-list">
        {
            ingridients.map(item => <span key={item}> {item} </span>)
        }
        </div>
    </div>
}