import divider from '../assets/images/rectangle-3.png'
import message from '../assets/images/message.png'
import people from '../assets/images/people.png'
import draft from '../assets/images/draft.png'
import youngLady from '../assets/images/young-asian.png'
import React from 'react'
class Feedback extends React.Component {
    render() {
        return (
            <section>
                <div className="row card-custom-1">
                    <div className="row justify-content-center text-center">
                        <div className="col-md text-center my-5">
                            <h5 className="text-light">Lorem ipsum dolot amet lorem ipsum</h5>
                            <h1 className="text-light">Our <span style={{ color: "#EC9109" }}>Passion</span> What We Do.</h1>
                            <img src={divider} alt="" />
                        </div>
                    </div>
                    <div className="row justify-content-center text-center pb-5">
                        <div className="col-md-4">
                            <img src={message} alt="" className='imgIcon' />
                            <h1 className="mt-3 text-light">98%</h1>
                            <span className="text-icon">
                                Possitive Feedback
                            </span>
                        </div>
                        <div className="col-md-4">
                            <img src={people} alt="" />
                            <h1 className="mt-3 text-light">120</h1>
                            <span className="text-icon">
                                Enthusiastic Fulltime Employee
                            </span>
                        </div>
                        <div className="col-md-4">
                            <img src={draft} alt="" />
                            <h1 className="mt-3 text-light">20</h1>
                            <span className="text-icon">
                                Projects Completed
                            </span>
                        </div>
                    </div>
                    <div className="row justify-content-center pt-5">
                        <div className="col-md-11">
                            <div className="card rounded-5 my-5" style={{ backgroundColor: "#6444F0" }}>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-8 text-light my-5 mx-5">
                                            <h2>Subscribe news letter</h2>
                                            <p>
                                                Using a combination of technology, process and talents we focus on our users
                                                needs and help to accelerate their business at any scale. We deliver
                                                consistent
                                            </p>
                                            <div className="col-md-10">
                                                <div className="input-group my-3">
                                                    <input type="text" className="form-control input" placeholder="Input email"
                                                        aria-label="Recipient's username" aria-describedby="button-addon2" />
                                                    <button className="btn btn-outline-light btn-warning tombol w-25" type="button"
                                                        id="button-addon2">Send Email</button>
                                                </div>

                                            </div>
                                            <p className="noted">
                                                This site is protected by reCAPTCHA and the Google <a href="#"
                                                    className="text-light">Privacy Policy</a>
                                                and <a href="#" className="text-light">Terms of
                                                    Service</a> apply.
                                            </p>
                                        </div>
                                        <div className="col-md-2">
                                            <img src={youngLady} className="img-card" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Feedback