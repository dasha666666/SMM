import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { ourTeam } from "../../constants";
import "./style.scss";

const Paty = () => {
  return (
    <Grid sx={{ p: "2rem 4rem 4rem", backgroundColor: "#f9e4dd", mt: '3rem' }}>
      <Typography
        sx={{
          textAlign: "center",
          m: "2rem",
          fontSize: "1.5rem",
        }}
      >
        Наша команда
      </Typography>
      <Grid className="paty">
        {ourTeam.map((person) => (
          <Grid
            key={person.key}
            container
            spacing={2}
            alignItems="center"
          >
            <img
              className="paty__person-image"
              src={person.src}
              alt=""
            />
            <Box>
              <Typography sx={{ fontWeight: "600" }}>
                {person.name}
              </Typography>
              <Typography >{person.job}</Typography>
              <Typography >{person.experience}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Paty;
