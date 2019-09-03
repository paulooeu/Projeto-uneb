import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "./item";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function AlignItemsList({ projetos }) {
  const classes = useStyles();
  console.log(projetos);
  return (
    <List className={classes.root}>
      {projetos.map(projeto => (
        <>
          <ListItem projeto={projeto} />
          <Divider variant="inset" component="li" />
        </>
      ))}
    </List>
  );
}
