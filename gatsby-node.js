const path = require('path');

exports.createPages = ({ graphql }) => {
  const detail = path.resolve('templates/detail.js');

  return graphql(`
    {
      allMarkdown(first: 1000) {
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
  `)
    .then(result => {
      const pages = [];

      result.data.allMarkdown.edges.forEach(edge => {
        pages.push({
          path: edge.node.path,
          component: detail,
        })
      });

      return pages;
    });
};
