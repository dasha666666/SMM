import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { linksMainPageHeader, HEAD } from "../../constants";
import "./style.scss";

const Header = () => {
  return (
    <Grid>
      <div className="header">
        <Link
          className="header__main-link header-link"
          to="/main"
        >
          {HEAD}
        </Link>
        <Grid className="header__other-links">
          {linksMainPageHeader.map((link) => (
            <Link
              className="header__other-links__link header-link"
              key={link.key}
              to={link.path}
            >
              {link.text}
            </Link>
          ))}
        </Grid>
      </div>
    </Grid>
  );
};

export default Header;

