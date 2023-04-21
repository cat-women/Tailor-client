import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Job from "./Job/job.js";
import useStyle from "./styles.js";
const jobs = [
  {
    id: 1,
    name: "catwomen"
  }
];
export default function Movies() {
  const classess = useStyle();
  const isLoading = false;
  if (isLoading) return <CircularProgress />;
  else {
    return (
      <Grid className={classess.cards}>
        <Grid item className={classess.card}>
          {jobs.map(item => {
            return <Job key={item.id} {...item} />;
          })}
        </Grid>
      </Grid>
    );
  }
}
