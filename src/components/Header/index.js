import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import LogoTellus from "../logoTellus";
import Navigator from "../Navigator";

import './style.css';

const Header = ({ siteTitle }) => (
  <header id="header">
    <Link
      to="/"
    >
      <LogoTellus
        organizationName="TELLUS"
      />
    </Link>

    <h1 className="title">
      {siteTitle}
    </h1>

    <Navigator />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
