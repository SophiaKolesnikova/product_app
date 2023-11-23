import React, { useEffect, useState } from "react";
import ProductsList from "../components/ProductsList";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../reducers/mainReducer";
import { AppDispatch } from "../store/store";
import { fetchProducts } from "../actions/products.actions";
import Modal from "../components/Modal";
import CreateProduct from "../components/CreateProduct";



const HomePage = () => {
  const { products, isFetching, error } = useSelector(
    (state: AppStateType) => state.products
  );
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch<AppDispatch>();


  useEffect((): void => {
    dispatch(fetchProducts());
  }, [dispatch]);


  const handlerModalOpen = () => {
    setModal(true);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      <button
        className="py-2 px-4 mb-3 border bg-gray-400 hover:shadow-md transition-all"
        onClick={handlerModalOpen}
      >
        Create new product
      </button>
      {isFetching && <Loading />}
      {error && <Error error={error} />}
      {products?.map((product) => (
        <ProductsList product={product} key={product.id} />
      ))}
      {modal && (
        <Modal title="Create new product" onClose={() => setModal(false)}>
          <CreateProduct onCreate={() => setModal(false)} />
        </Modal>
      )}
    </div>
  );
};

export default HomePage;
