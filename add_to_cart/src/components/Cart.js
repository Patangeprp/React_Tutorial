import { createStore } from 'redux';

const initialState = {
    items: []
};

function Cart(state = initialState, action) {
    switch (action.type) {
        case "add_Item":
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case "remove_Item":
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        default:
            return state;
    }
}

const store = createStore(Cart);

export default store;
