import React from 'react';

import Post from 'components/posts/Post';

import { Consumer } from "AppContext";

const Posts = () => (
    <div className="column is-centered is-full-mobile">
        <Consumer>
            {({ posts }) => posts.map(post => <Post key={post.slug} {...post } />)}
        </Consumer>
    </div>
);

export default Posts;