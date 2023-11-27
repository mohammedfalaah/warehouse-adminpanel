import React from 'react'

const CheckOutPage = () => {
  return (
    <>
    <div>
  <div className="main-content">
    <div className="page-content">
      <div className="container-fluid">
        {/* start page title */}
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <h4 className="mb-sm-0 font-size-18">Checkout</h4>
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item"><a href="javascript: void(0);">Ecommerce</a></li>
                  <li className="breadcrumb-item active">Checkout</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/* end page title */}
        <div className="checkout-tabs">
          <div className="row">
            <div className="col-xl-2 col-sm-3">
              <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a className="nav-link active" id="v-pills-shipping-tab" data-bs-toggle="pill" href="#v-pills-shipping" role="tab" aria-controls="v-pills-shipping" aria-selected="true">
                  <i className="bx bxs-map                 d-block check-nav-icon mt-4 mb-2" />
                  <p className="fw-bold mb-4">Shipping Info</p>
                </a>
                <a className="nav-link" id="v-pills-payment-tab" data-bs-toggle="pill" href="#v-pills-payment" role="tab" aria-controls="v-pills-payment" aria-selected="false"> 
                  <i className="bx bx-money d-block check-nav-icon mt-4 mb-2" />
                  <p className="fw-bold mb-4">Product Info</p>
                </a>
                <a className="nav-link" id="v-pills-confir-tab" data-bs-toggle="pill" href="#v-pills-confir" role="tab" aria-controls="v-pills-confir" aria-selected="false">
                  <i className="bx bx-badge-check d-block check-nav-icon mt-4 mb-2" />
                  <p className="fw-bold mb-4">Confirmation</p>
                </a>
              </div>
            </div>
            <div className="col-xl-10 col-sm-9 col-lg-3">
              <div className="card">
                <div className="card-body">
                  <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-shipping" role="tabpanel" aria-labelledby="v-pills-shipping-tab">
                      <div>
                        <h4 className="card-title">Shipping information</h4>
                        <p className="card-title-desc">Fill all information below</p>
                        <form>
                          <div className="form-group row mb-4">
                            <label className="col-md-2 col-form-label">From</label>
                            <div className="col-md-10">
                              <select className="form-control select2" title="Country">
                                <option value={0}>Choose Warehouse</option>
                                <option value="AF">Afghanistan</option>
                                <option value="AL">Albania</option>
                                <option value="DZ">Algeria</option>
                                <option value="AS">American Samoa</option>
                                <option value="AD">Andorra</option>
                                <option value="AO">Angola</option>
                                <option value="AI">Anguilla</option>
                                <option value="AQ">Antarctica</option>
                                <option value="AR">Argentina</option>
                                <option value="AM">Armenia</option>
                                <option value="AW">Aruba</option>
                                <option value="AU">Australia</option>
                                <option value="AT">Austria</option>
                                <option value="AZ">Azerbaijan</option>
                                <option value="BS">Bahamas</option>
                                <option value="BH">Bahrain</option>
                                <option value="BD">Bangladesh</option>
                                <option value="BB">Barbados</option>
                                <option value="BY">Belarus</option>
                                <option value="BE">Belgium</option>
                                <option value="BZ">Belize</option>
                                <option value="BJ">Benin</option>
                                <option value="BM">Bermuda</option>
                                <option value="BT">Bhutan</option>
                                <option value="BO">Bolivia</option>
                                <option value="BW">Botswana</option>
                                <option value="BV">Bouvet Island</option>
                                <option value="BR">Brazil</option>
                                <option value="BN">Brunei Darussalam</option>
                                <option value="BG">Bulgaria</option>
                                <option value="BF">Burkina Faso</option>
                                <option value="BI">Burundi</option>
                                <option value="KH">Cambodia</option>
                                <option value="CM">Cameroon</option>
                                <option value="CA">Canada</option>
                                <option value="CV">Cape Verde</option>
                                <option value="KY">Cayman Islands</option>
                                <option value="CF">Central African Republic</option>
                                <option value="TD">Chad</option>
                                <option value="CL">Chile</option>
                                <option value="CN">China</option>
                                <option value="CX">Christmas Island</option>
                                <option value="CC">Cocos (Keeling) Islands</option>
                                <option value="CO">Colombia</option>
                                <option value="KM">Comoros</option>
                                <option value="CG">Congo</option>
                                <option value="CK">Cook Islands</option>
                                <option value="CR">Costa Rica</option>
                                <option value="CI">Cote d'Ivoire</option>
                                <option value="HR">Croatia (Hrvatska)</option>
                                <option value="CU">Cuba</option>
                                <option value="CY">Cyprus</option>
                                <option value="CZ">Czech Republic</option>
                                <option value="DK">Denmark</option>
                                <option value="DJ">Djibouti</option>
                                <option value="DM">Dominica</option>
                                <option value="DO">Dominican Republic</option>
                                <option value="EC">Ecuador</option>
                                <option value="EG">Egypt</option>
                                <option value="SV">El Salvador</option>
                                <option value="GQ">Equatorial Guinea</option>
                                <option value="ER">Eritrea</option>
                                <option value="EE">Estonia</option>
                                <option value="ET">Ethiopia</option>
                                <option value="FK">Falkland Islands (Malvinas)</option>
                                <option value="FO">Faroe Islands</option>
                                <option value="FJ">Fiji</option>
                                <option value="FI">Finland</option>
                                <option value="FR">France</option>
                                <option value="GF">French Guiana</option>
                                <option value="PF">French Polynesia</option>
                                <option value="GA">Gabon</option>
                                <option value="GM">Gambia</option>
                                <option value="GE">Georgia</option>
                                <option value="DE">Germany</option>
                                <option value="GH">Ghana</option>
                                <option value="GI">Gibraltar</option>
                                <option value="GR">Greece</option>
                                <option value="GL">Greenland</option>
                                <option value="GD">Grenada</option>
                                <option value="GP">Guadeloupe</option>
                                <option value="GU">Guam</option>
                                <option value="GT">Guatemala</option>
                                <option value="GN">Guinea</option>
                                <option value="GW">Guinea-Bissau</option>
                                <option value="GY">Guyana</option>
                                <option value="HT">Haiti</option>
                                <option value="HN">Honduras</option>
                                <option value="HK">Hong Kong</option>
                                <option value="HU">Hungary</option>
                                <option value="IS">Iceland</option>
                                <option value="IN">India</option>
                                <option value="ID">Indonesia</option>
                                <option value="IQ">Iraq</option>
                                <option value="IE">Ireland</option>
                                <option value="IL">Israel</option>
                                <option value="IT">Italy</option>
                                <option value="JM">Jamaica</option>
                                <option value="JP">Japan</option>
                                <option value="JO">Jordan</option>
                                <option value="KZ">Kazakhstan</option>
                                <option value="KE">Kenya</option>
                                <option value="KI">Kiribati</option>
                                <option value="KR">Korea, Republic of</option>
                                <option value="KW">Kuwait</option>
                                <option value="KG">Kyrgyzstan</option>
                                <option value="LV">Latvia</option>
                                <option value="LB">Lebanon</option>
                                <option value="LS">Lesotho</option>
                                <option value="LR">Liberia</option>
                                <option value="LY">Libyan Arab Jamahiriya</option>
                                <option value="LI">Liechtenstein</option>
                                <option value="LT">Lithuania</option>
                                <option value="LU">Luxembourg</option>
                                <option value="MO">Macau</option>
                                <option value="MG">Madagascar</option>
                                <option value="MW">Malawi</option>
                                <option value="MY">Malaysia</option>
                                <option value="MV">Maldives</option>
                                <option value="ML">Mali</option>
                                <option value="MT">Malta</option>
                                <option value="MH">Marshall Islands</option>
                                <option value="MQ">Martinique</option>
                                <option value="MR">Mauritania</option>
                                <option value="MU">Mauritius</option>
                                <option value="YT">Mayotte</option>
                                <option value="MX">Mexico</option>
                                <option value="MD">Moldova, Republic of</option>
                                <option value="MC">Monaco</option>
                                <option value="MN">Mongolia</option>
                                <option value="MS">Montserrat</option>
                                <option value="MA">Morocco</option>
                                <option value="MZ">Mozambique</option>
                                <option value="MM">Myanmar</option>
                                <option value="NA">Namibia</option>
                                <option value="NR">Nauru</option>
                                <option value="NP">Nepal</option>
                                <option value="NL">Netherlands</option>
                                <option value="AN">Netherlands Antilles</option>
                                <option value="NC">New Caledonia</option>
                                <option value="NZ">New Zealand</option>
                                <option value="NI">Nicaragua</option>
                                <option value="NE">Niger</option>
                                <option value="NG">Nigeria</option>
                                <option value="NU">Niue</option>
                                <option value="NF">Norfolk Island</option>
                                <option value="MP">Northern Mariana Islands</option>
                                <option value="NO">Norway</option>
                                <option value="OM">Oman</option>
                                <option value="PW">Palau</option>
                                <option value="PA">Panama</option>
                                <option value="PG">Papua New Guinea</option>
                                <option value="PY">Paraguay</option>
                                <option value="PE">Peru</option>
                                <option value="PH">Philippines</option>
                                <option value="PN">Pitcairn</option>
                                <option value="PL">Poland</option>
                                <option value="PT">Portugal</option>
                                <option value="PR">Puerto Rico</option>
                                <option value="QA">Qatar</option>
                                <option value="RE">Reunion</option>
                                <option value="RO">Romania</option>
                                <option value="RU">Russian Federation</option>
                                <option value="RW">Rwanda</option>
                                <option value="KN">Saint Kitts and Nevis</option>
                                <option value="LC">Saint LUCIA</option>
                                <option value="WS">Samoa</option>
                                <option value="SM">San Marino</option>
                                <option value="ST">Sao Tome and Principe</option>
                                <option value="SA">Saudi Arabia</option>
                                <option value="SN">Senegal</option>
                                <option value="SC">Seychelles</option>
                                <option value="SL">Sierra Leone</option>
                                <option value="SG">Singapore</option>
                                <option value="SK">Slovakia (Slovak Republic)</option>
                                <option value="SI">Slovenia</option>
                                <option value="SB">Solomon Islands</option>
                                <option value="SO">Somalia</option>
                                <option value="ZA">South Africa</option>
                                <option value="ES">Spain</option>
                                <option value="LK">Sri Lanka</option>
                                <option value="SH">St. Helena</option>
                                <option value="PM">St. Pierre and Miquelon</option>
                                <option value="SD">Sudan</option>
                                <option value="SR">Suriname</option>
                                <option value="SZ">Swaziland</option>
                                <option value="SE">Sweden</option>
                                <option value="CH">Switzerland</option>
                                <option value="SY">Syrian Arab Republic</option>
                                <option value="TW">Taiwan, Province of China</option>
                                <option value="TJ">Tajikistan</option>
                                <option value="TZ">Tanzania, United Republic of</option>
                                <option value="TH">Thailand</option>
                                <option value="TG">Togo</option>
                                <option value="TK">Tokelau</option>
                                <option value="TO">Tonga</option>
                                <option value="TT">Trinidad and Tobago</option>
                                <option value="TN">Tunisia</option>
                                <option value="TR">Turkey</option>
                                <option value="TM">Turkmenistan</option>
                                <option value="TC">Turks and Caicos Islands</option>
                                <option value="TV">Tuvalu</option>
                                <option value="UG">Uganda</option>
                                <option value="UA">Ukraine</option>
                                <option value="AE">United Arab Emirates</option>
                                <option value="GB">United Kingdom</option>
                                <option value="US">United States</option>
                                <option value="UY">Uruguay</option>
                                <option value="UZ">Uzbekistan</option>
                                <option value="VU">Vanuatu</option>
                                <option value="VE">Venezuela</option>
                                <option value="VN">Viet Nam</option>
                                <option value="VG">Virgin Islands (British)</option>
                                <option value="VI">Virgin Islands (U.S.)</option>
                                <option value="WF">Wallis and Futuna Islands</option>
                                <option value="EH">Western Sahara</option>
                                <option value="YE">Yemen</option>
                                <option value="ZM">Zambia</option>
                                <option value="ZW">Zimbabwe</option>                                    
                              </select>
                            </div>
                          </div>
                          <div className="form-group row mb-4">
                            <label className="col-md-2 col-form-label">To</label>
                            <div className="col-md-10">
                              <select className="form-control select2" title="Country">
                                <option value={0}>Choose Warehouse Destination</option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="DE">Delaware</option>
                                <option value="Fl"> Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="MT">Montana</option>
                                <option value="NV">Nevada</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Dakota</option>
                                <option value="TX">Texas</option>
                                <option value="VA">Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                              </select>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-payment" role="tabpanel" aria-labelledby="v-pills-payment-tab">
                      <div>
                        <h4 className="card-title">Product information</h4>
                        <p className="card-title-desc">Fill all information below</p>
                        <div class="input-group rounded">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <span class="input-group-text border-0" id="search-addon">
    <i class="fas fa-search"></i>
  </span>
</div>
                        <h5 className="mt-5 mb-3 font-size-15"> Product </h5>
                        <div className="p-4">
                        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
                        </div>
                        

                      </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-confir" role="tabpanel" aria-labelledby="v-pills-confir-tab">
                      <div className="card shadow-none border mb-0">
                        <div className="card-body">
                          <h4 className="card-title mb-4">Order Summary</h4>
                          <div className="table-responsive">
                            <table className="table align-middle mb-0 table-nowrap">
                              <thead className="table-light">
                                <tr>
                                  <th scope="col">Product</th>
                                  <th scope="col">Product Desc</th>
                                  <th scope="col">Price</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row"><img src="assets/images/product/img-1.png" alt="product-img" title="product-img" className="avatar-md" /></th>
                                  <td>
                                    <h5 className="font-size-14 text-truncate"><a href="ecommerce-product-detail.html" className="text-dark">Half sleeve T-shirt  (64GB) </a></h5>
                                    <p className="text-muted mb-0">$ 450 x 1</p>
                                  </td>
                                  <td>$ 450</td>
                                </tr>
                                <tr>
                                  <th scope="row"><img src="assets/images/product/img-7.png" alt="product-img" title="product-img" className="avatar-md" /></th>
                                  <td>
                                    <h5 className="font-size-14 text-truncate"><a href="ecommerce-product-detail.html" className="text-dark">Wireless Headphone </a></h5>
                                    <p className="text-muted mb-0">$ 225 x 1</p>
                                  </td>
                                  <td>$ 225</td>
                                </tr>
                                <tr>
                                  <td colSpan={2}>
                                    <h6 className="m-0 text-end">Sub Total:</h6>
                                  </td>
                                  <td>
                                    $ 675
                                  </td>
                                </tr>
                                <tr>
                                  <td colSpan={3}>
                                    <div className="bg-primary bg-soft p-3 rounded">
                                      <h5 className="font-size-14 text-primary mb-0"><i className="fas fa-shipping-fast me-2" /> Shipping <span className="float-end">Free</span></h5>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td colSpan={2}>
                                    <h6 className="m-0 text-end">Total:</h6>
                                  </td>
                                  <td>
                            $675
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-sm-6">
                  <a href="ecommerce-cart.html" className="btn text-muted d-none d-sm-inline-block btn-link">
                    <i className="mdi mdi-arrow-left me-1" /> Back to Shopping Cart </a>
                </div> {/* end col */}
                <div className="col-sm-6">
                  <div className="text-end">
                    <a href="ecommerce-checkout.html" className="btn btn-success">
                      <i className="mdi mdi-truck-fast me-1" /> Proceed to Shipping </a>
                  </div>
                </div> {/* end col */}
              </div> {/* end row */}
            </div>
          </div>
        </div>
        {/* end row */}
      </div> {/* container-fluid */}
    </div>
    {/* End Page-content */}
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            © Skote.
          </div>
          <div className="col-sm-6">
            <div className="text-sm-end d-none d-sm-block">
              Design &amp; Develop by Themesbrand
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
  {/* end main content*/}
  {/* END layout-wrapper */}
  {/* Right Sidebar */}
  <div className="right-bar">
    <div data-simplebar className="h-100">
      <div className="rightbar-title d-flex align-items-center px-3 py-4">
        <h5 className="m-0 me-2">Settings</h5>
        <a href="javascript:void(0);" className="right-bar-toggle ms-auto">
          <i className="mdi mdi-close noti-icon" />
        </a>
      </div>
      {/* Settings */}
      <hr className="mt-0" />
      <h6 className="text-center mb-0">Choose Layouts</h6>
      <div className="p-4">
        <div className="mb-2">
          <img src="assets/images/layouts/layout-1.jpg" className="img-thumbnail" alt="layout images" />
        </div>
        <div className="form-check form-switch mb-3">
          <input className="form-check-input theme-choice" type="checkbox" id="light-mode-switch" defaultChecked />
          <label className="form-check-label" htmlFor="light-mode-switch">Light Mode</label>
        </div>
        <div className="mb-2">
          <img src="assets/images/layouts/layout-2.jpg" className="img-thumbnail" alt="layout images" />
        </div>
        <div className="form-check form-switch mb-3">
          <input className="form-check-input theme-choice" type="checkbox" id="dark-mode-switch" />
          <label className="form-check-label" htmlFor="dark-mode-switch">Dark Mode</label>
        </div>
        <div className="mb-2">
          <img src="assets/images/layouts/layout-3.jpg" className="img-thumbnail" alt="layout images" />
        </div>
        <div className="form-check form-switch mb-3">
          <input className="form-check-input theme-choice" type="checkbox" id="rtl-mode-switch" />
          <label className="form-check-label" htmlFor="rtl-mode-switch">RTL Mode</label>
        </div>
        <div className="mb-2">
          <img src="assets/images/layouts/layout-4.jpg" className="img-thumbnail" alt="layout images" />
        </div>
        <div className="form-check form-switch mb-5">
          <input className="form-check-input theme-choice" type="checkbox" id="dark-rtl-mode-switch" />
          <label className="form-check-label" htmlFor="dark-rtl-mode-switch">Dark RTL Mode</label>
        </div>
      </div>
    </div> {/* end slimscroll-menu*/}
  </div>
  {/* /Right-bar */}
  {/* Right bar overlay*/}
  <div className="rightbar-overlay" />
</div>

      
    </>
  )
}

export default CheckOutPage
