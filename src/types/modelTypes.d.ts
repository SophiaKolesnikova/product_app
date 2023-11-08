declare module "app/types" {
    export type ProductListType = {
        id?: number,
        title: string,
        price: number,
        description: string,
        category: string,
        image: string,
        rating: {
            rate: number,
            count: number,
        }
    };

    export type NewProductType = Omit<ProductListType, "rating">;


    export type RemoveProductType = Omit<ProductListType, "rating">;

}




