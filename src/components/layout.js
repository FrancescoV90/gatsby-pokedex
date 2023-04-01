import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  wrapper,
  main,
  header,
  siteTitle,
  navLink,
  footer,
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
          <ul>
            <li>
              <Link to="/" className={navLink}>
                Pokédex
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className={main}>{children}</main>

      <footer className={footer}>
        <p>&copy; {new Date().getFullYear()}, Gatsby Pokédex</p>
      </footer>
    </div>
  );
};

export default Layout;
