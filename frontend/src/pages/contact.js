import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"

import address from "../images/address.svg"
import phone from "../images/phone-adornment.svg"
import Email from "../images/EmailAdornment"
import send from "../images/send.svg"

import Layout from "../components/ui/layout"

const useStyles = makeStyles(theme => ({
  mainContainer: {
    height: "40rem",
    backgroundColor: theme.palette.primary.main,
    marginBottom: "10rem",
  },
  formContainer: {
    height: "100%",
  },
  formWrapper: {
    height: "100%",
  },
  blockContainer: {
    backgroundColor: theme.palette.secondary.main,
    height: "8rem",
    width: "40rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    marginTop: "-4rem",
  },
  buttonContainer: {
    marginBottom: "-4rem",
    textTransform: "none",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  sendIcon: {
    marginLeft: "2rem",
  },
  contactInfo: {
    fontSize: "1.5rem",
    marginLeft: "1rem",
  },
  contactIcon: {
    height: "3rem",
    width: "3rem",
  },
  contactEmailIcon: {
    height: "2.25rem",
    width: "3rem",
  },
  infoContainer: {
    height: "21.25rem",
  },
  middleInfo: {
    borderTop: "2px solid #fff",
    borderBottom: "2px solid #fff",
  },
  iconContainer: {
    borderRight: "2px solid #fff",
    height: "7rem",
    width: "8rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}))

const ContactPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <Grid
        container
        justify="space-around"
        alignItems="center"
        classes={{ root: classes.mainContainer }}
      >
        {/* Contact Form */}
        <Grid item classes={{ root: classes.formWrapper }}>
          <Grid
            container
            classes={{ root: classes.formContainer }}
            direction="column"
            justify="space-between"
            alignItems="center"
          >
            <Grid
              item
              classes={{
                root: clsx(classes.titleContainer, classes.blockContainer),
              }}
            >
              <Typography variant="h4">Contact Us</Typography>
            </Grid>
            <Grid
              item
              component={Button}
              classes={{
                root: clsx(classes.buttonContainer, classes.blockContainer),
              }}
            >
              <Typography variant="h4">send message</Typography>
              <img src={send} className={classes.sendIcon} alt="send message" />
            </Grid>
          </Grid>
        </Grid>

        {/* Contact Info */}
        <Grid item>
          <Grid
            container
            direction="column"
            justify="space-between"
            classes={{ root: classes.infoContainer }}
          >
            <Grid item container alignItems="center">
              <Grid item classes={{ root: classes.iconContainer }}>
                <img
                  className={classes.contactIcon}
                  src={address}
                  alt="address"
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="h2"
                  classes={{ root: classes.contactInfo }}
                >
                  1234 S Example St Wichita, KS 67111
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              alignItems="center"
              classes={{ root: classes.middleInfo }}
            >
              <Grid item classes={{ root: classes.iconContainer }}>
                <img className={classes.contactIcon} src={phone} alt="phone" />
              </Grid>
              <Grid item>
                <Typography
                  classes={{ root: classes.contactInfo }}
                  variant="h2"
                >
                  (555) 555-5555
                </Typography>
              </Grid>
            </Grid>
            <Grid item container alignItems="center">
              <Grid item classes={{ root: classes.iconContainer }}>
                <div className={classes.contactEmailIcon}>
                  <Email color="#fff" />
                </div>
              </Grid>
              <Grid item>
                <Typography
                  classes={{ root: classes.contactInfo }}
                  variant="h2"
                >
                  zachary@var-x.com
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default ContactPage
