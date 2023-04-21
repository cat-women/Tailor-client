import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import { Button, TextField } from "@material-ui/core";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import useStyle from "./styles.js";
import Quotation from "../../Quotations/Quotation/quotation.js";

export default function MediaCard(props) {
  const image = "./1.jpg";
  const [isLearnMore, setIsLearnMore] = useState(false);
  const [isApplied, setisApplied] = useState(true);
  const classess = useStyle();
  const navigate = useNavigate();
  const { job, quotation } = props;
  const date = new Date(props.job.created_at);
  const formattedDate = date.toLocaleDateString("en-US");
  const handleQuotation = () => {
    navigate("/quotation", { state: { quotation: props.quotation, job: job } });
  };

  return (
    <Card
      sx={{
        maxWidth: 900,
        textAlign: "left",
        height: isLearnMore ? "fit-content" : "750px"
      }}
      className={classess.card}
    >
      <CardMedia className={classess.media} image={image} title={job.title} />
      <CardContent className={classess.content}>
        <div className={classess.header}>
          <Typography gutterBottom className={classess.title} variant="h4">
            {job.title}
          </Typography>
          <Typography gutterBottom sx={{ fontSize: "1rem" }} variant="h4">
            {job.quotationNo} applicants
          </Typography>
        </div>
        <div className="body">
          <Typography gutterBottom variant="h6" sx={{ fontSize: "1.5rem" }}>
            Job Discritption
          </Typography>
          <hr />

          <Typography variant="subtitle1">
            Budget: ${job.budget}
          </Typography>

          <Typography variant="subtitle1">
            Type: {job.clothes_types}
          </Typography>

          <Typography variant="subtitle1" className={classess.detail}>
            Location :{job.address}
          </Typography>
          {isLearnMore &&
            <div>
              <Typography variant="subtitle1" className={classess.detail}>
                Discription :{job.discription}
              </Typography>
              <Typography variant="subtitle1" className={classess.detail}>
                Status :{job.status ? "Taking" : "Full"}
              </Typography>
            </div>}
          <Button onClick={() => setIsLearnMore(!isLearnMore)}>
            {isLearnMore ? "Hide" : "Learn More"}
          </Button>
        </div>
      </CardContent>
      <CardActions className={classess.cardActions}>
        {props.quotation
          ? <Button className={classess.quotationbtn} onClick={handleQuotation}>
              View Quotation
            </Button>
          : <div>
              <Button className={classess.applybtn}>Apply Now</Button>
              <Typography
                gutterBottom
                sx={{ fontSize: "1rem", textAlign: "right" }}
                variant="h4"
              >
                Apply before {formattedDate}
              </Typography>
            </div>}
      </CardActions>
    </Card>
  );
}
