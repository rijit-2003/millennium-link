import React from "react";
// import "./Customers.css";

function Customers() {
    return (
        <section className="customers-section py-5 bg-white text-center">
            <div className="container">
                <h1 style={{ color: '#0d6efd', marginBottom: '5rem' }}>
                    Some of our Customers
                </h1>

                <div className="row justify-content-center align-items-center">
                    <div className="col-6 col-md-3 mb-4 text-center">
                        <img
                            src="/SBI_Logo.webp"
                            alt="Bank"
                            style={{ height: "100px", objectFit: "contain", width: "100%" }}
                            className="img-fluid grayscale"
                        />
                        <h4>State Bank of India</h4>
                    </div>
                    <div className="col-6 col-md-3 mb-4 text-center">
                        <img
                            src="/imd.jpg"
                            alt="School"
                            style={{ height: "100px", objectFit: "contain", width: "100%" }}
                            className="img-fluid grayscale"
                        />
                        <h4 style={{ fontWeight: 500 }}>Indian Meteorological Department</h4>

                    </div>
                    <div className="col-6 col-md-3 mb-4 text-center">
                        <img
                            src="/chilis.png"
                            alt="Hospital"
                            style={{ height: "100px", objectFit: "contain", width: "100%" }}
                            className="img-fluid grayscale"
                        />
                        <h4>Chili's Restaurant</h4>
                    </div>
                    <div className="col-6 col-md-3 mb-4 text-center">
                        <img
                            src="/FCI.png"
                            alt="Corporate Office"
                            style={{ height: "100px", objectFit: "contain", width: "100%" }}
                            className="img-fluid grayscale"
                        />
                        <h4>Food Corporation of India</h4>
                    </div>
                    <div className="col-6 col-md-3 mb-4 text-center">
                        <img
                            src="/pataka.jpeg"
                            alt="Corporate Office"
                            style={{ height: "100px", objectFit: "contain", width: "100%" }}
                            className="img-fluid grayscale"
                        />
                        <h4>Pataka Industries</h4>
                    </div>
                    <div className="col-6 col-md-3 mb-4 text-center">
                        <img
                            src="/diocesan.jpg"
                            alt="Corporate Office"
                            style={{ height: "100px", objectFit: "contain", width: "100%" }}
                            className="img-fluid grayscale"
                        />
                        <h4>Diocesan Girls High School</h4>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Customers;
