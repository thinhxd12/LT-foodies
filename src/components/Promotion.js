import React, { Component } from 'react'

export default class Promotion extends Component {
    render() {
        return (
            <div className="promotion" style={{
                backgroundImage: 'url(./assets/images/promo.png)',
                backgroundSize: 'contain'
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="./assets/images/img3.png" alt="..." className="img-fluid" />
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <div className="promotion__info">
                                <h5>FOR 30% DISCOUNT</h5>
                                <h3 className="txt__header">GET OUR PROMOCODE NOW</h3>
                                <p>Uspendisse efficitur orci urna. In et augue ornare, tempor massa in, luctus sapien. Proin a diam et dui fermentum molestie vel id neque.</p>
                                <div className="form__input mt-4">
                                    <p>Never Miss a Deal From Foodies</p>
                                    <input placeholder="Enter your email" />
                                    <a href="/#" className="btn__primary">Get Promocode</a>
                                </div>
                                <p className="mt-4">(Or) To Get Our Mobile Apps</p>
                                <div className="promotion__apps mt-4">
                                    <a href="/#"><i className="fa fa-apple"></i></a>
                                    <a href="/#"><i className="fa fa-play"></i></a>
                                    <a href="/#"><i className="fa fa-windows"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

