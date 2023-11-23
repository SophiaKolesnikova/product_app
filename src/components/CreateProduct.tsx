import React, { useState } from "react";
import Error from "./Error";
import { useDispatch } from "react-redux";
import { addProduct } from "../actions/products.actions";
import { AppDispatch } from "../store/store";

interface CreateProductProps {
  onCreate: () => void;
}

const CreateProduct = ({ onCreate }: CreateProductProps) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  const handlerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (value.trim().length === 0) {
      setError("Please enter valid title.");
      return;
    }

    dispatch(
      addProduct({
        title: value,
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      })
    );

    onCreate();
  };

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
  };

  return (
    <>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          className="border py-2 px-4 mb-2 w-full outline-0"
          placeholder="Enter product title..."
          value={value}
          onChange={handlerChange}
        />
        {error && <Error error={error} />}
        <button
          type="submit"
          className="py-2 px-4 border bg-gray-400 hover:text-white"
        >
          Create
        </button>
      </form>
    </>
  );
};

export default CreateProduct;
