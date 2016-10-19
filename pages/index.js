import React, { PropTypes } from 'react'
import { Link } from 'react-router'

export default class Homepage extends React.Component {
  renderExcerpt({ node: post }) {
    return (
      <Link key={post.path} to={post.path}>
        {post.frontmatter.title}
      </Link>
    );
  }
  render() {
    const posts = this.props.data.allMarkdown.edges;

    return (
      <div>
        {posts.map(this.renderExcerpt, this)}
      </div>
    );
  }
}

export const pageQuery = `
  {
    allMarkdown(first: 2000) {
      edges {
        node {
          path
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
