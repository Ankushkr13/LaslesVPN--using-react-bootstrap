import React from 'react'
import logo1 from '../components/assets/Illustration.svg'
import logo2 from '../components/assets/user.svg'
import logo3 from '../components/assets/location.svg'
import logo4 from '../components/assets/Server.svg'

const about = () => {
    return (
        <>
            <section id="about" className="hero-section mt-5">
                <div className="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 col-sm-12">
                            <h1 class="">Want anything to be easy with LaslesVPN.</h1>
                            <p class="">Provide a network for all your needs with ease and fun using LaslesVPN. Discover
                                interesting features from us.</p>

                            <div class="d-flex gap-3">
                                <button class="btn-primary btn btn-danger custom-btn-text">GET STARTED</button>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12 col-sm-12 text-center custom-image-container1">

                            <img src={logo1} class="img-fluid" alt="lasles-logo" />
                        </div>
                    </div>
                </div>
            </section>

            <div className="container pt-5">
                <div className="centered-container">
                    <div className="row ">
                        <div className="col-md-4 col-12 col-lg-4 col-xl-4 custom-column">
                            <img src={logo2} alt="Your Image" class="img-fluid custom-image-1" />
                            <p className="custom-text-1">90+<br /> Users</p>
                        </div>
                        <div className="col-md-4 col-12 col-lg-4 col-xl-4 custom-column">
                            <img src={logo3} alt="Your Image" class="img-fluid custom-image-1" />
                            <p className="custom-text-1">30+<br /> Locations</p>
                        </div>
                        <div className="col-md-4 col-12 col-lg-4 col-xl-4 custom-column">
                            <img src={logo4} alt="Your Image" class="img-fluid custom-image-1" />
                            <p className="custom-text-1">50+<br /> Servers</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default about;
