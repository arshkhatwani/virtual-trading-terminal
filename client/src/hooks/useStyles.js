import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  link_class: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
  text_color: {
    color: theme.palette.text.primary,
  },
  text_secondary: {
    color: theme.palette.text.secondary,
  },
  text_disabled: {
    color: theme.palette.text.disabled,
  },
  thinHeading: {
    fontWeight: 300,
  },
}));

export default useStyles;
