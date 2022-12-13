import { Grid, Typography } from "@mui/material";
import { styles } from "./style";

const TextFieldsAndHeader = ({cases, headerStyles, textStyles}) => {
  return (
    <Grid sx={styles.box}>
      {cases.map(oneCase => (
        <Grid>
          <Typography sx={{...styles.header, ...headerStyles}}>{oneCase.header}</Typography>
          <Typography sx={textStyles}>{oneCase.text}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default TextFieldsAndHeader;
