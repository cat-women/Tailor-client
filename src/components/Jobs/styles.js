import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  cards: {
    display: "flex",
    padding: "20px",
    width: "100%"
  },
  card: {
    display: "flex",
    flexDirection: "row",
    flex: "0 0 100%",
    padding: "10px",
    flexWrap: "wrap"
  }
}));

export default useStyles;
