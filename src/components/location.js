import React from 'react'
import logo1 from '../components/assets/Huge Global.svg'
import logo2 from '../components/assets/netflix.svg'
import logo3 from '../components/assets/reddit.svg'
import logo4 from '../components/assets/amazon.svg'
import logo5 from '../components/assets/discord.svg'
import logo6 from '../components/assets/spotify.svg'

const location = () => {
    return (
        <>
            <div class="container pt-5">
                <h1 class="huge-global text-center">Huge Global Network <br />of Fast VPN</h1>
                <p class="see-las text-center">See LaslesVPN everywhere to make it easier for you when you move locations.</p>
            </div>

            <div class="container pt-5 ">
                <div class="row">
                    <div class="col-md-12 col-12 col-lg-12 col-xl-12 text-center">
                        <img src={logo1} class="img-fluid" alt="lasles-logo" />
                    </div>
                </div>
            </div>

            <div class="container pt-3">
                <div class="centered-container-2">
                    <div class="row custom-row-2">
                        <div class="col-md-12 col-12 col-lg-12 col-xl-12 custom-column-2">
                            <div class="slider">
                                <div>
                                    <img src={logo2} alt="lasles-logo" class="img-fluid custom-c slider-item" />
                                </div>
                                <div>
                                    <img src={logo3} alt="lasles-logo" class="img-fluid custom-c slider-item" />
                                </div>
                                <div>
                                    <img src={logo4} alt="lasles-logo" class="img-fluid custom-c slider-item" />
                                </div>
                                <div>

                                    <img src={logo5} alt="lasles-logo" class="img-fluid custom-c slider-item" />
                                </div>
                                <div>
                                    <img src={logo6} alt="lasles-logo" class="img-fluid custom-c slider-item" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default location
