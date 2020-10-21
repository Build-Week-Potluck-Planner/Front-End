import React from "react";
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

function EventCard({ props }) {
  // const { getPotlucks, props } = prettyprops;
  const classes = useStyles();
  const date = newDate(props.date);
  // console.log(props);
  // console.log("prettyprops", prettyprops);

  // const deletePotluck = (event_id) => {
  //   authorization()
  //     .delete("/events/:id", event_id)
  //     .then((res) => getPotlucks())
  //     .catch((err) => console.log(err));
  // };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          title="Contemplative Reptile"
        />
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
            variant="body2"
            color="textSecondary"
            component="p"
          >
            Description: <span></span>
            {props.description} <br></br>
            Organizer Id: <span></span>
            {props.organizer_id}{" "}
          </Typography>
          <Typography
            className={classes.type3}
            variant="body3"
            color="textSecondary"
            component="p"
          >
            <p>
              Date: <span></span>
              {date} <br></br>
              Time: <span></span>
              {props.time}
            </p>
          </Typography>
          <Typography
            className={classes.type4}
            variant="body4"
            color="textSecondary"
            component="p"
          >
            <p>
              Address : <span></span>
              {props.address} <br></br>
              {props.state} <></>
              {props.city}
            </p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.buttons}>
        <Button
          // onClick={deletePotluck(props.event_id)}
          variant="outlined"
          size="large"
          color="primary"
        >
          Edit
        </Button>
        <Button variant="outlined" size="large" color="secondary">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default EventCard;
