import ProductItem from "./ProductItem";

export default function ProductList({ productsData, setStateModal }) {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {productsData.map((p) => (
        <ProductItem key={p.id} item={p} setStateModal={setStateModal} />
      ))}
    </div>
  );
}
