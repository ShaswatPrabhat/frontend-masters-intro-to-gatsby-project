import React from 'react';
import Layout from '../components/layout';
import { graphql, Link, useStaticQuery } from 'gatsby';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query GetAllPostsForContent {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          slug
          frontmatter {
            description
            title
            date(fromNow: true)
          }
        }
      }
    }
  `);

  const posts = data.allMdx.nodes;
  return (
    <Layout>
      <h1>Hello Frontend Masters!</h1>
      <h2>Check out my recent blogs</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.slug}>{post.frontmatter.title}</Link>
            <br />
            <small>Posted {post.frontmatter.date}</small>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default IndexPage;
