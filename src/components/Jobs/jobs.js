import React, { useState } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Job from "./Job/job.js";
import useStyle from "./styles.js";
import Form from "./form.js";
import JobList from "./jobList.js";

export default function Movies() {
  const classess = useStyle();
  const { data, isLoading } = useSelector(store => store.jobs);
  const { user } = useSelector(store => store.auth);
  const userQuotations = useSelector(store => store.quotations.userQuotations);
  if (isLoading || data == null) return <CircularProgress />;
  else {
    return (
      <Grid className={classess.cards} container direction="row" spacing={3}>
        {user.role_id === "BUYER" &&
          <div>
            <Form /> <JobList user={user} />
          </div>}
        <Grid
          item
          className={classess.card}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          columns={{ xs: 12, sm: 3 }}
        >
          {data.map(item => {
            let quotation;
            if (userQuotations)
              quotation = userQuotations.data.find(q => q.job_id === item.id);

            return <Job key={item.id} job={item} quotation={quotation} />;
          })}
        </Grid>
      </Grid>
    );
  }
}
