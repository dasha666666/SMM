import { Grid, Typography } from "@mui/material";
import { CONTACTS } from "../../constants";

import Header from "../Header/Header";

import contactsImage from "../../images/contacts.png";
import { styles } from "./style";

const ContactsPage = () => {
  return (
    <>
      <Header />
      <Grid sx={styles.block}>
        <Typography
          sx={{ ...styles.text, ...styles.headers }}
        >
          Наши контакты:
        </Typography>
        {CONTACTS.map((string, index) => (
          <Typography
            key={`contact__${index}`}
            sx={{
              ...styles.text,
              ...styles[`contact__${index}`],
            }}
          >
            {string}
          </Typography>
        ))}
        <Typography
          sx={{ ...styles.text, ...styles.headers }}
        >
          Ждём ваши вопросы!
        </Typography>
        <img
          style={styles.image}
          src={contactsImage}
          alt=""
        />
      </Grid>
    </>
  );
};

export default ContactsPage;
