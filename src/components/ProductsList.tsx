import React from "react";
import { useNavigate } from "react-router-dom";
import { ProductListType } from "app/types";

interface IProductListProps {
  product?: ProductListType;
}
const ProductsList = ({ product }: IProductListProps) => {
  const navigate = useNavigate();

  const toProductDetails = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navigate(`/product/${product?.id}`, { state: { product } });
  };

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product?.image} className="w-1/6" alt={product?.title} />
      <p>{product?.title}</p>
      <p className="font-bold">{product?.price}</p>
      <button
        className="py-2 px-4 border bg-gray-200 hover:shadow-md transition-all"
        onClick={toProductDetails}
      >
        Details
      </button>
    </div>
  );
};

export default ProductsList;
