import React, { Component } from 'react'
import ContactItem from './ContactItem'

export default class Contact extends Component {

    arrContactItem = [
        { id: 1, name: 'Fast Delivery', icon: 'fa fa-motorcycle' },
        { id: 2, name: 'Fresh Ingredients', icon: 'fa fa-shopping-basket' },
        { id: 3, name: 'Online Suport 24/7', icon: 'fa fa-laptop' },
    ]

    renderContact = () => {
        return this.arrContactItem.map((item, index) => {
            return <div key={index} className="col-md-4">
                <ContactItem item={item}/>
            </div>
        })
    }

    render() {
        return (
            <div className="contact">
                <div className="contact__banner py-5">
                    <div className="container d-flex justify-content-between align-items-center py-3">
                        <div className="">
                            <h3 className="txt__header">CONTACT US NOW!</h3>
                            <p>For Online queries, please call us today</p>
                        </div>
                        <div className="contact__banner__phone">
                            <span className="fa fa-volume-control-phone"></span>
                            <a href="tel:+1(23) 456 789 0000" className="txt__link__secondary">+1(23) 456 789 0000 </a>
                            <p>Or</p>
                            <a href="/#" className="btn__primary">GEt in touch</a>
                        </div>
                    </div>
                </div>
                <div className="container py-5">
                    <div className="row py-3">
                        {this.renderContact()}

                    </div>
                </div>
            </div>
        )
    }
}
