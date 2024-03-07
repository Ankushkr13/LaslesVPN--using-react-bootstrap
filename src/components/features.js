import React from 'react'
import logo1 from '../components/assets/Illustration 2.svg'
import logo2 from '../components/assets/ticked.svg'

const features = () => {
    return (
        <>
            <section id='features' className="mid-section">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <img src={logo1} className="img-fluid" alt="lasles-logo" />

                        </div>
                        <div className="col-lg-6 col-md-12 text-center">
                            <h3 className="custom-heading ">We Provide Many <br />Features You Can Use</h3>

                            <p className="text-p ">You can explore the features that we provide with fun and have their own
                                functions each feature.</p>

                            <div className="custom-div">
                                <img src={logo2} alt="lasles-logo" className="img-fluid custom-ima" />
                                <p className="text-s fs-4">Powerful online protection.</p>

                            </div> <br />

                            <div className="custom-div">
                                <img src={logo2} alt="lasles-logo" className="img-fluid custom-ima" />
                                <p className="text-s">Internet without borders.</p>
                            </div><br />

                            <div className="custom-div">
                                <img src={logo2} alt="lasles-logo" className="img-fluid custom-ima" />
                                <p className="text-s">Supercharged VPN</p>
                            </div><br />

                            <div className="custom-div">
                                <img src={logo2} alt="lasles-logo" className="img-fluid custom-ima" />
                                <p className="text-s">No specific time limits.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default features
