import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";

export const MuiButtons = () => {
  const [formats, setFormats] = useState<string | null>(null);
  console.log({
    formats,
  });
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string | null
  ) => {
    setFormats(updatedFormats);
  };
  return (
    <div>
      <Stack spacing={4}>
        <Stack spacing={2} direction="row">
          <Button variant="text">Submit</Button>
          <Button variant="contained">Submit</Button>
          <Button variant="outlined">Submit</Button>
        </Stack>

        <Stack spacing={2} direction="row">
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="outlined" color="error">
            Error
          </Button>
          <Button variant="outlined" color="warning">
            WARNING
          </Button>
          <Button variant="contained" color="info">
            INFO
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
        </Stack>

        <Stack spacing={4} direction="row">
          <Button variant="contained" color="primary" startIcon={<SendIcon />}>
            Send
          </Button>
          <Button variant="contained" color="primary" endIcon={<SendIcon />}>
            Send
          </Button>

          <IconButton color="success" disableRipple>
            <SendIcon aria-label="send" />
          </IconButton>
        </Stack>

        <Stack direction="row" spacing={140}>
          <ButtonGroup variant="contained" orientation="vertical">
            <Button>Home</Button>
            <Button>About</Button>
            <Button>Contact</Button>
          </ButtonGroup>
        </Stack>

        <Stack direction="row">
          <ToggleButtonGroup
            aria-label="test formatting"
            value={formats}
            onChange={handleFormatChange}
            color="info"
            orientation="vertical"
            exclusive
          >
            <ToggleButton value="bold" aria-label="bold">
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic">
              <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value="underlined" aria-label="underlined">
              <FormatUnderlinedIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack>
    </div>
  );
};
