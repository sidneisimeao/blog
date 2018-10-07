import React from 'react';

import Post from 'components/posts/Post';

import AppContext from "AppContext";

const PostsWrapper = () => (
    <div className="column is-centered is-full-mobile">
        <AppContext.Consumer>
            {context => console.log(context)}
        </AppContext.Consumer>
        <Post />
    </div>
);

export default PostsWrapper;