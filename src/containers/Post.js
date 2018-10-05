import React from 'react'
import { withRouteData, Link } from 'react-static'
import convert from 'htmr'

export default withRouteData(({ post }) => {  
  return (
  <div>
    <Link to="/blog/">{'<'} Back</Link>
    <br />
    <h3>{post.title}</h3>
    {convert(post.contents)}
  </div>
)})
