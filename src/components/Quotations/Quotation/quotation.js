import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  Grid,
  FormControl,
  TextField,
  Button,
  Paper,
  Typography
} from "@material-ui/core";
import Job from "../../Jobs/Job/job.js";
import useStyle from "./styles.js";
import { addQuotation } from "../../../api/quotationApi";

export default function Quotation(props) {
  const [isEdit, setisEdit] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const classess = useStyle();
  const { quotation, job } = location.state;
  const user = JSON.parse(localStorage.getItem("user")).user;

  const initialState = {
    jobId: job.id,
    requesterId: user.id,
    comments: quotation ? quotation.comments : "",
    price: quotation ? quotation.price : ""
  };

  const [formData, setformData] = useState(initialState);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    dispatch(addQuotation(formData));
    setisEdit(false);
    navigate("back");
  };
  const handleEdit = () => {
    if (quotation && quotation.status) {
      alert("Application already procced can't edid");
      return;
    }
    setisEdit(!isEdit);
  };

  const handleChange = e => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Grid container spacing={2} className={classess.container}>
      <Paper xs={6}>
        <Job job={job} />
      </Paper>
      <Paper
        className={classess.quotation}
        sx={{
          maxWidth: 400,
          textAlign: "left"
        }}
        xs={3}
      >
        <Typography variant="h4">
          {quotation ? "Your Quotation" : "Add Qutotation"}
        </Typography>
        <hr />
        <FormControl onSubmit={handleSubmit}>
          <TextField
            label="Price"
            name="price"
            defaultValue={quotation ? quotation.price : ""}
            InputProps={{ readOnly: isEdit ? false : true }}
            onChange={handleChange}
          />
          <TextField
            label="Comments"
            name="comments"
            defaultValue={
              quotation ? quotation.comments : "Write comments here "
            }
            InputProps={{ readOnly: isEdit ? false : true }}
            onChange={handleChange}
          />
          <TextField
            label="Status"
            defaultValue={
              quotation ? (quotation.status ? "Accepted" : "Processing") : ""
            }
            InputProps={{ readOnly: true }}
          />
          <div className={classess.footer}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Button onClick={handleEdit}>Edit </Button>
          </div>
        </FormControl>
      </Paper>
    </Grid>
  );
}
