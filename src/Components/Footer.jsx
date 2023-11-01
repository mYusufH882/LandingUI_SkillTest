import elKopra from '../assets/images/vector-Nfb.png'
import lock from '../assets/images/iconsax-bold-locationtick.png'
import phone from '../assets/images/iconsax-bold-call.png'
import email from '../assets/images/heroicons-solid-mail.png'

import linkedIn from '../assets/images/linkedin.png'
import ig from '../assets/images/iconsax-bold-instagram.png'
import fb from '../assets/images/iconsax-bold-facebook.png'
import yt from '../assets/images/iconsax-bold-youtube.png'
import React from 'react'

class Footer extends React.Component {
    render() {
        const footer = {
            backgroundColor: "#6444F0"
        };
        return (
            <>
                <footer>
                    <div className="row justify-content-center text-light" style={footer}>
                        <div className="col-md-5 my-5">
                            <img src={elKopra} alt="elkopra-koperasi" className="w-25" />

                            <ul className="list-group mt-4">
                                <li>
                                    <p className="col-md text-justify">
                                        <img src={lock} alt="" />
                                        Jl. Terusan Jakarta No.76, Antapani Tengah, Bandung, Jawa Barat, 40291
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <img src={phone} alt="" />
                                        +62 356 7829 873
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <img src={email} alt="" />
                                        elkopra@gmail.com
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2 my-5">
                            <h5>Company</h5>
                            <ul className="list-group">
                                <li className="mt-4"><a href="#">About Us</a></li>
                                <li className="mt-4"><a href="#">Career</a></li>
                                <li className="mt-4"><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 my-5">
                            <h5>Product</h5>
                            <ul className="list-group">
                                <li className="mt-4"><a href="#">elKopra</a></li>
                                <li className="mt-4"><a href="#">elRaga</a></li>
                                <li className="mt-4"><a href="#">elResto</a></li>
                            </ul>
                        </div>
                        <div className="col-md-2 my-5">
                            <h5>Find Us</h5>
                            <ul className="list-group list-group-horizontal">
                                <li>
                                    <a href="#">
                                        <img src={linkedIn} className="w-10" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={ig} alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={fb} alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={yt} alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}

export default Footer;