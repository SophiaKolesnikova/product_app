import axios from "../utils/axios";
import {NewProductType} from "app/types";


 export const fetchProductList = async (): Promise<any> => {
        return axios.GET("products?limit=5");
    };

 export const addNewProduct = async (newProduct: NewProductType): Promise<any> => {
        return axios.POST("products", newProduct);
    };


