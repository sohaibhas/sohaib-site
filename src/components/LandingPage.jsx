import react from "react";
import { Button, Grid } from "@material-ui/core";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import SendIcon from "@mui/icons-material/Send";
import NewArrival from "./Landingpage/NewArrival";
import News from "./Landingpage/News";

const LandingPage = () => {
  return (
    <Grid container>
      <Carousel
        autoFocus={true}
        autoPlay={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        stopOnHover={false}
        className="presentation-mode"
      >
        <Grid container>
          <img
            src="https://cdn.pixabay.com/photo/2015/05/29/19/18/bicycle-789648_960_720.jpg"
            alt="invalid"
            style={{ position: "relative", color: "white" }}
          />
          <Grid
            style={{
              position: "absolute",
              right: "60%",
              left: "10%",
              bottom: "60%",
              size: "50px",
              textalign: "left",
            }}
          >
            <p>get All</p>
            <h3 style={{ size: 80 }}>THE GOOD STUFF</h3>
            <h1>SOHAIB HASSAN</h1>
            <Button
              variant="outlined"
              color="secondary"
              size={"large"}
              fullWidth={true}
              endIcon={<SendIcon />}
            >
              SHOP
            </Button>
          </Grid>
        </Grid>
        <Grid>
          <img
            src="https://cdn.pixabay.com/photo/2014/09/15/21/46/couch-447484_960_720.jpg"
            alt="invalid"
          />
          <Grid
            style={{
              position: "absolute",
              right: "60%",
              left: "10%",
              bottom: "60%",
              size: "50px",
              textalign: "left",
            }}
          >
            <p>get All</p>
            <h3 style={{ size: 80 }}>THE GOOD STUFF</h3>
            <h1>SOHAIB HASSAN</h1>
            <Button
              variant="outlined"
              color="secondary"
              size={"large"}
              fullWidth={true}
              endIcon={<SendIcon />}
            >
              SHOP
            </Button>
          </Grid>
        </Grid>
        <Grid>
          <img
            src="https://cdn.pixabay.com/photo/2018/04/10/10/37/window-3307004_960_720.png"
            alt="invalid"
          />
          <Grid
            style={{
              position: "absolute",
              right: "60%",
              left: "10%",
              bottom: "60%",
              size: "50px",
              textalign: "left",
            }}
          >
            <p>get All</p>
            <h3 style={{ size: 80 }}>THE GOOD STUFF</h3>
            <h1>SOHAIB HASSAN</h1>
            <Button
              variant="outlined"
              color="secondary"
              size={"large"}
              fullWidth={true}
              endIcon={<SendIcon />}
            >
              SHOP
            </Button>
          </Grid>
        </Grid>
      </Carousel>
      <Grid>
        <NewArrival />
      </Grid>
      <Grid>
        <News />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
