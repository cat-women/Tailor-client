import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  media: {
    height: "50px",
    paddingTop: "56.25%",
    backgroundBlendMode: "darken"
  },
  fullHeightCard: {
    height: "1000px"
  },
  card: {
    position: "relative",
    width: "500px",
    height: "750px",
    borderRadius: "12px",
    margin: "30px"
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white"
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white"
  },
  grid: {
    display: "flex"
  },
  content: {
    marginTop: "auto",
    padding: "2px",
    height: "auto"
  },
  details: {
    margin: "1px",
    overflow: "auto",
    wordWrap: "break-word"
  },
  title: {
    padding: "2px",
    fontSize: 12
  },
  detail: {
    padding: "2px"
  },

  cardActions: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "0 16px 8px 16px",
    display: "flex"
  },
  header: {
    backgroundColor: "#d2e1f3"
  },
  applybtn: {
    backgroundColor: "green",
    marginRight: "20px"
  },
  body: {
    marginTop: "10px"
  },
  quotationbtn: {
    backgroundColor: "#abf5ca"
  }
}));

export default useStyles;
