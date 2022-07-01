import { graphql, Link, useStaticQuery } from 'gatsby';
import Seo from './seo';
import React from 'react';
import '../styles/global.css';
import { header, content } from '../styles/layout.module.css';

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
      <header className={header}>
        <Link to="/">{meta.title}</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main className={content}>{children}</main>
    </>
  );
};

export default Layout;
