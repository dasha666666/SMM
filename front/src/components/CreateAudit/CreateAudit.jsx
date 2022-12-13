import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const CreateAudit = ({ createAudit, handleOpen }) => {
  const [client, setClient] = useState({
    name: "",
    phone: "",
    question: "",
  });

  const handleField = (key, value) => {
    setClient({ ...client, [key]: value });
  };

  return (
    <div className="add-audit">
      <h2 className="add-audit__header">
        ЗАКАЖИТЕ БЕСПЛАТНЫЙ АУДИТ!
      </h2>
      <p className="add-audit__parag">
        Чтобы мы начали готовить для вас комплекс
        продвижения заполните заявку.
      </p>
      <div className="add-audit__text-fields">
        <TextField
          sx={{ flexGrow: 1 }}
          id="standard-basic"
          label="Имя:"
          variant="standard"
          value={client.name}
          onChange={(event) =>
            handleField("name", event.target.value)
          }
        />
        <TextField
          sx={{ ml: "1rem", flexGrow: 1 }}
          id="standard-basic"
          label="Телефон:"
          variant="standard"
          value={client.phone}
          onChange={(event) =>
            handleField("phone", event.target.value)
          }
        />
      </div>
      <TextField
        sx={{ m: "1rem 5rem 1rem" }}
        id="standard-basic"
        label="Вопрос специалистам:"
        variant="standard"
        value={client.question}
        onChange={(event) =>
          handleField("question", event.target.value)
        }
      />
      <div className="add-audit__action">
        <Button
          sx={{ width: "15rem", color: '#c075fa' }}
          color="inherit"
          variant="outlined"
          onClick={() => createAudit(client)}
        >
          Бесплатный аудит
        </Button>
        <p className="add-audit__confid-value">
          Нажимая на кнопку вы соглашаетесь с
          <Link
            onClick={handleOpen}
            className="add-audit__confid-value__link"
          >
            политикой конфедециальности
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CreateAudit;
