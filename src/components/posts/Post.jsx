import React from 'react';

import PostHeader from 'components/posts/PostHeader';
import PostContent from 'components/posts/PostContent';

const PostWrapper = () => (
    <div className="post-wrapper">
       <PostHeader />
       <PostContent />
    </div>
);

export default PostWrapper;