import React from 'react'
import person1 from '../components/assets/person1.svg'
import perosn2 from '../components/assets/perosn2.svg'
import person3 from '../components/assets/person3.svg'
import stars from '../components/assets/star4.5.svg'

const testimonials = () => {
    return (
        <>
            <div id="testimonials" class="container pt-5">
                <h1 class="trusted-by text-center">Trusted by Thousands of <br />Happy Customers</h1>
                <p class="these-are text-center">These are the stories of our customers who have joined us with great pleasure
                    when using this amazing feature.</p>
            </div>

            <div class="container pt-5">
                <div class="row"  >
                    <div class="col-lg-4 col-md-12 col-sm-12">
                        <div class="card " id="card-10">
                            <div class="card-body">
                                <img src={person1} class="card-top-img" alt="lasles-logo" />
                                <p class="card-text-first">Viezh Robert</p>
                                <p class="card-text-second">Warsaw, Poland</p>
                                <img src={stars} class="img-fluid1" alt="lasles-logo" />
                                <p class="card-text">“Wow... I am very happy to use this VPN, it turned out to be more than my
                                    expectations and so far there have been no problems.LaslesVPN always the best”.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-12 col-sm-12">
                        <div class="card" id="card-10">
                            <div class="card-body">
                                <img src={perosn2} class="card-top-img" alt="lasles-logo" />
                                <p class="card-text-first">Yessica Christy</p>
                                <p class="card-text-second">Shanxi, China</p>
                                <img src={stars} class="img-fluid1" alt="lasles-logo" />
                                <p class="card-text">
                                    “I like it because I like to travel far and still can connect with high speed.”
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-12 col-sm-12">
                        <div class="card" id="card-10">
                            <div class="card-body">
                                <img src={person3} class="card-top-img" alt="lasles-logo" />
                                <p class="card-text-first">Kim Young Jou</p>
                                <p class="card-text-second">Seoul, South Korea</p>
                                <img src={stars} class="img-fluid1" alt="lasles-logo" />
                                <p class="card-text">“This is very unusual for my business that currently requires a virtual
                                    private network that has high security.”.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default testimonials
