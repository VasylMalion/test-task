// constants
import {
    ADD_TO_ORDER
    // SIGN_IN,
    // LOG_OUT
} from "../constants";

const initialState = {
    pizzas: {
        cap:{
            dough: 1,
            tomato_sauce: 1,
            onion: 2,
            sausage: 2,
            mashroom: 3,
            cheese: 1,
        },
        onions:{
            dough: 1,
            tomato_sauce: 1,
            onion: 2,
            meat: 1,
            cheese: 1,
        },
        king_one:{
            dough: 1,
            tomato_sauce: 1,
            onion: 2,
            mayo: 1,
            mashroom: 3,
            tomato: 2,
            cheese: 3,
            dill: 2,
            parsley: 2
        },
        gavay:{
            dough: 1,
            tomato_sauce: 1,
            onion: 2,
            ananas: 1,
            cheese: 2,
        },
        tonno:{
            dough: 1,
            tomato_sauce: 1,
            tuna: 2,
            kappers: 1,
            cheese: 1,
        },
        vegeterian:{
            dough: 1,
            tomato_sauce: 1,
            tomato: 2,
            kappers: 1,
            cucumber: 2,
            onion: 2,
            cheese: 1,
        }
    },
    order: []
}

export const rootReducer = (state = initialState, action) => {

    switch (action.type){
        case ADD_TO_ORDER:

            const orderPizzas = [];
            state.order.length > 0 &&state.order.forEach(item => {
                orderPizzas.push(item.name);
            })

            if (orderPizzas.includes(action.payload)) {

                const ind = orderPizzas.findIndex(name => name === action.payload);
                const item = state.order.find(item => item.name === action.payload)

                const newArr = [
                    ...orderPizzas.slice(0, ind),
                    {
                        name: action.payload,
                        count: item.count + 1
                    },
                    ...orderPizzas.slice(ind + 1)
                ]

                return {
                    ...state,
                    order: newArr
                }
            }

            return {
                ...state,
                order: [
                    ...state.order,
                    {
                        name: action.payload,
                        count: 1
                    }
                ]
            }

        default:
            return state
    }
}