import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
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
    <div className={container}>
      <header className={siteTitle}>
        <p>{data.site.siteMetadata.title}</p>
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

      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()}, Gatsby Pokédex</p>
      </footer>
    </div>
  );
};

export default Layout;
