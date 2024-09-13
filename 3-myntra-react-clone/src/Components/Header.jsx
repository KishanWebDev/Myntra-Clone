import React from 'react';
import { BsFillPersonFill } from "react-icons/bs";
import { FaGrinHearts } from "react-icons/fa";
import { GiSchoolBag } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const bag = useSelector((store) => store.bag);

  return (
    <header className="bg-light">
      <nav className="navbar navbar-expand-lg navbar-light container">
        <Link className="navbar-brand" to="/">
          <img
            src="/images/myntra_logo.webp"
            alt="Myntra Home"
            height="30"
          />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="#">Men</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Women</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Kids</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Home & Living</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Beauty</a></li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Studio <sup className="text-danger">New</sup>
              </a>
            </li>
          </ul>
          <form className="d-flex my-2 my-lg-0 flex-grow-1 mx-lg-4">
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <i className="material-icons">search</i>
              </span>
              <input className="form-control border-start-0" type="search" placeholder="Search for products, brands and more" />
            </div>
          </form>
          <ul className="navbar-nav">
            <li className="nav-item mx-2">
              <a className="nav-link text-center" href="#">
                <BsFillPersonFill className="d-block mx-auto mb-1" />
                <small>Profile</small>
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-center" href="#">
                <FaGrinHearts className="d-block mx-auto mb-1" />
                <small>Wishlist</small>
              </a>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link text-center position-relative" to="/bag">
                <GiSchoolBag className="d-block mx-auto mb-1" />
                <small>Bag</small>
                {bag.length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {bag.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;