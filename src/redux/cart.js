import * as ActionTypes from "./ActionTypes";


export const Cart = (state = {
    items: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CART_ITEM:
            let itemid = action.payload;
            let newItem = state.items.filter(item => item[0] === itemid);
            if(newItem.length){
                localStorage.setItem('cart', JSON.stringify({ ...state, items: state.items.map(item => {
                        if( item[0] === itemid) return [itemid, item[1]+1];
                        else return  item;
                    })}));
                return { ...state, items: state.items.map(item => {
                        if( item[0] === itemid) return [itemid, item[1]+1];
                        else return  item;
                    })}
            } else {
                let oldState = state.items;
                let newState = oldState.concat([[itemid,1]]);
                localStorage.setItem('cart', JSON.stringify({ ...state, items: newState}));
                return { ...state, items: newState}
            }
        case ActionTypes.ADD_CART_ITEMS:
            let items = action.payload;
            return {...state, items: items};
        default:
            return state;
    }
};
