import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardHeader as MuiCardHeader,
  CardMedia as MuiCardMedia,
  createStyles,
  makeStyles,
  withStyles
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    media: { height: 0, paddingTop: "36%" },
    content: {
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 0
    },
    image: { width: "100%" }
  })
);

const Card = withStyles({})(MuiCard);
const CardHeader = withStyles({})(MuiCardHeader);
const CardMedia = withStyles({})(MuiCardMedia);
const CardContent = withStyles({
  root: { "&:last-child": { paddingBottom: 0 } }
})(MuiCardContent);

type LocationProps = {
  number: string;
  id: number;
  name: string;
};

const Location: React.FC<LocationProps> = (props) => {
  const classes = useStyles();

  return (
    <Card
      elevation={0}
      style={{ backgroundColor: "darkred", paddingBottom: 0 }}
    >
      <CardHeader
        title={props.name}
        titleTypographyProps={{ variant: "subtitle2" }}
        style={{ height: "2em", boxSizing: "content-box" }}
      />
      <CardMedia
        className={classes.media}
        image={`https://apl.keikyu.co.jp/kk_apl/crowded_graph?st_id=${props.number}&loc_id=${props.id}`}
        title="混雑グラフ"
      />
      <CardMedia
        image={`https://apl.keikyu.co.jp/kk_apl/crowded_icon?st_id=${props.number}&loc_id=${props.id}`}
        style={{ marginBottom: 0, padding: 0, height: 0, paddingTop: "75%" }}
      />
    </Card>
  );
};

export default Location;
