import React, { Component } from 'react'

export default class ContactItem extends Component {


    render() {
        let { item } = this.props;
        return (
            <div className="contact__item">
                <i className={item.icon}></i>
                <a href="/#" className="txt__link__primary">{item.name}</a>
                <p>Lorem ante ipsum primis in faucibus orci luctus eted ultrices posuere curae fers luctus eted.</p>
            </div>
        )
    }
}
