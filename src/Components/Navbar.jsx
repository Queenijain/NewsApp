import React, { useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import ThemeContext from "../Context/Theme/ThemeContext";
import { fetchNews } from "../Context/News/NewsAction";
import NewsContext from "../Context/News/NewsContext";

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const { allNews, dispatch } = useContext(NewsContext);

  const [text, setText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const getNews = async () => {
    const data = await fetchNews(text);
    dispatch({
      type: "GET_NEWS",
      payload: data,
    });
  };

  useEffect(() => {
    getNews();
  }, [text]);
  return (
    <nav
      className={
        theme
          ? "navbar navbar-expand-lg bg-body-tertiary shadow"
          : "navbar navbar-expand-lg bg-dark shadow"
      }
    >
      <div className="container-fluid">
        <a
          className={
            theme
              ? "navbar-brand fw-bold fs-3 fst-italic"
              : "navbar-brand fw-bold fs-3 fst-italic text-light"
          }
          href="#"
        >
          Daily Pulse
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-around w-50">
            <li className="nav-item">
              <a
                className={
                  theme
                    ? "nav-link active fs-5 fw-medium"
                    : "nav-link active fs-5 fw-medium text-light"
                }
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  theme
                    ? "nav-link active fs-5 fw-medium"
                    : "nav-link active fs-5 fw-medium text-light"
                }
                aria-current="page"
                type="button"
                onClick={(e) => {
                  setText("Technology");
                }}
              >
                Technology
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  theme
                    ? "nav-link active fs-5 fw-medium"
                    : "nav-link active fs-5 fw-medium text-light"
                }
                aria-current="page"
                type="button"
                onClick={(e) => {
                  setText("Politics");
                }}
              >
                Politics
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  theme
                    ? "nav-link active fs-5 fw-medium"
                    : "nav-link active fs-5 fw-medium text-light"
                }
                aria-current="page"
                type="button"
                onClick={(e) => {
                  setText("BollyWood");
                }}
              >
                Entertainment
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  theme
                    ? "nav-link active fs-5 fw-medium"
                    : "nav-link active fs-5 fw-medium text-light"
                }
                aria-current="page"
                type="button"
                onClick={(e) => {
                  setText("Sports");
                }}
              >
                Sports
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className={
                theme
                  ? "btn btn-dark d-flex align-items-center justify-content-center fs-5"
                  : "btn btn-light d-flex align-items-center justify-content-center fs-5"
              }
              type="button"
              onClick={() => {
                setText(searchTerm);
              }}
            >
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
