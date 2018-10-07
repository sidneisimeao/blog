import React from 'react';
import convert from 'htmr';

const Post = ({ author, title, category, date }) => {
    return (
        <div className="post-wrapper">
            <div className="header-content">
                <img src="http://placehold.it/900x200" />
                <h1 className="title is-4">
                    {title}
                </h1>
                <small><i>Postado em <a href="category.html"> {category}</a> em
            <a href="post.html"> {date}</a> por
            <a href="category.html"> {author}</a></i></small>
            </div>
            <div className="content">
            </div>
        </div>
    )
};

export default Post;