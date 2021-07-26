import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer pt-5">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-md-4">
                            <a className="navbar-brand" href="/#">
                                <span className="fa fa-cutlery mr-1"></span>
                                Foodies
                            </a>
                            <p className="mt-3">Duis imperdiet sapien tortor, vitae congue diam auctor vitae. Aliquam eget turpis ornare, euismod ligul aeget, enenatis dui.</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Categories</h5>
                            <div className="footer__catergories">
                                <div className="row">
                                    <div className="col-6">
                                        <a href="/#"><i className="fa fa-angle-right"></i> Food</a>
                                        <a href="/#"><i className="fa fa-angle-right"></i> Non-Veg</a>
                                        <a href="/#"><i className="fa fa-angle-right"></i> Taste</a>
                                    </div>
                                    <div className="col-6">
                                        <a href="/#"><i className="fa fa-angle-right"></i> May 2021</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h5>Newsletter</h5>
                            <div className="form__input__footer">
                                <h5>Subscribe Here Now</h5>
                                <input placeholder="Email Address" />
                                <a href="/#"><i className="fa fa-paper-plane"></i></a>
                                <p>Subscribe to our mailing list and get updates to your email inbox.</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer__copyright py-3 d-flex justify-content-between align-items-center">
                        <p>© 2021 Foodies. All Rights Reserved | WordPress Theme by <a href="/#">W3Layouts.</a></p>
                        <div className="footer__social">
                            <a href="/#"><i className="fa fa-facebook"></i></a>
                            <a href="/#"><i className="fa fa-linkedin"></i></a>
                            <a href="/#"><i className="fa fa-twitter"></i></a>
                            <a href="/#"><i className="fa fa-google-plus"></i></a>
                            <a href="/#"><i className="fa fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
