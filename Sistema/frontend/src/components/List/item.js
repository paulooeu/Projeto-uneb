import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import AvatarImagem from "../../assets/images/avatar.jpg";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
// import { Container } from './styles';

const useStyles = makeStyles(theme => ({
  inline: {
    display: "inline"
  }
}));

export default function List({ projeto }) {
  const classes = useStyles();
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={AvatarImagem} />
      </ListItemAvatar>
      <ListItemText
        primary={projeto.titulo}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              Autor: {projeto.usuario}
            </Typography>
            {projeto.descricao}
          </React.Fragment>
        }
      />
    </ListItem>
  );
}
