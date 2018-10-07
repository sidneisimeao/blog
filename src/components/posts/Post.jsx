import React from 'react';

const Post = () => (
    <div className="post-wrapper">
        <div className="header-content">
            <img src="http://placehold.it/900x200" />
            <h1 className="title is-4">
                Sidnei Simmon to Make React+Bulma
		</h1>
            <small><i>Posted in <a href="category.html">Web Design</a> on <a href="post.html">January 20, 2015</a> by <a href="category.html">Author</a></i></small>
        </div>
        <div className="content">
            <p>=) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia euismod urna, in gravida leo efficitur a. Sed tempus augue risus, eget faucibus urna hendrerit a. Donec pulvinar maximus dui ut porttitor. Nullam tristique tortor et ipsum tristique, ac lacinia diam faucibus. Nunc cursus massa eget consectetur laoreet.</p>
            <div className="content-footer">
                <hr />
                <p><a className="button menu-label" href="post.html">Continue Reading</a></p>
            </div>
        </div>
    </div>
);

export default Post;