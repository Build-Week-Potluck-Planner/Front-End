import React, { useEffect, useState } from "react";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { newDate } from "../utils/newDate";
import { authorization } from "../utils/AxiosWithAuth";
import Organizer from "./Organizer";
import foodimg from "../assets/foodimg.jpg";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: "inline",
  },
  media: {
    height: 250,
    borderTop: "5px solid black",
  },
  content: {
    fontSize: 20,
    borderLeft: "1px solid black ",
    borderRight: "1px solid black ",
    // background: "#282c34",
  },
  type1: {
    background: "white",
    fontSize: 40,
  },
  type2: {
    fontSize: 22,
  },
  type3: {
    fontSize: 18,
  },
  type4: {
    fontSize: 18,
  },
  buttons: {
    borderLeft: "1px solid black ",
    borderRight: "1px solid black ",
    borderBottom: "1px soild black",
  },
});

function EventCard({ props, users, refreshList }) {
  const classes = useStyles();
  const date = newDate(props.date);
  const userFilter = users.filter(
    (user) => user.user_id === props.organizer_id
  );
  console.log("hello", users, userFilter);
  const { push } = useHistory();

  const deletePotluck = () => {
    const event_id = props.event_id;
    authorization()
      .delete(`/events/${event_id}`)
      .then((res) => {
        console.log(res);
        refreshList();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={foodimg} title="Potluck" />
        <CardContent className={classes.content}>
          <Typography
            className={classes.type1}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {props.event_name}
          </Typography>
          <Typography
            className={classes.type2}
            variant="body1"
            color="textSecondary"
            component="p"
          >
            Description: <span></span>
            {props.description} <br></br>
            Organizer Name: <span></span>
            {userFilter.length ? userFilter[0].full_name : null}{" "}
            {/* <OrganizerName name={props.guests.full_name} /> */}
          </Typography>
          <Typography
            className={classes.type3}
            variant="body1"
            color="textSecondary"
            component="p"
          >
            Date: <span></span>
            {date} <br></br>
            Time: <span></span>
            {props.time}
          </Typography>
          <Typography
            className={classes.type4}
            variant="body1"
            color="textSecondary"
            component="p"
          >
            Address : <span></span>
            {props.address} <br></br>
            {props.city} <></>
            {props.state}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.buttons}>
        <Button variant="outlined" size="large" color="primary">
          Edit
        </Button>
        <Button
          onClick={deletePotluck}
          variant="outlined"
          size="large"
          color="secondary"
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default EventCard;
