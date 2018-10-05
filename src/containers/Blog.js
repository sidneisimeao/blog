
import React, { Fragment } from 'react'
import { withRouteData, Link } from 'react-static'
//
import NavWrapper from 'components/nav/NavWrapper';
import PostsWrapper from 'components/posts/PostsWrapper';

export default withRouteData(({ posts }) => (
  <Fragment>
    
      <NavWrapper />
     <PostsWrapper />
  </Fragment>
))
