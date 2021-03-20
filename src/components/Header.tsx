import { AppBar, createStyles, makeStyles, Toolbar, Typography, useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: { flexGrow: 1 },
    menuButton: { marginRight: theme.spacing(2) },
    title: { marginLeft: theme.spacing(1) }
  })
);

type HeaderProps = {
  title: string;
  color?: string;
};

const Header: React.FC<HeaderProps> = (props) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={classes.root}
      style={{ backgroundColor: props.color || theme.palette.primary.main }}
    >
      <Toolbar>
        <img
          alt="けいきゅん"
          src="https://apl.keikyu.co.jp/kk_apl/static/images/favicon.ico"
        />
        <Typography variant="h6" className={classes.title}>
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
