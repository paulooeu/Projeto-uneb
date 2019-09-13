import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import AvatarPaulo from "../../assets/images/avatar.jpg";
import AvatarIury from "../../assets/images/iury.PNG";
import AvatarZCR from "../../assets/images/zcr.png";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

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
        {projeto.usuario == "Paulo" ? (
          <Avatar alt="Remy Sharp" src={AvatarPaulo} />
        ) : projeto.usuario == "Iury" ? (
          <Avatar alt="Remy Sharp" src={AvatarIury} />
        ) : (
          <Avatar alt="Remy Sharp" src={AvatarZCR} />
        )}
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
