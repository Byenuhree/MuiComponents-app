import { Box, Switch, FormControlLabel } from "@mui/material"
import React, { useState } from "react"

export const MuiSwitch = () => {
  const [on, setOn] = useState(false)
  console.log({ on })
  const handlechange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOn(event.target.checked)
  }

  return (
    <Box>
      <FormControlLabel
        label="Change Mode"
        control={
          <Switch checked={on} color="success" onChange={handlechange} />
        }
      />
    </Box>
  )
}
