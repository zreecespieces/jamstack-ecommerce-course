import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

import confirmationIcon from "../../images/tag.svg"
import NameAdornment from "../../images/NameAdornment"
import EmailAdornment from "../../images/EmailAdornment"
import PhoneAdornment from "../../images/PhoneAdornment"
import streetAdornment from "../../images/street-adornment.svg"
import zipAdornment from "../../images/zip-adornment.svg"
import cardAdornment from "../../images/card.svg"
import promoAdornment from "../../images/promo-adornment.svg"

const useStyles = makeStyles(theme => ({
  nameWrapper: {
    height: 22,
    width: 22,
  },
  name: {
    fontSize: "1rem",
    color: "#fff",
  },
}))

export default function Confirmation() {
  const classes = useStyles()

  return (
    <Grid item container direction="column">
      <Grid item container>
        <Grid item container direction="column" xs={8}>
          <Grid item container>
            <Grid item xs={1}>
              <div className={classes.nameWrapper}>
                <NameAdornment color="#fff" />
              </div>
            </Grid>
            <Grid item xs={11}>
              <Typography variant="body1" classes={{ root: classes.name }}>
                Zachary Reece
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <img src={confirmationIcon} alt="confirmation" />
        </Grid>
      </Grid>
    </Grid>
  )
}
