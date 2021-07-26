import React, { Component } from 'react'

export default class ServiceTeam extends Component {
    render() {
        let { team } = this.props;
        return (
            <div className="service__team">
                <img src={team.img} alt="..." className="img-fluid" />
                <div className="service__team__info">
                    <a href="/#" className="txt__link__primary">{team.name}</a>
                    <p>{team.job}</p>
                </div>
            </div>
        )
    }
}
