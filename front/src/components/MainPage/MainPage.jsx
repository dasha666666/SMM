import { useContext, useState } from "react";
import { Typography } from "@mui/material";
import Context from "../../index";
import Header from "../Header/Header";
import ImageSMMForm from "../ImageSMMForm/ImageSMMForm";
import CreateAudit from "../CreateAudit/CreateAudit";
import Benefits from "../Benefits/Benefits";
import Footer from "../Footer/Footer";
import CustomizedSnackbars from "../CustomizedSnackbars/CustomizedSnackbars";
import ModalWindow from "../ModalWindow/ModalWindow";
import { MODAL_TEXT, MODAL_HEAD } from "./constants";

const MainPage = () => {
  const store = useContext(Context);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [flag, setFlag] = useState(true);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const createAudit = async (client) => {
    const result = await store.createAudit(client);
    setFlag(!flag);
    
    if (result === 200) {
      setMessage("Вы были записанны на аудит!");
      setError("");
      return;
    }
    if (result === 400) {
      setMessage("");
      setError("Заполните все поля для записи на аудит!");
      return;
    }
    setMessage("");
    setError("В данный момент запись недоступна, попробуйте позже!");
  };

  return (
    <>
      <Header />
      <ImageSMMForm />
      <Benefits />
      <CreateAudit
        createAudit={createAudit}
        handleOpen={handleOpen}
      />
      <Footer />

      <ModalWindow
        handleClose={handleClose}
        open={open}
        header={MODAL_HEAD}
      >
        <Typography
          textAlign='center'
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{position: "fixed"}}
        >
          {MODAL_HEAD}
        </Typography>
        {MODAL_TEXT.map((parag) => (
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            {parag}
          </Typography>
        ))}
      </ModalWindow>
      <CustomizedSnackbars
        message={message}
        error={error}
        flag={flag}
      />
    </>
  );
};

export default MainPage;
