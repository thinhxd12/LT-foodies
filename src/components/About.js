import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className="content py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="content__img">
                                <img src="./assets/images/about.png" alt="..." className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="content__info">
                                <h3>Welcome To Our <span>Foodies</span></h3>
                                <p>Aptent taciti sociosqu ad litora conubia nostra, per inceptos himenaeos. Aenean volutpat elementum ante, id eleifend eros luctus sit.<br /><br />Nunc vel pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean volutpat elementum ante, id eleifend eros luctus sit amet. vel tincidunt erat neque non ipsum. Ut sollicitudfin pharetra enim.</p>
                                <a href="/#" className="btn__primary">Read more</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
