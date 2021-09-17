import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  link_class: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
  text_color: {
    color: theme.palette.text.primary,
  },
}));

export default useStyles;
