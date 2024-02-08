import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 heading </Typography>
      <Typography variant="h2">h2 heading </Typography>
      <Typography variant="h3">h3 heading </Typography>
      <Typography variant="h4">h4 heading </Typography>
      <Typography variant="h5">h5 heading </Typography>
      <Typography variant="h6">h6 heading </Typography>

      <Typography variant="subtitle1">sub title1</Typography>
      <Typography variant="subtitle2">sub title2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        fugit magnam possimus repellendus. Ipsam accusantium quasi earum
        excepturi enim. Dolorem, velit eos. Aut quaerat animi atque eligendi,
        est dolorem sequi.
      </Typography>
      <Typography variant="body2">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        fugit magnam possimus repellendus. Ipsam accusantium quasi earum
        excepturi enim. Dolorem, velit eos. Aut quaerat animi atque eligendi,
        est dolorem sequi.
      </Typography>
    </div>
  );
};
