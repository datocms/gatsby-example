const path = require('path');
const gatsbyDatoCmsSource = require('gatsby-datocms-source');

exports.createPages = ({ graphql }) => {
  const detail = path.resolve('templates/detail.js');

  return graphql(`
    {
      datocms {
        blogPosts {
          id
          slug
        }
      }
    }
  `)
    .then(result => {
      const pages = [];

      result.data.datocms.blogPosts.forEach(blogPost => {
        pages.push({
          path: `posts/${blogPost.slug}.html`,
          component: detail,
          blogPostId: blogPost.id
        })
      });

      return pages;
    });
};

exports.augmentGraphQLSchema = ({ graphql }) => {
  return gatsbyDatoCmsSource(
    'datocms',
    graphql,
    {
      apiToken: 'faeb9172e232a75339242faafb9e56de8c8f13b735f7090964'
    }
  );
};
