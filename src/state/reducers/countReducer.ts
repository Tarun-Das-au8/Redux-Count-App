import { Action } from "../actions/index";
import { ActionType } from "../actionTypes";

const initialState = 0

const countReducers = (state: number = initialState, action: Action) =>{
    switch(action.type){
        case ActionType.INCREMENT:
            return state + 1
        case ActionType.DECREMENT:
            return state - 1
        case ActionType.RESET:
            return 0
        default:
            return state 
    }
}

export default countReducers;