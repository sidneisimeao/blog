import React from 'react';

import Post from 'components/posts/Post';

import { Consumer } from "AppContext";

const Posts = () => (
    <div className="column is-centered is-full-mobile">
        <Consumer>
            {context => console.log(context)}
        </Consumer>
        <Post />
    </div>
);

export default Posts;