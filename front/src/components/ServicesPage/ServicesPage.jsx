import { Grid, Typography } from "@mui/material";
import { services } from "../../constants";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { style } from "./style";

const ServicesPage = () => {
  return (
    <>
      <Header />
      <Grid sx={style.sirvises}>
        <Typography sx={style.ourServisesTop}>Наши услуги</Typography>
        <Grid container sx={{justifyContent: "center"}}>
          {services.map((service, index) => (
            <Grid key={service.key} sx={style.servise}>
              <Typography sx={style.serviseName}>
                {service.name.toUpperCase()}
              </Typography>
              <Grid sx={style.bottomText}>
                <Typography
                  sx={[
                    style.serviceText,
                    style.serviseTopText,
                  ]}
                >{`${index+1}. "${service.name}"`}</Typography>
                {service.text.map((string) => (
                  <Typography
                    sx={[
                      style.serviceText,
                      style.textBlock,
                    ]}
                  >
                    {string}
                  </Typography>
                ))}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default ServicesPage;
