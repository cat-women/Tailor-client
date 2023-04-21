import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    width: "70%",
    margin: "0 auto",
    alignItem: "center",
    display: "flex"
  },
  footer: {
    inline: "block",
    padding: "12px",
    margin: "10px"
  },
  quotation: {
    marginTop:"50px",
    width:"400px",
    height: "fit-content",
    alignSelf: "center"
  }
}));
export default useStyles;
