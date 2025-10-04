import { useState } from "react";
import "./App.css";
import { products } from "./assets/data/products";
import ProductList from "./assets/components/ProductList";
import ProductModal from "./assets/components/ProductModal";

function App() {
  const [productDetail, setProductDetail] = useState(null);
  const setStateModal = (product) => setProductDetail(product);

  return (
    <>
      <div className="container py-4">
        <h2 className="text-center mb-4">Shoes shop</h2>
        <div className="mb-4">
          <input
            className="form-control"
            placeholder="Search (demo only)"
            disabled
          />
        </div>
        <ProductList productsData={products} setStateModal={setStateModal} />
        <ProductModal content={productDetail} />
      </div>
    </>
  );
}

export default App;
