import { Stack, Autocomplete, TextField } from "@mui/material"
import { useState } from "react"

type Skill = {
  id: number
  label: string
}

const techs = ["Html", "Css", "JavaScript", "TypeScript", "React"]

const skillsOptions = techs.map((tech, index) => ({
  id: index + 1,
  label: tech,
}))

export const MuiAutocomplete = () => {
  const [skills, setSkills] = useState<Skill | null>(null)
  console.log({ skills })
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="Tech" />}
        value={skills}
        onChange={(event: any, newValue: Skill | null) => setSkills(newValue)}
      />
    </Stack>
  )
}
