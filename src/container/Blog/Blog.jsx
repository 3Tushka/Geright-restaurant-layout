import React from 'react';
import { SubHeading } from '../../components';
import { data } from '../../constants';

import './blog.scss';

const BlogCard = ({ blogItem: { blogImageUrl, blogDate, blogName, blogTitle, blogDescription } }) => (
    <div className="blog-card">
        <div className="blog-card__image">
            <img src={blogImageUrl} alt="blog" />
        </div>

        <div className="blog-card__date-author">
            <p>{blogDate}</p>
            <p>-{blogName}</p>
        </div>

        <div className="blog-card__title">
            <h1>
                {blogTitle}
            </h1>
        </div>

        <div className="blog-card__desc">
            <p>{blogDescription}</p>
        </div>

        <div className="blog-card__readmore">
            <p><a href="">Read More</a></p>
        </div>
    </div>
);

const Blog = () => (
    <div className="blog" id='blog'>
        <div className="blog-title flex__center">
            <SubHeading title={"Blogs"} />
            <h1 className="headtext__cormorant">Gerícht updates</h1>
        </div>

        <div className="blog-container">
            {data.blog.map((blogItem) => <BlogCard blogItem={blogItem} key={blogItem.blogTitle} />)}
        </div>

        <div className="blog-button">
            <button className="custom__button">View More</button>
        </div>
    </div >
);

export default Blog;
