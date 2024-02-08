import { Box, TextField, MenuItem } from "@mui/material";
import React, { useState } from "react";

export const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);
  console.log({ countries });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width="300px" marginTop={20} marginLeft={20}>
      <TextField
        select
        fullWidth
        id="demo-simple-select"
        value={countries}
        label="Countries"
        onChange={handleChange}
        placeholder="Select country"
      >
        <MenuItem value="PH">Phlippines</MenuItem>
        <MenuItem value="JP">Japan</MenuItem>
        <MenuItem value="US">USA</MenuItem>
      </TextField>
    </Box>
  );
};
