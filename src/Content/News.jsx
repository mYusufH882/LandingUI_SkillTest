import divider from '../assets/images/rectangle-3.png'
import newsHacker from '../assets/images/computer-hack.png'
import React from 'react'

class News extends React.Component {
    render() {
        return (
            <>
                <section className="my-4">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="container">
                                <div className="row">
                                    <h1 className="text-center mt-5">Latest New</h1>
                                    <div className="col-md text-center">
                                        <img src={divider} alt="" />
                                    </div>
                                    <p className="text-secondary my-3">At elKopra we are committed to providing top-notcto cater to
                                        all
                                        your
                                        needs. Our team of
                                        dedicated professionals is passionate about delivering exceptional solutions that exceed
                                        expectations.</p>
                                </div>

                                <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
                                    <div className="col">
                                        <div className="card">
                                            <img src={newsHacker} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text text-secondary">Lorem ipsum dolot amet Lorem ipsum dolot
                                                    amet
                                                    Lorem ipsum dolot
                                                    amet Lorem ipsum dolot amet Lorem ipsum dolot amet Lorem ipsum dolot amet
                                                    Lorem
                                                    ipsum dolot amet Lorem ipsum dolot amet Lorem ipsum dolot amet Lorem ipsum
                                                    dolot
                                                    amet Lorem ipsum dolot amet Lorem ipsum dolot amet </p>
                                                <a href="#" className="btn btn-light text-secondary">Learn More...</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <img src={newsHacker} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text text-secondary">
                                                    Lorem ipsum dolot amet Lorem ipsum dolot amet Lorem ipsum dolot amet Lorem
                                                    ipsum
                                                    dolot amet Lorem ipsum dolot amet Lorem ipsum dolot amet Lorem ipsum dolot
                                                    amet
                                                    Lorem ipsum dolot amet Lorem ipsum dolot amet Lorem ipsum dolot amet Lorem
                                                    ipsum
                                                    dolot amet Lorem ipsum dolot amet
                                                </p>
                                                <a href="#" className="btn btn-light text-secondary">Learn More...</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <img src={newsHacker} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <p className="card-text text-secondary">
                                                    Lorem ipsum dolot amet Lorem ipsum dolot amet Lorem ipsum dolot amet Lorem
                                                    ipsum
                                                    dolot amet Lorem ipsum dolot amet Lorem ipsum dolot amet Lorem ipsum dolot
                                                    amet
                                                    Lorem ipsum dolot amet Lorem ipsum dolot amet Lorem ipsum dolot amet Lorem
                                                    ipsum
                                                    dolot amet Lorem ipsum dolot amet
                                                </p>
                                                <a href="#" className="btn btn-light text-secondary">Learn More...</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md text-center">
                                        <a href="#" className="btn btn-primary btn-sm">Read More</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default News