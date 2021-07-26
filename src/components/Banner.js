import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div className="banner d-flex justify-content-center align-items-center" style={{
                backgroundImage: 'url(./assets/images/banner.png)',
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="banner__info">
                                <h3>
                                    Eat Fresh
                                    <br />
                                    Eat Healthy
                                </h3>
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                                <a href="/#" className="btn__primary">View our menu</a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="banner__img">
                                <img src="./assets/images/bannerimg.png" alt="..." className="img-fluid" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
