import React from 'react';
import Layout from './layout';
import { Link } from 'gatsby';

const PostLayout = ({
  children,
  pageContext: {
    frontmatter: { title, description },
  },
}) => {
  return (
    <Layout title={title} description={description}>
      {children}
      <Link to="/">&larr;back to home</Link>
    </Layout>
  );
};

export default PostLayout;
