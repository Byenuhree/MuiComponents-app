import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material"
import { useState } from "react"

export const MuiRadioButtons = () => {
  const [value, setVal] = useState("")
  console.log({ value })
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVal(event.target.value)
  }
  return (
    <Box>
      <FormControl>
        <FormLabel id="job-expirience-group-label">
          Years of exexpirience
        </FormLabel>
        <RadioGroup
          name="job-expirience-group"
          aria-labelledby="job-expirience-group-label"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel control={<Radio />} label="0-2" value="0-2" />
          <FormControlLabel
            control={<Radio color="secondary" />}
            label="3-4"
            value="3-4"
          />
          <FormControlLabel
            control={<Radio color="error" />}
            label="5-10"
            value="5-10"
          />
          <FormControlLabel
            control={<Radio color="success" />}
            label="10-20"
            value="10-20"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  )
}
