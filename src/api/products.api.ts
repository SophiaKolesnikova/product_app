import axios from "../utils/axios";
import { NewProductType, RemoveProductType } from "app/types";


 export const fetchProductList = async (): Promise<any> => {
        return axios.GET("products?limit=5");
    };

 export const addNewProduct = async (newProduct: NewProductType): Promise<any> => {
        return axios.POST("products", newProduct);
    };

export const removeOneProduct = async (productRemove: RemoveProductType): Promise<any> => {
    return axios.DELETE(`products/${productRemove.id}`, productRemove);
};


