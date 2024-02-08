import { Stack, Rating, FormControlLabel } from "@mui/material"

export const MuiRating = () => {
  return (
    <Stack spacing={1}>
      <FormControlLabel
        label=" Read only"
        control={<Rating name="half-rating-read" precision={0.5} readOnly />}
      />
      <Rating name="half-rating" precision={0.5} color="success" />
    </Stack>
  )
}
