import "./App.css"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { MuiPicker } from "./components/MuiPicker"
import { colors, createTheme, ThemeProvider } from "@mui/material"

// import { MuiResponsiveness } from "./components/MuiResponsiveness"
// import { MuiMasonry } from "./components/MuiMasonry"
// import { MuiTimeline } from "./components/MuiTimeline"
// import { MuiTabs } from "./components/MuiTabs"
// import { MuiDialog } from "./components/MuiDialog"
// import { MuiLoadingButton } from "./components/MuiLoadingButton"

// import { MuiProgress } from "./components/MuiProgress"
// import { MuiSkeleton } from "./components/MuiSkeleton"
// import { MuiAlert } from "./components/MuiAlert"
// import { MuiSnackbar } from "./components/MuiSnackbar"
// import { MuiTable } from "./components/MuiTable"
// import { MuiTooltip } from "./components/MuiTool tip"
// import { MuiList } from "./components/MuiList"
// import { MuiBadge } from "./components/MuiBadge"
// import { MuiAvatar } from "./components/MuiAvatar"
// import { MuiBottomNav } from "./components/MuiBottomNav"
// import { MuiBreadcrumbs } from "./components/MuiBreadcrumbs"
// import { MuiDrawer } from "./components/MuiDrawer"
// import { MuiLinks } from "./components/MuiLink"
// import { MuiSpeeDial } from "./components/MuiSpeedDial"
// import { MuiNavbar } from "./components/MuiNavbar"
// import { MuiImageList } from "./components/MuiImageList"
// import { MuiAccordion } from "./components/MuiAccordion"
// import { MuiCard } from "./components/MuiCard"
// import { MuiTypography } from "./components/MuiTypography"
// import { MuiButtons } from "./components/MuiButtons"
// import { MuiTextField } from "./components/MuiTextField"
// import { MuiSelect } from "./components/MuiSelect"
// import { MuiRadioButtons } from "./components/MuiRadioButtons"
// import { MuiCheckBox } from "./components/MuiCheckBox"
// import { MuiSwitch } from "./components/MuiSwitch"
// import { MuiRating } from "./components/MuiRating"
// import { MuiAutocomplete } from "./components/MuiAutocomplete"
// import { MuiLayout } from "./components/MuiLayout"
// import { MuiChips } from "./components/MuiChips"

const theme = createTheme({
  status: {
    danger: "#e53935",
  },
  palette: {
    secondary: {
      main: colors.grey[900],
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700],
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="App">
          {/* <MuiTypography /> */}
          {/* < MuiButtons/> */}
          {/* <MuiTextField /> */}
          {/* <MuiSelect /> */}
          {/* <MuiRadioButtons /> */}
          {/* <MuiCheckBox /> */}
          {/* <MuiSwitch /> */}
          {/* <MuiRating /> */}
          {/* <MuiAutocomplete /> */}
          {/* <MuiLayout /> */}
          {/* <MuiCard /> */}
          {/* <MuiAccordion /> */}
          {/* <MuiImageList /> */}
          {/* <MuiNavbar /> */}
          {/* <MuiLinks /> */}
          {/* <MuiBreadcrumbs /> */}
          {/* <MuiDrawer /> */}
          {/* <MuiSpeeDial /> */}
          {/* <MuiBottomNav /> */}
          {/* <MuiAvatar /> */}
          {/* <MuiBadge /> */}
          {/* <MuiList /> */}
          {/* <MuiChips /> */}
          {/* <MuiTooltip /> */}
          {/* <MuiTable /> */}
          {/* <MuiAlert /> */}
          {/* <MuiSnackbar /> */}
          {/* <MuiDialog /> */}
          {/* <MuiProgress /> */}
          {/* <MuiSkeleton /> */}
          {/* <MuiLoadingButton /> */}
          {/* <MuiPicker /> */}
          {/* <MuiTabs /> */}
          {/* <MuiTimeline /> */}
          {/* <MuiMasonry /> */}
          {/* <MuiResponsiveness /> */}
          <MuiPicker />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  )
}

export default App
