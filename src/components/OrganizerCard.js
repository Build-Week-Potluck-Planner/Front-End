import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function OrganizerCard({ props }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://cdn.vox-cdn.com/thumbor/qUrk7-iM8AAAPFwR4CoU--jwDhQ=/305x0:620x300/1200x800/filters:focal(416x93:514x191)/cdn.vox-cdn.com/uploads/chorus_image/image/54012879/twitter_eggandgumdrop.0.jpg"
          title="Organizer Profile Picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Name:
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Username:
          </Typography>
          <Typography variant="body3" color="textSecondary" component="p">
            Email:
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
          ></Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
