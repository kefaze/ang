export const ADD_NUMS = 'ADD_NUMS'
export const UPDATE_NUMS = 'UPDATE_NUMS'
export const DELETE_NUMS = 'DELETE_NUMS'

export function addItems(numObj) {
    return {
        type: 'ADD_NUMS',
        payload: numObj
    }
}