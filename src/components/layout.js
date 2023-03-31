import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  wrapper,
  main,
  header,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  footer,
  disclaimer,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={wrapper}>
      <header className={header}>
        <h1 className={siteTitle}>{pageTitle}</h1>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className={main}>{children}</main>

      <footer className={footer}>
        <p className={disclaimer}>
          &copy; {new Date().getFullYear()}, Gatsby Pokédex
        </p>
      </footer>
    </div>
  );
};

export default Layout;
