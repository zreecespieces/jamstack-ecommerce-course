import React from "react"
import Select from "@material-ui/core/Select"
import Chip from "@material-ui/core/Chip"
import MenuItem from "@material-ui/core/MenuItem"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  chipRoot: {
    backgroundColor: "#fff",
    height: "3rem",
    borderRadius: 50,
    "&:hover": {
      cursor: "pointer",
    },
  },
  chipLabel: {
    color: theme.palette.secondary.main,
  },
  select: {
    "&.MuiSelect-select": {
      paddingRight: 0,
    },
  },
  menu: {
    backgroundColor: theme.palette.primary.main,
  },
  menuItem: {
    color: "#fff",
  },
}))

export default function SelectFrequency({ value, setValue, chip }) {
  const classes = useStyles()

  const frequencies = [
    "Week",
    "Two Weeks",
    "Month",
    "Three Months",
    "Six Months",
    "Year",
  ]

  return (
    <Select
      classes={{ select: classes.select }}
      value={value}
      disableUnderline
      IconComponent={() => null}
      MenuProps={{ classes: { paper: classes.menu } }}
      onChange={event => setValue(event.target.value)}
      renderValue={selected =>
        chip || (
          <Chip
            label={selected}
            classes={{
              root: classes.chipRoot,
              label: classes.chipLabel,
            }}
          />
        )
      }
    >
      {frequencies.map(frequency => (
        <MenuItem
          classes={{ root: classes.menuItem }}
          key={frequency}
          value={frequency}
        >
          {frequency}
        </MenuItem>
      ))}
    </Select>
  )
}
