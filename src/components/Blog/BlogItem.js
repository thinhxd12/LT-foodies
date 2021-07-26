import React, { Component } from 'react'

export default class BlogItem extends Component {
    render() {
        let { item } = this.props;
        return (
            <div className="blog__item">
                <h5>{item.date}</h5>
                <img src={item.img} alt="..." className="img-fluid" />
                <a href="/#" className="txt__link__secondary">{item.title}</a>
                <span>
                    <i className="fa fa-user"></i>
                    <a href="/#">W3Layouts</a>
                </span>
            </div>
        )
    }
}
