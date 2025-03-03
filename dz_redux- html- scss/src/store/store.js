import { createStore  } from '@reduxjs/toolkit'

const initialState = {
    count: 0
}

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case 'plus':
            return state.count + 1
            break;
        case 'minus':
            return state.count - 1
        break;
        default:
            return state
    }
}

const store = createStore(counterReducer)

export default store;