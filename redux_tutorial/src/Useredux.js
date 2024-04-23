import { createStore } from 'redux';

export default function Useredux(){


const reducer = (state = 0, action) => {
    if (action.type === 'increament') {
        return state + 1;
    } else if (action.type === 'decreament') {
        return state - 1;
    }
    return state;
};

// Create the Redux store
const store = createStore(reducer);

store.subscribe(()=>{
    console.log('current state',store.getState());
})

store.dispatch({
    type:'increament'
});
store.dispatch({
    type:'increament'
});
}
// // Export the store instance directly
// export default store;

