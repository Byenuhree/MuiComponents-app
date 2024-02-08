import { Box, Stack, Divider, Grid, Paper } from "@mui/material"

export const MuiLayout = () => {
  return (
    <Paper sx={{ padding: "20px" }} elevation={4}>
      <Stack
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          Layout Box
        </Box>
        <Box
          sx={{
            backgroundColor: "success.main",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "success.light",
            },
          }}
        ></Box>
      </Stack>

      <Grid container my={4} spacing={2} columnSpacing={1}>
        <Grid item xs={8}>
          <Box bgcolor="primary.light" p={2}>
            xs=6
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box bgcolor="secondary.light" p={2}>
            xs=4
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box bgcolor="warning.light" p={2}>
            xs=4
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="error.light" p={2}>
            xs=8
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box
            bgcolor="success.light"
            p={2}
            sx={{
              "&:hover": {
                backgroundColor: "error",
              },
            }}
          >
            xs=2
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}
