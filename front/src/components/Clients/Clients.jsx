import { Container, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { clientsInfo } from "../../constants";
import style from "./style";
import "./style.scss";

const Clients = () => {
  return (
    <Container sx={{ p: "2rem 0 4rem" }}>
      <Typography
        sx={style.clientsHeader}
      >
        Наши Клиенты
      </Typography>
      <Grid
        container
        sx={style.clientsAll}
      >
        {clientsInfo.map((client) => (
          <Grid sx={style.clientsAllBlock}>
            <Grid sx={style.clientsAllImageBlock} className="clients-all__image-block">
              <img
                className="clients-all__image"
                src={client.src}
                alt=""
              />
            </Grid>
            <div className="clients-all__parag">
              <Typography
                sx={{ p: "2rem", fontSize: "1.2rem" }}
              >
                {client.text}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Clients;
