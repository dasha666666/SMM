import { ClassNames } from "@emotion/react";
import { Grid, Typography } from "@mui/material";
import { coreValues, HEAD } from "../../constants";
import "./style.scss"

const CoreValues = () => {
  return (
    <Grid className="core-values">
      <Typography mb="2rem" fontSize="2rem">
        Главные ценности {HEAD}
      </Typography>
      <Grid container gap={2} className="core-values__conteiner">
        {coreValues.map((value, index) => (
          <div
            className="core-values__conteiner-block"
            key={value.key}
          >
            <h3 className="core-values__conteiner-block__h3">
              {value.name}
            </h3>
            <p className="core-values__conteiner-block__parag">
              {value.text}
            </p>
            <img
              className={`core-values__conteiner-block__image core-values__conteiner-block__image_${index}`}
              src={value.src}
              alt=""
            />
          </div>
        ))}
      </Grid>
    </Grid>
  );
};

export default CoreValues;
