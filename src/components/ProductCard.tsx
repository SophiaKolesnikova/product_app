import React from "react";
import { ProductListType } from "app/types";
import { useLocation, useNavigate } from "react-router-dom";

interface IProductDetailsProps {
  product?: ProductListType;
}

const ProductCard = ({ product }: IProductDetailsProps) => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const toGoBack = () => navigate(-1);

  return (
    <div className="mx-auto border py-5 px-4  flex rounded items-center mb-2 md:max-w-xl justify-center">
      <img
        src={state.product?.image}
        className="w-1/2"
        alt={state.product?.title}
      />
      <div className="flex flex-col justify-start p-6">
        <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
          {state.product?.title}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-800">
          {state.product?.description}
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-500">
          Category: {state.product?.category}
        </p>
        <p className="font-medium">Price: {state.product?.price}</p>
        <button
          className="py-2 px-4 mb-3 border bg-gray-400 hover:shadow-md transition-all"
          onClick={toGoBack}
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
