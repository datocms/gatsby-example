import React, { PropTypes } from 'react'
import { Link } from 'react-router'

export default class Homepage extends React.Component {
  renderExcerpt(post) {
    return (
      <div>
        <Link key={post.id} to={`/posts/${post.slug}.html`}>
          <strong>{post.title}</strong>: {post.excerpt}
        </Link>
      </div>
    );
  }
  render() {
    const posts = this.props.data.datocms.blogPosts;

    return (
      <div>
        {posts.map(this.renderExcerpt, this)}
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
        excerpt
      }
    }
  }
`;
