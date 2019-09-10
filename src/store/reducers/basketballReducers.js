import * as basketballActions from '../actions/bascketballActions'
import { basketballNums } from '../state/basketballState'

export function basketballReducer(state = basketballNums, action) {
    switch(action.type) {
        case basketballActions.ADD_NUMS: {
            return [...state, action.payload]
        }
        
        default:
            return state
    }
}