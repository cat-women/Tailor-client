import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const JobList = props => {
  const user = props.user;
  const dispatch = useDispatch();
  
  const jobs = useSelector(store => store.job);
  console.log(jobs);
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {jobs.map(job =>
        <React.Fragment key={job.id}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={job.company_name} src={job.company_logo} />
            </ListItemAvatar>
            <ListItemText
              primary={job.title}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {job.company_name}
                  </Typography>
                  {" — " + job.location}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      )}
    </List>
  );
};

export default JobList;
