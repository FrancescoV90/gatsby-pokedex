import * as React from "react";
import { Link, useTranslation, useI18next } from "gatsby-plugin-react-i18next";
import {
  wrapper,
  main,
  header,
  siteTitle,
  navLink,
  footer,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  const { t } = useTranslation();
  const { languages, originalPath } = useI18next();

  return (
    <div className={wrapper}>
      <header className={header}>
        <h1 className={siteTitle}>{pageTitle}</h1>
        <nav>
          <ul>
            <li>
              <Link to="/" className={navLink}>
                {t("pokedex")}
              </Link>
            </li>
            {languages.map((lng) => (
              <li key={lng}>
                <Link to={originalPath} language={lng}>
                  {lng}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className={main}>{children}</main>

      <footer className={footer}>
        <p>
          {new Date().getFullYear()}, {t("gatsby_pokedex")}
        </p>
      </footer>
    </div>
  );
};

export default Layout;
