import React, { PropTypes } from 'react'

export default class Detail extends React.Component {
  render() {
    const post = this.props.data.datocms.blogPosts
      .find(({ id }) => id === this.props.pathContext.blogPostId);

    return (
      <div>
        <h1>{post.title}</h1>
        {post.publicationDate}
      </div>
    );
  }
}

export const pageQuery = `
  {
    datocms {
      blogPosts {
        id
        slug
        title
        publicationDate
      }
    }
  }
`;
