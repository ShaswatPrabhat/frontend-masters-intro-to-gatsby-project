import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

const IndexPage = () => {
  const res = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const meta = res?.site?.siteMetadata ?? {};
  return (
    <>
      <header>
        <Link to="/">{meta.title}</Link>
      </header>
      <main>
        <h1>Hello Frontend Masters!</h1>
        <Link to="/about">About this page</Link>
      </main>
    </>
  );
};

export default IndexPage;
