import React from "react";

function Partners() {
    return (
        <section className="partners-section py-5 bg-light text-center">
            <div className="container">
                <h1 className="mb-4" style={{ color: '#0d6efd' }}>Our Partners</h1>
                <div className="row justify-content-center align-items-center">

                    {/* Partner 1 */}
                    <div className="col-6 col-md-3 mb-4">
                        <img src="/syntel.jpeg"  className="img-fluid grayscale" />

                    </div>

                    {/* Partner 2 */}
                    <div className="col-6 col-md-3 mb-4">
                        <img src="/accord.png"  className="img-fluid grayscale" />

                    </div>

                    {/* Partner 3 */}
                    <div className="col-6 col-md-3 mb-4">
                        <img src="/nec.png"  className="img-fluid grayscale" />
                    </div>
                    <div className="col-6 col-md-3 mb-4">
                        <img src="/hikvision.png"  className="img-fluid grayscale" />
                    </div>
                    <div className="col-6 col-md-3 mb-4">
                        <img src="/essl.jpg"  className="img-fluid grayscale" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Partners;
