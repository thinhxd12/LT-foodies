import React, { Component } from 'react'
import ModalVideo from 'react-modal-video'

export default class Video extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }
    render() {
        return (
            <div className="video py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-5 d-flex align-items-center">
                            <div className="video__info">
                                <h3 className="txt__header">YOU CAN WATCH OUR COOKING VIDEO PROCESS!</h3>
                                <p>Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quae, consequatur voluptatem ad.</p>
                                <a href="/#" className="btn__primary">Play Video</a>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="video__content d-flex align-items-center justify-content-center" style={{
                                background: 'url(./assets/images/video.jpg)',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}>
                                <ModalVideo channel='youtube' youtube={{autoplay:0}} isOpen={this.state.isOpen} videoId='oqaZV9Oxco0' onClose={() => this.setState({ isOpen: false })} />
                                <i className="fa fa-play" onClick={this.openModal}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
