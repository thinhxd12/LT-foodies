import React, { Component } from 'react'
import ServiceItem from './ServiceItem'
import ServiceTeam from './ServiceTeam'

export default class Service extends Component {
    arrTeam = [
        { id: 1, img: './assets/images/team1.jpg', name: 'Jimic Nasium', job: 'Best Chef' },
        { id: 2, img: './assets/images/team2.jpg', name: 'Henry Itondo', job: 'Food Expert' },
    ]
    renderTeam = () => {
        return this.arrTeam.map((team, index) => {
            return <ServiceTeam key={index} team={team} />
        })

    }

    arrTeamInfo = [
        { id: 1, icon: 'fa fa-cutlery', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula nullam augue ipsum dolor.' },
        { id: 2, icon: 'fa fa-coffee', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula nullam augue ipsum dolor.' },
        { id: 3, icon: 'fa fa-beer', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula nullam augue ipsum dolor.' },
        { id: 4, icon: 'fa fa-apple', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas magna at porttitor vehicula nullam augue ipsum dolor.' }
    ]

    renderTeamInfo = () => {
        return this.arrTeamInfo.map((item, index) => {
            return <div key={index} className="col-md-6 px-4">
                <ServiceItem item={item} />
            </div>
        })

    }

    render() {
        return (
            <div className="services">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <div className="services__text">
                                <h3>Hello. Our structure has been present for over 20 years. We make the best !</h3>
                            </div>
                        </div>
                        <div className="col-md-7 d-flex justify-content-between">
                            {this.renderTeam()}
                        </div>
                    </div>
                    <div className="row p-5">
                        {this.renderTeamInfo()}
                    </div>
                </div>
            </div>
        )
    }
}
