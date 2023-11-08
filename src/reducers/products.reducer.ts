import {
    ADD_PRODUCT_FAILURE,
    ADD_PRODUCT_SUCCESS,
    FETCH_PRODUCT_LIST_FAILURE,
    FETCH_PRODUCT_LIST_SUCCESS,
    REMOVE_PRODUCT_FAILURE,
    REMOVE_PRODUCT_SUCCESS,
} from "../constants/actionTypes";
import { ProductsActionsTypes } from "../actions/products.actions";


export type InitialProductStateType = {
    error: string | null;
    products: any[];
    isFetching: boolean;
};

const initialState: InitialProductStateType = {
    error: null,
    products: [],
    isFetching: true,
};

const products = (
    state: InitialProductStateType = initialState,
    action: ProductsActionsTypes
): InitialProductStateType => {
    switch (action.type) {
        case FETCH_PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                isFetching: false,
                products: action.payload.productList,
            };
        case FETCH_PRODUCT_LIST_FAILURE:
            return {
                ...state,
                isFetching: false,
                products: [],
                error: action.payload.error,
            };
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                products: [...state.products, action.payload.productAdd],
            };
        case ADD_PRODUCT_FAILURE:
            return {
                ...state,
                isFetching: false,
                products: [],
                error: action.payload.error,
            };
        case REMOVE_PRODUCT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                // products: state.products = state.products.filter(product => product.id !== action.payload.productRemove)
            };
        case REMOVE_PRODUCT_FAILURE:
            return {
                ...state,
                isFetching: false,
                products: [],
                error: action.payload.error,
            };
        default:
            return state;
    }
};

export default products;