import React from "react";

function Partners() {
    return (
        <section className="partners-section py-5 bg-light text-center">
            <div className="container">
                <h1 className="mb-4" style={{ color: '#0d6efd' }}>Our Partners</h1>
                <div className="row justify-content-center align-items-center">

                    {/* Partner 1 */}
                    <div className="col-6 col-md-3 mb-4">
                        <img src="/syntel.jpeg" className="img-fluid grayscale" alt="Syntel" style={{ maxHeight: '80px', objectFit: 'contain', width: '100%' }} />
                    </div>

                    <div className="col-6 col-md-3 mb-4">
                        <img src="/accord.png" className="img-fluid grayscale" alt="Accord" style={{ maxHeight: '80px', objectFit: 'contain', width: '100%' }} />
                    </div>

                    <div className="col-6 col-md-3 mb-4">
                        <img src="/nec.png" className="img-fluid grayscale" alt="NEC" style={{ maxHeight: '80px', objectFit: 'contain', width: '100%' }} />
                    </div>

                    <div className="col-6 col-md-3 mb-4">
                        <img src="/hikvision.png" className="img-fluid grayscale" alt="Hikvision" style={{ maxHeight: '80px', objectFit: 'contain', width: '100%' }} />
                    </div>

                    <div className="col-6 col-md-3 mb-4">
                        <img src="/essl.jpg" className="img-fluid grayscale" alt="ESSL" style={{ maxHeight: '80px', objectFit: 'contain', width: '100%' }} />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Partners;
