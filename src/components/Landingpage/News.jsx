import { Grid } from "@material-ui/core";
import react from "react";

const News = () => {
  return (
    <Grid style={{ display: "flex" }}>
      <div xs={10}>NEWS AND INSPIRATION NEW ARRIVALS</div>
      <div xs={6}>
        <img
          src="https://cdn.pixabay.com/photo/2015/05/29/19/18/bicycle-789648_960_720.jpg"
          alt="invalid"
          style={{ position: "relative", color: "white" }}
        />
      </div>
    </Grid>
  );
};

export default News;
