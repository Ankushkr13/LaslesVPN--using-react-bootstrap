import React from 'react'
import logo from '../components/assets/Logo.svg'
import fb from '../components/assets/Facebook.svg'
import twitter from '../components/assets/Twitter.svg'
import instagram from '../components/assets/Instagram.svg'

const footer = () => {
    return (
        <>
            <footer className="text-white  pb-4 footer-ab" style={{background: "#F8F8F8"}}>
                <div className="container text-center text-md-text-left">
                    <div className="row text-center text-md-left">
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <img src={logo} alt="lasles-logo" className="img-fluid-footer1" /><br /><br /><br />
                            <p style={{ color: "black" }}>LaslesVPN is a private virtual network that has unique features and has
                                high security.</p>
                            <div className="images">
                                <img src={fb} alt="lasles-logo" className="img-fluid-footer" />
                                <img src={twitter} alt="lasles-logo" className="img-fluid-footer" />
                                <img src={instagram} alt="lasles-logo" className="img-fluid-footer" />
                            </div>
                            <p style={{ color: "black" }}>©2020LaslesVPN</p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 ">
                            <h5 className="text-uppercase mb-4 font-weight-bold" style={{ color: "black" }}>Product</h5>
                            <p>
                                <a href="#" className="text-black">Download</a>
                            </p>
                            <p>
                                <a href="#" className="text-black">Pricing</a>
                            </p>
                            <p>
                                <a href="#" className="text-black">Locations</a>
                            </p>
                            <p>
                                <a href="#" className="text-black">Server</a>
                            </p>
                            <p>
                                <a href="#" className="text-black">Countries</a>
                            </p>
                            <p>
                                <a href="#" className="text-black">Blog</a>
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 font-weight-bold" style={{ color: "black" }}>Engage</h5>
                            <p>
                                <a href="#" className="text-black">LaslesVPN ?</a>
                            </p>
                            <p>
                                <a href="#" className="text-black">FAQ</a>
                            </p>
                            <p>
                                <a href="#" className="text-black">Tutorials</a>
                            </p>
                            <p>
                                <a href="#" className="text-black">About Us</a>
                            </p>
                            <p>
                                <a href="#" className="text-black">Privacy Policy</a>
                            </p>
                            <p>
                                <a href="#" className="text-black">Terms of Service</a>
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 font-weight-bold" style={{ color: "black" }}>Earn Money</h5>
                            <p>
                                <a href="#" className="text-black">Affiliate</a>
                            </p>
                            <p>
                                <a href="#" className="text-black">Become Partner</a>
                            </p>

                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default footer
