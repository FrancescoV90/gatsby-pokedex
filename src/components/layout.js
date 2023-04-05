import * as React from "react";
import { Link, useTranslation, useI18next } from "gatsby-plugin-react-i18next";
import {
  wrapper,
  main,
  header,
  siteLink,
  siteTitle,
  langList,
  langLink,
  footer,
} from "./layout.module.css";

const Layout = ({ children }) => {
  const { t } = useTranslation();
  const { languages, originalPath } = useI18next();

  return (
    <div className={wrapper}>
      <header className={header}>
        <Link to="/" className={siteLink}>
          <h1 className={siteTitle}>{t("pokedex")}</h1>
        </Link>
        <nav>
          <ul className={langList}>
            {languages.map((lng) => (
              <li key={lng}>
                <Link to={originalPath} language={lng} className={langLink}>
                  <img
                    src={`https://truelayer.com/images/flags/${
                      lng === "en" ? "gb" : lng
                    }.svg`}
                    alt="Language flag"
                    width={24}
                    height={18}
                  />
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
