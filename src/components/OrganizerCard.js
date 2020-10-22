import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { authorization } from "../utils/AxiosWithAuth";
import profileimg from "../assets/profileimg.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 845,
  },
  media: {
    height: 340,
  },
  name: {
    fontSize: 40,
  },
  username: {
    fontSize: 20,
  },
});

export default function OrganizerCard() {
  const classes = useStyles();
  const [users, setUsersInfo] = useState([]);
  const localId = localStorage.getItem("local_id");

  const getUsersInfo = () => {
    authorization()
      .get(`/users/${localId}`)
      .then((res) => {
        setUsersInfo(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err.response));
  };

  useEffect(() => {
    getUsersInfo();
  }, []);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={profileimg}
          title="Organizer Profile Picture"
        />
        <CardContent>
          <Typography
            className={classes.name}
            gutterBottom
            variant="h5"
            component="h2"
          >
            Name:
          </Typography>
          <Typography
            className={classes.username}
            variant="body1"
            color="textSecondary"
            component="p"
          >
            Username:
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Email:
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Events:
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
