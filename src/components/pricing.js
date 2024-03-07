import React from 'react'
import logo1 from '../components/assets/Free.svg'
import logo2 from '../components/assets/tick.svg'

const pricing = () => {
    return (
        <>
            <div id="pricing" className="container mt-5">
                <h1 className="choose-your mt-5 ">Choose Your Plan</h1>
                <p className="choose-para text-center ">Let's choose the package that is best for you and explore it happily and
                    cheerfully.</p>
            </div>

            <div className="container text-center pt-5">
                <div className="row justify-content-center">

                    <div className="col-md-12 col-sm-12 col-lg-4 g-3">
                        <div className="card card1" id="card-2">
                            <img id="card-img-top" src={logo1} alt="lasles-logo" className="img-fluid " />
                            <div className="card-body">
                                <h5 className="card-title">Free Plan</h5>

                                <div className="custom-div-1">
                                    <img src={logo2} alt="lasles-logo" className="img-fluid " />
                                    <p className="text-card">Unlimited bandwitch</p>
                                </div>
                                <div className="custom-div-1">
                                    <img src={logo2} alt="lasles-logo" className="img-fluid " />
                                    <p className="text-card">Encrypted Connection</p>
                                </div>
                                <div className="custom-div-1">
                                    <img src={logo2} alt="lasles-logo" className="img-fluid " />
                                    <p className="text-card">No traffic Logs</p>
                                </div>
                                <div className="custom-div-1">
                                    <img src={logo2} alt="lasles-logo" className="img-fluid " />
                                    <p className="text-card">Works on All Devices</p>
                                </div>
                                <div className="custom-div">
                                    <p className="text-card" style={{ color: "white" }} >.</p>
                                </div>
                                <div className="custom-div">
                                    <p className="text-card" style={{ color: "white" }} >.</p>
                                </div>
                                <br />
                                <div className="card-end" >
                                    <h5 className="card-title-2">Free Plan</h5>
                                    <button className="custom-button-10">Select</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-sm-12 col-lg-4 g-3">
                        <div className="card card1" id="card-2">
                            <img id="card-img-top" src={logo1} alt="lasles-logo" className="img-fluid " />
                            <div className="card-body">
                                <h5 className="card-title">Standard Plan</h5>
                                <div className="custom-div-1">
                                    <img src={logo2} alt="lasles-logo" className="img-fluid " />
                                    <p className="text-card">Unlimited bandwitch</p>
                                </div>
                                <div className="custom-div-1">
                                    <img src={logo2} alt="lasles-logo" className="img-fluid " />
                                    <p className="text-card">Encrypted Connection</p>
                                </div>
                                <div className="custom-div-1">
                                    <img src={logo2} alt="lasles-logo" className="img-fluid " />
                                    <p className="text-card">Yes traffic Logs</p>
                                </div>
                                <div className="custom-div-1">
                                    <img src={logo2} alt="lasles-logo" className="img-fluid " />
                                    <p className="text-card">Works on All Devices</p>
                                </div>
                                <div className="custom-div-1">
                                    <img src={logo2} alt="lasles-logo" className="img-fluid " />
                                    <p className="text-card">Connect Anyware</p>
                                </div>
                                <div className="custom-div">
                                    <p className="text-card" style={{ color: "white" }}>.</p>
                                </div>
                                <br />
                                <div className="card-end">
                                    <h5 className="card-title-2">$9 / mo</h5>
                                    <button className="custom-button-10">Select</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-sm-12 col-lg-4 g-3">
                        <div className="card card1" id="card-2">
                            <img id="card-img-top" src={logo1} alt="lasles-logo" className="img-fluid " />
                            <div className="card-body">
                                <h5 className="card-title">Premium Plan</h5>
                                <div className="custom-div-1">
                                    <img src={logo2} alt="lasles-logo" className="img-fluid " />
                                    <p className="text-card">Unlimited bandwitch</p>
                                </div>
                                <div className="custom-div-1">
                                    <img src={logo2} alt="lasles-logo" className="img-fluid " />
                                    <p className="text-card">Encrypted Connection</p>
                                </div>
                                <div className="custom-div-1">
                                    <img src={logo2} alt="lasles-logo" className="img-fluid " />
                                    <p className="text-card">Yes traffic Logs</p>
                                </div>
                                <div className="custom-div-1">
                                    <img src={logo2} alt="lasles-logo" className="img-fluid " />
                                    <p className="text-card">Works on All Devices</p>
                                </div>
                                <div className="custom-div-1">
                                    <img src={logo2} alt="lasles-logo" className="img-fluid " />
                                    <p className="text-card">Connect Anyware</p>
                                </div>
                                <div className="custom-div-1">
                                    <img src={logo2} alt="lasles-logo" className="img-fluid " />
                                    <p className="text-card">Gets New Features</p>
                                </div>
                                <br />
                                <div className="card-end">
                                    <h5 className="card-title-2">$12 / mo</h5>
                                    <button className="custom-button-10">Select</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default pricing
