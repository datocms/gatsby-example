import React, { PropTypes } from 'react'

export default class Detail extends React.Component {
  render() {
    const post = this.props.data.markdown;
    return (
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.bodyHTML }} />
      </div>
    );
  }
}

export const pageQuery = `
  query BlogPostByPath($path: String!) {
    markdown(path: $path) {
      bodyHTML
      frontmatter {
        title
      }
    }
  }
`;
