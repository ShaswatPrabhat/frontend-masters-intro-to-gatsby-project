import { graphql, Link, useStaticQuery } from 'gatsby';
import Seo from './seo';
import React from 'react';

const Layout = ({ children, title, description, image, path }) => {
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
      <Seo title={title} description={description} image={image} path={path} />
      <header>
        <Link to="/">{meta.title}</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
