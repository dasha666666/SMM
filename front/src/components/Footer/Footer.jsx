import { Typography } from "@mui/material";
import phoneImage from "../../images/phone.png";
import mailImage from "../../images/mail.png";
import { OUR_MAIL, OUR_PHONE } from "../../constants";
import "./style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <Typography sx={{ fontSize: "1.5rem" }}>
        Контакты
      </Typography>
      <div className="footer__bottom">
        <a
          className="footer__block"
          href="tel:+79614329493"
        >
          <img
            className="footer__image footer__image-top"
            src={phoneImage}
            alt=""
          />
          <Typography>{OUR_PHONE}</Typography>
        </a>
        <a
          className="footer__block"
          href="mailto:9mmndn@gmail.com"
        >
          <img
            className="footer__image"
            src={mailImage}
            alt=""
          />
          <Typography>{OUR_MAIL}</Typography>
        </a>
      </div>
    </div>
  );
};

export default Footer;
