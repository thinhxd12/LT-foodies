import React, { Component } from 'react'

export default class ServiceItem extends Component {
    render() {
        let { item } = this.props;
        return (
            <div className="service__item d-flex">
                <i className={item.icon}></i>
                <div className="service__item__info">
                    <p>{item.text}</p>
                    <a href="/#">Read More</a>
                </div>
            </div>
        )
    }
}
