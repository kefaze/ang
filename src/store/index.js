import { createStore, combineReducers } from 'redux'

import { basketballReducer } from './reducers/basketballReducers'

import { addItems } from './actions/bascketballActions'

export const allReducers = combineReducers({
    basketballState: basketballReducer
})

export const store = createStore(allReducers)

let unsubscribe = store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(addItems({
    id: '0',
    name: '威少',
    position: '后卫',
    age: '30'
}))


unsubscribe()