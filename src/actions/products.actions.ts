import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../reducers/mainReducer";
import {
    ADD_PRODUCT_FAILURE,
    ADD_PRODUCT_SUCCESS,
    FETCH_PRODUCT_LIST_FAILURE,
    FETCH_PRODUCT_LIST_SUCCESS,
    REMOVE_PRODUCT_FAILURE,
    REMOVE_PRODUCT_SUCCESS,
    SET_PRODUCT_PAGE
} from "../constants/actionTypes";
import {NewProductType, ProductListType, RemoveProductType} from "app/types";
import * as ProductAPI from "../api/products.api";


export type ProductsActionsTypes =
| FetchProductsSuccessType
| FetchProductsFailureType
| SetProductPageType
| AddProductSuccessType
| AddProductFailureType
| RemoveProductSuccessType
| RemoveProductFailureType;


type FetchProductsSuccessType = {
    type: typeof FETCH_PRODUCT_LIST_SUCCESS;
    payload: {
        productList: ProductListType[];
    };
};

export const fetchProductsSuccess = (productList: ProductListType[]): FetchProductsSuccessType => ({
    type: FETCH_PRODUCT_LIST_SUCCESS,
    payload: {
        productList
    }
});

type FetchProductsFailureType = {
    type: typeof FETCH_PRODUCT_LIST_FAILURE;
    payload: {
        error: string;
    };
};

export const fetchProductsFailure = (error: string): FetchProductsFailureType => ({
    type: FETCH_PRODUCT_LIST_FAILURE,
    payload: {
        error
    }
});

type SetProductPageType = {
    type: typeof SET_PRODUCT_PAGE;
    payload: {
        productPage: number;
    };
};

export const setProductPageType = (productPage: number): SetProductPageType => ({
    type: SET_PRODUCT_PAGE,
    payload: {
        productPage
    }
});

type AddProductSuccessType = {
    type: typeof ADD_PRODUCT_SUCCESS;
    payload: {
        productAdd: NewProductType[]
    };
};

export const addProductSuccess = (productAdd: NewProductType[]):AddProductSuccessType => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: {
        productAdd
    }
});

type AddProductFailureType = {
    type: typeof ADD_PRODUCT_FAILURE;
    payload: {
        error: string
    };
};

export const addProductFailure = (error: string):AddProductFailureType => ({
    type: ADD_PRODUCT_FAILURE,
    payload: {
        error
    }
});

type RemoveProductSuccessType = {
    type: typeof REMOVE_PRODUCT_SUCCESS;
    payload: {
        productRemove: RemoveProductType[]
    };
};

export const removeProductSuccess = (productRemove: RemoveProductType[]):RemoveProductSuccessType => ({
    type: REMOVE_PRODUCT_SUCCESS,
    payload: {
        productRemove
    }
});

type RemoveProductFailureType = {
    type: typeof REMOVE_PRODUCT_FAILURE;
    payload: {
        error: string
    };
};

export const removeProductFailure = (error: string):RemoveProductFailureType => ({
    type: REMOVE_PRODUCT_FAILURE,
    payload: {
        error
    }
});


export const fetchProducts = ():
    ThunkAction<
    Promise<void>,
    AppStateType,
    undefined,
    ProductsActionsTypes
> => async (dispatch) => {
    try {
        const response = await ProductAPI.fetchProductList();

        dispatch(fetchProductsSuccess(response.data));
    } catch (error: any) {
        dispatch(fetchProductsFailure(error.message));
    }
};

export const addProduct = (newProduct: NewProductType):
    ThunkAction<
        Promise<void>,
        AppStateType,
        undefined,
        ProductsActionsTypes
    > => async (dispatch) => {
    try {
        const response = await ProductAPI.addNewProduct(newProduct);

        dispatch(addProductSuccess(response.data));
    } catch (error: any) {
        dispatch(addProductFailure(error.message));
    }
};

