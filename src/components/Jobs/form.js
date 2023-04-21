import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  Container,
  Paper,
  Typography,
  Grid,
  Input,
  Button
} from "@material-ui/core";

import makeStyles from "../Auth/styles.js";
import { addJob } from "../../api/jobApi.js";

const Form = () => {
  const classess = makeStyles();
  const user = JSON.parse(localStorage.getItem("user")).user;

  const [formData, setFormData] = useState(new FormData());
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFileChange = event => {
    setFile(event.target.files[0]);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const dataToSend = new FormData();
    dataToSend.append("posterId", user.id);

    Object.entries(formData).forEach(([key, value]) => {
      dataToSend.append(key, value);
    });
    dataToSend.append("images", file);

    dispatch(addJob(dataToSend)).then(() => {
      alert("New job created!");
      setFormData("");
      setFile("");
    });
  };

  return (
    <Container className={classess.container}>
      <Paper className={classess.paper}>
        <Typography className={classess.heading} variant="h4">
          Add Job
        </Typography>
        <form
          className={classess.form}
          onSubmit={handleSubmit}
          enctype="multipart/form-data"
        >
          <Grid className={classess.input}>
            <Input
              name="title"
              placeholder="Title"
              onChange={handleChange}
              autoFocus
              className={classess.input}
            />

            <Input
              name="clothesTypes"
              placeholder="Clothes Types"
              onChange={handleChange}
              className={classess.input}
            />

            <Input
              name="budget"
              placeholder="Budget"
              onChange={handleChange}
              type="number"
              InputProps={{
                inputProps: {
                  min: 0
                }
              }}
              className={classess.input}
            />

            <Input
              name="address"
              placeholder="address"
              type="text"
              onChange={handleChange}
              className={classess.input}
            />
            <Input
              name="discription"
              placeholder="Discription"
              onChange={handleChange}
              className={classess.input}
            />
            <input
              accept="image/*"
              className={classess.input}
              type="file"
              onChange={handleFileChange}
            />
            <Grid className={classess.footer1}>
              <Button className={classess.btnSubmit} type="submit">
                Add
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Form;
