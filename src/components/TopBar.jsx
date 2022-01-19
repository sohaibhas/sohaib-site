import React from "react";
import AppBar from "@material-ui/core/AppBar";
import {
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  menu: {
    display: "inline-block",
    backgroundcolor: "red",
  },
  title: {
    color: "black",
    padding: "20px",
  },
  btn: {
    fontSize: 20,
    right: theme.spacing(1),
  },
  menu: {
    background: "white",
    border: "solid 1px",
  },
}));
const TopBar = () => {
  const classes = useStyles();
  return (
    <Grid>
      <AppBar position="static" className={classes.menu}>
        <Toolbar>
          <Grid item xs={3}>
            <IconButton>
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid item xs={6} style={{ display: "flex" }}>
            <Typography variant="h6" className={classes.title}>
              Home
            </Typography>
            <Typography variant="h6" className={classes.title}>
              Pages
            </Typography>
            <Typography variant="h6" className={classes.title}>
              Shop
            </Typography>
            <Typography variant="h6" className={classes.title}>
              Blog
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Button
              color="transparent"
              styles={{ float: "right" }}
              className={classes.btn}
            >
              Login
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default TopBar;