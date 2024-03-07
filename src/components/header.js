import React from "react";
import logo1 from '../components/assets/Logo.svg'
import { Link } from "react-scroll";


const header = () => {

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light">
                <div class="container">

                    <div className="navbar-brand">
                        <img src={logo1} alt="lasles-logo" class="navbar-logo" />
                    </div>

                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarid">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-center " id="navbarid">
                        <ul className="navbar-nav mx-md-1">

                            <li className="nav-item">
                                <Link className="nav-link" activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" activeClass="active" to="features" spy={true} smooth={true} offset={-100} duration={500}>Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" activeClass="active" to="pricing" spy={true} smooth={true} offset={-100} duration={500}>Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" activeClass="active" to="testimonials" spy={true} smooth={true} offset={-100} duration={500}>Testimonials</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" activeClass="active" to="help" spy={true} smooth={true} offset={-100} duration={500}>Help</Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav ml-md-1">
                            <li className="nav-item ml-xl-5 ml-md-1">
                                <Link class="nav-link custom-signin-btn">Sign In</Link>
                            </li>
                            <li className="nav-item">
                                <Link  class="nav-link custom-signout-btn">Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default header;