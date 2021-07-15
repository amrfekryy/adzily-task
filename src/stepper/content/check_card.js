import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 200,
    margin: theme.spacing(2)
  },
  media: {
    height: 120,
  },
  content: {
    height: 20,
    display: 'flex',
    alignItems: 'center'
  }
}));

export default function CheckCard({checked=false, name, handleClick}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          className={classes.media}
          image="https://via.placeholder.com/150?text=Picture"
        />
        <CardContent className={classes.content}>
          <FormControlLabel
            control={
              <Checkbox 
                icon={<FavoriteBorderIcon />} 
                checkedIcon={<FavoriteIcon />}
                checked={checked}
              />
            }
            label={name}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
