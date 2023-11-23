import React from "react";
import { useNavigate } from "react-router-dom";
import { ProductListType } from "app/types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { removeProduct } from "../actions/products.actions";

interface IProductListProps {
  product?: ProductListType;
}
const ProductsList = ({ product }: IProductListProps) => {
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const toProductDetails = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navigate(`/product/${ product?.id }`, { state: { product } });
  };

  const toRemoveProduct = (e:React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      dispatch(removeProduct({
        id: product?.id
      }));
  }

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product?.image} className="w-1/6" alt={product?.title} />
      <p>{product?.title}</p>
      <p className="font-bold">{product?.price}</p>
        <div className='flex gap-10'>
            <button
                className="py-2 px-4 border bg-gray-200 hover:shadow-md transition-all"
                onClick={toProductDetails}
            >
                Details
            </button>
            <button
                className="py-2 px-4 border bg-gray-400 hover:shadow-md transition-all"
                onClick={toRemoveProduct}
            >
                Delete
            </button>
        </div>

    </div>
  );
};

export default ProductsList;
