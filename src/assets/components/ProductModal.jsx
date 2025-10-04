import { useEffect } from "react";

// Uses Bootstrap's JS to show modal when content changes.
export default function ProductModal({ content }) {
  useEffect(() => {
    if (!content) return;
    const titleEl = document.getElementById("modalTitle");
    const bodyEl = document.getElementById("modalBody");

    titleEl.textContent = content.name || "Product detail";
    bodyEl.innerHTML = `
      <div class="row g-3">
        <div class="col-md-6">
          <img src="${content.image}" alt="${content.name}" class="img-fluid rounded" />
        </div>
        <div class="col-md-6">
          <p class="mb-1">Name: <strong>${content.name}</strong></p>
          <p class="mb-1">Price: <span class="fw-bold">$${content.price}</span></p>
          <p class="mb-2">${content.description || ""}</p>
        </div>
      </div>
    `;

    const modalEl = document.getElementById("productModal");
    // bootstrap is on window from index.html script
    // eslint-disable-next-line no-undef
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
  }, [content]);

  return (
    <div className="modal fade" id="productModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalTitle">Product detail</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body" id="modalBody"></div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
