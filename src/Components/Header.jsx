import elKopra from '../assets/images/vector.png'

function Header() {
    return (
        <header className="row">
            <div className="col-md navgroup">
                <nav className="navbar navbar-expand-lg navbar-light m-2">
                    <div className="container">
                        <a className="navbar-brand" href="/">
                            <img src={elKopra} alt="Logo" className="logo-elkopra" />
                        </a>
                        <div className="d-flex">

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item me-3">
                                        <a className="nav-link text-light active" aria-current="page" href="#">About
                                            Us</a>
                                    </li>
                                    <li className="nav-item me-3">
                                        <a className="nav-link text-light" href="#">Product</a>
                                    </li>
                                    <li className="nav-item me-3">
                                        <a className="nav-link text-light" href="#">Project</a>
                                    </li>
                                    <li className="nav-item me-3">
                                        <a href="#" className="nav-link text-light">Career</a>
                                    </li>
                                    <li className="nav-item me-3">
                                        <button href="#"
                                            className="nav-link text-light btn btn-outline-light rounded-pill" style={{ backgroundColor: "#EC9109" }}>Contact
                                            Us</button>
                                    </li>
                                    <li className="nav-item me-4">
                                        <a href="#" className="nav-link text-light">
                                            Language
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;