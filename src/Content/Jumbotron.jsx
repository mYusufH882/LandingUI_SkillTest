import bfinance from '../assets/images/Group 43.png'

function Jumbotron() {
    return (
        <>
            <section>
                <div className="row card-custom-1">
                    <div className="col-md-6">
                        <div className="title-box">
                            <div className="container">
                                <p className="text-light title-box-1">Generate <span style={{ color: "#EC9109" }}>New</span> <br />
                                    Digital
                                    Corporation
                                </p>
                                <p className="fs-5">
                                    We design and build solutions by connecting ideas and technologhy to solve problems and
                                    get
                                    new ideas to business lifecycle.
                                </p>
                                <div className="col-md-4">
                                    <a href="#" className="btn d-block rounded-pill" style={{ backgroundColor: "#EC9109" }}>
                                        <h6 className="text-light mt-2">Get Started</h6>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <img src={bfinance} className="group43" alt="" />
                    </div>
                </div>
            </section >
        </>
    )
}

export default Jumbotron