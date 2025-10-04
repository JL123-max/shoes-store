export default function ProductItem({ item, setStateModal }) {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <img src={item.image} className="card-img-top" alt={item.name} />
        <div className="card-body d-flex flex-column">
          <h6 className="card-title mb-1">{item.name}</h6>
          <div className="mb-3 text-secondary">${item.price}</div>
          <div className="mt-auto d-flex gap-2">
            <button className="btn btn-outline-dark btn-sm">add to cart</button>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => setStateModal(item)}
            >
              details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}