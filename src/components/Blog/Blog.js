import React, { Component } from 'react'
import BlogItem from './BlogItem'

export default class Blog extends Component {
    arrBlog = [
        { id: 1, img: './assets/images/blog1.jpg', date: 'May 10, 2021', title: 'Hello World!' },
        { id: 2, img: './assets/images/blog2.jpg', date: 'May 10, 2021', title: 'Cras fringilla, enim a porta fermentum' },
        { id: 3, img: './assets/images/blog3.jpg', date: 'May 10, 2021', title: 'The Best Cookie Recipes To Bake This Weekend' },
    ]

    renderBlogItem = () => {
        return this.arrBlog.map((item, index) => {
            return <div className="col-md-4">
                <BlogItem key={index} item={item}/>
            </div>
        })
    }

    render() {
        return (
            <div className="blog py-5">
                <div className="container py-5">
                    <h3 className="txt__header">Blog Posts</h3>
                    <div className="row mt-4">
                        {this.renderBlogItem()}
                    </div>
                </div>
            </div>
        )
    }
}
