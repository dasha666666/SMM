import { Grid, Typography } from "@mui/material";

import {
  caseMobileApplicationsTwo,
  caseMobileApplications,
  caseEyelashExtensions,
} from "../../constants";

import Header from "../Header/Header";
import TextFieldsAndHeader from "../TextFieldsAndHeader/TextFieldsAndHeader";

import maketImage from "../../images/maket.jpg";
import laImage from "../../images/lalala.png";
import resultImage from "../../images/result.png";

import * as textFieldsStyles from "../TextFieldsAndHeader/style";
import { styles } from "./style";

const CasesPage = () => {
  return (
    <>
      <Header />
      <Grid sx={{ m: "1rem", mt: '4rem' }}>
        <Grid sx={styles.caseBlock}>
          <Grid>
            <Typography
              sx={styles.case}
            >{`Кейс «Наращивание ресниц»`}</Typography>
            <TextFieldsAndHeader
              cases={caseEyelashExtensions}
            />
          </Grid>
          <img
            style={styles.image}
            src={resultImage}
            alt=""
          />
          <Grid>
            <Typography
              sx={styles.case}
            >{`Кейс «Мобильные приложения»`}</Typography>
            <TextFieldsAndHeader
              cases={caseMobileApplications}
            />
            <Typography
              sx={{
                ...textFieldsStyles.styles.header,
                ml: "1rem",
              }}
            >
              Итоги работы:
            </Typography>
            <img
              style={styles.miniImage}
              src={laImage}
              alt=""
            />
          </Grid>
        </Grid>
        <Grid
          sx={{
            ...styles.caseBlock,
            flexDirection: "column",
            alignItems: "center",
            mt: "5rem",
          }}
        >
          <Typography
            sx={styles.case}
          >{`Кейс «Мобильные приложения»`}</Typography>
          <TextFieldsAndHeader
            cases={caseMobileApplicationsTwo}
            headerStyles={{ textAlign: "center" }}
            textStyles={{ textAlign: "center" }}
          />
          <Typography
            sx={{
              ...textFieldsStyles.styles.header,
              ml: "1rem",
            }}
          >
            Макет:
          </Typography>
          <img
            style={{ width: "30rem", marginLeft: '2rem' }}
            src={maketImage}
            alt=""
          />
        </Grid>
      </Grid>
    </>
  );
};

export default CasesPage;
