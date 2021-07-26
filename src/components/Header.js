import React, { Component } from 'react'
import ThemeMode from './ThemeChanger';

export default class Header extends Component {
    state = {
        className: ''
    };

    componentDidMount = () => {
        window.addEventListener("scroll", this.resizeHeaderOnScroll);
    }

    resizeHeaderOnScroll = () => {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 200;

        if (distanceY > shrinkOn) {
            this.setState({
                className: 'header__fixed'
            })
        } else {
            this.setState({
                className: ''
            })
        }
    }

    render() {
        return (
            <div className={`header fixed-top ${this.state.className}`}>
                <div className="container">
                    <nav className="navbar navbar-expand-md px-0">
                        <a className="navbar-brand" href="/#">
                            <span className="fa fa-cutlery mr-1"></span>
                            Foodies
                        </a>
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#">Menu</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/#" id="dropdownId" data-toggle="dropdown" aria-expanded="false">Pages</a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                                        <a className="dropdown-item" href="/#">Blog Posts</a>
                                        <a className="dropdown-item" href="/#">404 Page</a>
                                        <a className="dropdown-item" href="/#">Landing Page</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#">Contact</a>
                                </li>
                            </ul>


                            <form className="form-inline my-2 my-lg-0">
                                <button className="btn__header">
                                    <i className="fa fa-search"></i>
                                </button>
                            </form>
                        </div>
                        <ThemeMode />
                    </nav>
                </div>

            </div>
        )
    }
}
