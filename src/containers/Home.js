import React, { Fragment } from 'react'
import { withSiteData } from 'react-static'
//
import NavWrapper from 'components/nav/NavWrapper';
import PostsWrapper from 'components/posts/PostsWrapper';

export default withSiteData(() => (
  <Fragment>
     <NavWrapper />
     <PostsWrapper />
  </Fragment>
))
