import Stack from "@mui/material/Stack"
import CircularProgress from "@mui/material/CircularProgress"

export const MuiProgress = () => {
  return (
    <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
      <CircularProgress color="info" />
    </Stack>
  )
}
