import React from 'react'

const OrdersListPage = () => {
  return (
    <>
       {/* Start right Content here */}
{/* ============================================================== */}
<div className="main-content">
  <div className="page-content">
    <div className="container-fluid">
      {/* start page title */}
      <div className="row">
        <div className="col-12">
          <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 className="mb-sm-0 font-size-18">Orders</h4>
            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item"><a href="javascript: void(0);">Ecommerce</a></li>
                <li className="breadcrumb-item active">Orders</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* end page title */}
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="row mb-2">
                <div className="col-sm-4">
                  <div className="search-box me-2 mb-2 d-inline-block">
                    <div className="position-relative">
                      <input type="text" className="form-control" placeholder="Search..." />
                      <i className="bx bx-search-alt search-icon" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="text-sm-end">
                    <button type="button" className="btn btn-success btn-rounded waves-effect waves-light mb-2 me-2"><i className="mdi mdi-plus me-1" /> Add New Order</button>
                  </div>
                </div>{/* end col*/}
              </div>
              <div className="table-responsive">
                <table className="table align-middle table-nowrap table-check">
                  <thead className="table-light">
                    <tr>
                      <th style={{width: 20}} className="align-middle">
                        <div className="form-check font-size-16">
                          <input className="form-check-input" type="checkbox" id="checkAll" />
                          <label className="form-check-label" htmlFor="checkAll" />
                        </div>
                      </th>
                      <th className="align-middle">Order ID</th>
                      <th className="align-middle">Billing Name</th>
                      <th className="align-middle">Date</th>
                      <th className="align-middle">Total</th>
                      <th className="align-middle">Payment Status</th>
                      <th className="align-middle">Payment Method</th>
                      <th className="align-middle">View Details</th>
                      <th className="align-middle">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="form-check font-size-16">
                          <input className="form-check-input" type="checkbox" id="orderidcheck01" />
                          <label className="form-check-label" htmlFor="orderidcheck01" />
                        </div>
                      </td>
                      <td><a href="javascript: void(0);" className="text-body fw-bold">#SK2540</a> </td>
                      <td>Neal Matthews</td>
                      <td>
                        07 Oct, 2019
                      </td>
                      <td>
                        $400
                      </td>
                      <td>
                        <span className="badge badge-pill badge-soft-success font-size-12">Paid</span>
                      </td>
                      <td>
                        <i className="fab fa-cc-mastercard me-1" /> Mastercard
                      </td>
                      <td>
                        {/* Button trigger modal */}
                        <button type="button" className="btn btn-primary btn-sm btn-rounded" data-bs-toggle="modal" data-bs-target=".orderdetailsModal">
                          View Details
                        </button>
                      </td>
                      <td>
                        <div className="d-flex gap-3">
                          <a href="javascript:void(0);" className="text-success"><i className="mdi mdi-pencil font-size-18" /></a>
                          <a href="javascript:void(0);" className="text-danger"><i className="mdi mdi-delete font-size-18" /></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check font-size-16">
                          <input className="form-check-input" type="checkbox" id="orderidcheck02" />
                          <label className="form-check-label" htmlFor="orderidcheck02" />
                        </div>
                      </td>
                      <td><a href="javascript: void(0);" className="text-body fw-bold">#SK2541</a> </td>
                      <td>Jamal Burnett</td>
                      <td>
                        07 Oct, 2019
                      </td>
                      <td>
                        $380
                      </td>
                      <td>
                        <span className="badge badge-pill badge-soft-danger font-size-12">Chargeback</span>
                      </td>
                      <td>
                        <i className="fab fa-cc-visa me-1" /> Visa
                      </td>
                      <td>
                        {/* Button trigger modal */}
                        <button type="button" className="btn btn-primary btn-sm btn-rounded" data-bs-toggle="modal" data-bs-target=".orderdetailsModal">
                          View Details
                        </button>
                      </td>
                      <td>
                        <div className="d-flex gap-3">
                          <a href="javascript:void(0);" className="text-success"><i className="mdi mdi-pencil font-size-18" /></a>
                          <a href="javascript:void(0);" className="text-danger"><i className="mdi mdi-delete font-size-18" /></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check font-size-16">
                          <input className="form-check-input" type="checkbox" id="orderidcheck03" />
                          <label className="form-check-label" htmlFor="orderidcheck03" />
                        </div>
                      </td>
                      <td><a href="javascript: void(0);" className="text-body fw-bold">#SK2542</a> </td>
                      <td>Juan Mitchell</td>
                      <td>
                        06 Oct, 2019
                      </td>
                      <td>
                        $384
                      </td>
                      <td>
                        <span className="badge badge-pill badge-soft-success font-size-12">Paid</span>
                      </td>
                      <td>
                        <i className="fab fa-cc-paypal me-1" /> Paypal
                      </td>
                      <td>
                        {/* Button trigger modal */}
                        <button type="button" className="btn btn-primary btn-sm btn-rounded" data-bs-toggle="modal" data-bs-target=".orderdetailsModal">
                          View Details
                        </button>
                      </td>
                      <td>
                        <div className="d-flex gap-3">
                          <a href="javascript:void(0);" className="text-success"><i className="mdi mdi-pencil font-size-18" /></a>
                          <a href="javascript:void(0);" className="text-danger"><i className="mdi mdi-delete font-size-18" /></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check font-size-16">
                          <input className="form-check-input" type="checkbox" id="orderidcheck04" />
                          <label className="form-check-label" htmlFor="orderidcheck04" />
                        </div>
                      </td>
                      <td><a href="javascript: void(0);" className="text-body fw-bold">#SK2543</a> </td>
                      <td>Barry Dick</td>
                      <td>
                        05 Oct, 2019
                      </td>
                      <td>
                        $412
                      </td>
                      <td>
                        <span className="badge badge-pill badge-soft-success font-size-12">Paid</span>
                      </td>
                      <td>
                        <i className="fab fa-cc-mastercard me-1" /> Mastercard
                      </td>
                      <td>
                        {/* Button trigger modal */}
                        <button type="button" className="btn btn-primary btn-sm btn-rounded" data-bs-toggle="modal" data-bs-target=".orderdetailsModal">
                          View Details
                        </button>
                      </td>
                      <td>
                        <div className="d-flex gap-3">
                          <a href="javascript:void(0);" className="text-success"><i className="mdi mdi-pencil font-size-18" /></a>
                          <a href="javascript:void(0);" className="text-danger"><i className="mdi mdi-delete font-size-18" /></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check font-size-16">
                          <input className="form-check-input" type="checkbox" id="orderidcheck05" />
                          <label className="form-check-label" htmlFor="orderidcheck05" />
                        </div>
                      </td>
                      <td><a href="javascript: void(0);" className="text-body fw-bold">#SK2544</a> </td>
                      <td>Ronald Taylor</td>
                      <td>
                        04 Oct, 2019
                      </td>
                      <td>
                        $404
                      </td>
                      <td>
                        <span className="badge badge-pill badge-soft-warning font-size-12">Refund</span>
                      </td>
                      <td>
                        <i className="fab fa-cc-visa me-1" /> Visa
                      </td>
                      <td>
                        {/* Button trigger modal */}
                        <button type="button" className="btn btn-primary btn-sm btn-rounded" data-bs-toggle="modal" data-bs-target=".orderdetailsModal">
                          View Details
                        </button>
                      </td>
                      <td>
                        <div className="d-flex gap-3">
                          <a href="javascript:void(0);" className="text-success"><i className="mdi mdi-pencil font-size-18" /></a>
                          <a href="javascript:void(0);" className="text-danger"><i className="mdi mdi-delete font-size-18" /></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check font-size-16">
                          <input className="form-check-input" type="checkbox" id="orderidcheck06" />
                          <label className="form-check-label" htmlFor="orderidcheck06" />
                        </div>
                      </td>
                      <td><a href="javascript: void(0);" className="text-body fw-bold">#SK2545</a> </td>
                      <td>Jacob Hunter</td>
                      <td>
                        04 Oct, 2019
                      </td>
                      <td>
                        $392
                      </td>
                      <td>
                        <span className="badge badge-pill badge-soft-success font-size-12">Paid</span>
                      </td>
                      <td>
                        <i className="fab fa-cc-paypal me-1" /> Paypal
                      </td>
                      <td>
                        {/* Button trigger modal */}
                        <button type="button" className="btn btn-primary btn-sm btn-rounded" data-bs-toggle="modal" data-bs-target=".orderdetailsModal">
                          View Details
                        </button>
                      </td>
                      <td>
                        <div className="d-flex gap-3">
                          <a href="javascript:void(0);" className="text-success"><i className="mdi mdi-pencil font-size-18" /></a>
                          <a href="javascript:void(0);" className="text-danger"><i className="mdi mdi-delete font-size-18" /></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check font-size-16">
                          <input className="form-check-input" type="checkbox" id="orderidcheck07" />
                          <label className="form-check-label" htmlFor="orderidcheck07" />
                        </div>
                      </td>
                      <td><a href="javascript: void(0);" className="text-body fw-bold">#SK2546</a> </td>
                      <td>William Cruz</td>
                      <td>
                        03 Oct, 2019
                      </td>
                      <td>
                        $374
                      </td>
                      <td>
                        <span className="badge badge-pill badge-soft-success font-size-12">Paid</span>
                      </td>
                      <td>
                        <i className="fas fa-money-bill-alt me-1" /> COD
                      </td>
                      <td>
                        {/* Button trigger modal */}
                        <button type="button" className="btn btn-primary btn-sm btn-rounded" data-bs-toggle="modal" data-bs-target=".orderdetailsModal">
                          View Details
                        </button>
                      </td>
                      <td>
                        <div className="d-flex gap-3">
                          <a href="javascript:void(0);" className="text-success"><i className="mdi mdi-pencil font-size-18" /></a>
                          <a href="javascript:void(0);" className="text-danger"><i className="mdi mdi-delete font-size-18" /></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check font-size-16">
                          <input className="form-check-input" type="checkbox" id="orderidcheck08" />
                          <label className="form-check-label" htmlFor="orderidcheck08" />
                        </div>
                      </td>
                      <td><a href="javascript: void(0);" className="text-body fw-bold">#SK2547</a> </td>
                      <td>Dustin Moser</td>
                      <td>
                        02 Oct, 2019
                      </td>
                      <td>
                        $350
                      </td>
                      <td>
                        <span className="badge badge-pill badge-soft-success font-size-12">Paid</span>
                      </td>
                      <td>
                        <i className="fab fa-cc-mastercard me-1" /> Mastercard
                      </td>
                      <td>
                        {/* Button trigger modal */}
                        <button type="button" className="btn btn-primary btn-sm btn-rounded" data-bs-toggle="modal" data-bs-target=".orderdetailsModal">
                          View Details
                        </button>
                      </td>
                      <td>
                        <div className="d-flex gap-3">
                          <a href="javascript:void(0);" className="text-success"><i className="mdi mdi-pencil font-size-18" /></a>
                          <a href="javascript:void(0);" className="text-danger"><i className="mdi mdi-delete font-size-18" /></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check font-size-16">
                          <input className="form-check-input" type="checkbox" id="orderidcheck09" />
                          <label className="form-check-label" htmlFor="orderidcheck09" />
                        </div>
                      </td>
                      <td><a href="javascript: void(0);" className="text-body fw-bold">#SK2548</a> </td>
                      <td>Clark Benson</td>
                      <td>
                        01 Oct, 2019
                      </td>
                      <td>
                        $345
                      </td>
                      <td>
                        <span className="badge badge-pill badge-soft-warning font-size-12">Refund</span>
                      </td>
                      <td>
                        <i className="fab fa-cc-visa me-1" /> Visa
                      </td>
                      <td>
                        {/* Button trigger modal */}
                        <button type="button" className="btn btn-primary btn-sm btn-rounded" data-bs-toggle="modal" data-bs-target=".orderdetailsModal">
                          View Details
                        </button>
                      </td>
                      <td>
                        <div className="d-flex gap-3">
                          <a href="javascript:void(0);" className="text-success"><i className="mdi mdi-pencil font-size-18" /></a>
                          <a href="javascript:void(0);" className="text-danger"><i className="mdi mdi-delete font-size-18" /></a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ul className="pagination pagination-rounded justify-content-end mb-2">
                <li className="page-item disabled">
                  <a className="page-link" href="javascript: void(0);" aria-label="Previous">
                    <i className="mdi mdi-chevron-left" />
                  </a>
                </li>
                <li className="page-item active"><a className="page-link" href="javascript: void(0);">1</a></li>
                <li className="page-item"><a className="page-link" href="javascript: void(0);">2</a></li>
                <li className="page-item"><a className="page-link" href="javascript: void(0);">3</a></li>
                <li className="page-item"><a className="page-link" href="javascript: void(0);">4</a></li>
                <li className="page-item"><a className="page-link" href="javascript: void(0);">5</a></li>
                <li className="page-item">
                  <a className="page-link" href="javascript: void(0);" aria-label="Next">
                    <i className="mdi mdi-chevron-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* end row */}
    </div> {/* container-fluid */}
  </div>
  {/* End Page-content */}
  {/* Modal */}
  <div className="modal fade orderdetailsModal" tabIndex={-1} role="dialog" aria-labelledby="orderdetailsModalLabel&quot;" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="orderdetailsModalLabel&quot;">Order Details</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <p className="mb-2">Product id: <span className="text-primary">#SK2540</span></p>
          <p className="mb-4">Billing Name: <span className="text-primary">Neal Matthews</span></p>
          <div className="table-responsive">
            <table className="table align-middle table-nowrap">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <div>
                      <img src="assets/images/product/img-7.png" alt className="avatar-sm" />
                    </div>
                  </th>
                  <td>
                    <div>
                      <h5 className="text-truncate font-size-14">Wireless Headphone (Black)</h5>
                      <p className="text-muted mb-0">$ 225 x 1</p>
                    </div>
                  </td>
                  <td>$ 255</td>
                </tr>
                <tr>
                  <th scope="row">
                    <div>
                      <img src="assets/images/product/img-4.png" alt className="avatar-sm" />
                    </div>
                  </th>
                  <td>
                    <div>
                      <h5 className="text-truncate font-size-14">Hoodie (Blue)</h5>
                      <p className="text-muted mb-0">$ 145 x 1</p>
                    </div>
                  </td>
                  <td>$ 145</td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <h6 className="m-0 text-right">Sub Total:</h6>
                  </td>
                  <td>
                    $ 400
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <h6 className="m-0 text-right">Shipping:</h6>
                  </td>
                  <td>
                    Free
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <h6 className="m-0 text-right">Total:</h6>
                  </td>
                  <td>
                    $ 400
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  {/* end modal */}
</div>

      
    </>
  )
}

export default OrdersListPage
