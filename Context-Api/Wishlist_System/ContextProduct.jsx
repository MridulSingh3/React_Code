import { createContext, useReducer } from "react";

export const ProductContext = createContext();

const initialState = {
    wishlist: []
};

function reducer(state, action) {
    switch (action.type) {

        case "ADD":
            const exists = state.wishlist.find(
                item => item.id === action.payload.id
            );

            if (exists) return state;

            return {
                ...state,
                wishlist: [action.payload, ...state.wishlist]
            };

        case "REMOVE":
            return {
                ...state,
                wishlist: state.wishlist.filter(
                    item => item.id !== action.payload
                )
            };

        default:
            return state;
    }
}

export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function addWishlist(product) {
        dispatch({ type: "ADD", payload: product });
    }

    function removeWishlist(id) {
        dispatch({ type: "REMOVE", payload: id });
    }

    return (
        <ProductContext.Provider value={{
            wishlist: state.wishlist,
            addWishlist,
            removeWishlist
        }}>
            {children}
        </ProductContext.Provider>
    );
};