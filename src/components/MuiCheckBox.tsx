import {
  Box,
  Checkbox,
  FormControlLabel,
  FormControl,
  FormGroup,
  FormLabel,
} from "@mui/material"
import { useState } from "react"

export const MuiCheckBox = () => {
  const [acceptTnC, setAcceptTnC] = useState(false)
  const [skills, setSkills] = useState<string[]>([])
  console.log({ skills })
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnC(event.target.checked)
  }
  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value)
    if (index === -1) {
      setSkills([...skills, event.target.value])
    } else {
      setSkills(skills.filter((skills) => skills !== event.target.value))
    }
  }

  return (
    <Box>
      <FormControlLabel
        label="I accepts terms and conditions"
        control={<Checkbox checked={acceptTnC} onChange={handleChange} />}
      ></FormControlLabel>

      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="Html"
              control={
                <Checkbox
                  value="html"
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                />
              }
            ></FormControlLabel>
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  value="css"
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                />
              }
            ></FormControlLabel>
            <FormControlLabel
              label="JavaScript"
              control={
                <Checkbox
                  disabled
                  value="js"
                  checked={skills.includes("js")}
                  onChange={handleSkillChange}
                />
              }
            ></FormControlLabel>
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  )
}
