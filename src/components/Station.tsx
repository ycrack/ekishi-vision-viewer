import {
  Accordion as MuiAccordion,
  AccordionDetails as MuiAccordionDetails,
  AccordionSummary as MuiAccordionSummary,
  Avatar,
  Divider,
  Typography,
  withStyles
} from "@material-ui/core";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import React, { ChangeEvent, useState } from "react";

import Location from "./Location";

const Accordion = withStyles({
  root: { margin: 8, "&$expanded": { margin: 8 } },
  rounded: { borderRadius: 4 },
  expanded: {}
})(MuiAccordion);

const AccordionDetails = withStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))",
    gridGap: "1rem",
    justifyContent: "space-evenly"
  }
})(MuiAccordionDetails);

const AccordionSummary = withStyles({
  content: { "&$expanded": { margin: "12px 0" } },
  expanded: {}
})(MuiAccordionSummary);

type StationProps = {
  number: string;
  name: string;
  locations: { id: number; name: string }[];
  expand?: boolean;
};

const Station: React.FC<StationProps> = (props) => {
  const [expanded, setExpanded] = useState(props.expand);
  const handleExpand = () => (ev: ChangeEvent<{}>, exp: boolean) =>
    setExpanded(exp ? !expanded : false);

  return (
    <Accordion expanded={expanded} onChange={handleExpand()}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Avatar
          alt={props.number}
          src={`https://apl.keikyu.co.jp/kk_apl/static/images/icon_kk/icon_${props.number.toLowerCase()}.png`}
        />
        <Typography
          variant="h6"
          style={{ margin: "4px 8px", lineHeight: 1.43 }}
        >
          {props.name}駅
        </Typography>
      </AccordionSummary>
      <Divider />
      <AccordionDetails>
        {props.locations.map((loc) => (
          <Location {...loc} number={props.number} />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default Station;
