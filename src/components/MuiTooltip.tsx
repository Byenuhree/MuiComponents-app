import DeleteIcon from "@mui/icons-material/Delete"
import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"

export const MuiTooltip = () => {
  return (
    <Tooltip
      title="Delete"
      placement="right"
      arrow
      enterDelay={500}
      leaveDelay={200}
    >
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  )
}
