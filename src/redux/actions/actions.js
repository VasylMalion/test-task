// constants
import {ADD_TO_ORDER} from "../constants";

export const addToOrder = payload => {
    return {
        type: ADD_TO_ORDER,
        payload
    }
}