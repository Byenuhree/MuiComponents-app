import { DemoContainer } from "@mui/x-date-pickers/internals/demo"

import { DatePicker } from "@mui/x-date-pickers/DatePicker"

export const MuiPicker = () => {
  return (
    <DemoContainer components={["DatePicker"]}>
      <DatePicker label="Basic date picker" />
    </DemoContainer>
  )
}
