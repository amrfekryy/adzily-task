import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(10),
    width: theme.spacing(30),
    height: theme.spacing(40),
    backgroundColor: 'seashell',
    padding: theme.spacing(2),
    textAlign: 'left'
  },
  divider: {
    margin: theme.spacing(2),
  },
  centered: {
    textAlign: 'center'
  }
}));

export default function Receipt({appStore: {singers, albums, songs, totals, form}}) {
  const classes = useStyles();

  const albumsCount = Object.values(albums).reduce((count, album) => album.checked? count+1: count, 0)
  const singersCount = Object.values(singers).reduce((count, singer) => singer.checked? count+1: count, 0)

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Paper elevation={3} className={classes.paper}> 
        <Typography variant="button" display="block" gutterBottom className={classes.centered}>
          Receipt
        </Typography>

        <Divider light className={classes.divider}/>

        <Typography variant="subtitle2" gutterBottom>
          Name: {form.name}
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          Email: {form.email}
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          Phone: {form.phone}
        </Typography>

        <Divider light className={classes.divider}/>
        
        <Typography variant="subtitle2" gutterBottom>
          You have selected {totals.count} songs from {albumsCount} albums for {singersCount} singers.
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          Total amount paid is {totals.amount} EGP
        </Typography>

        <Divider light className={classes.divider}/>

        <Typography variant="caption" display="block" gutterBottom className={classes.centered}>
          Thank you for using Adzily. Enjoy your music.
        </Typography>

      </Paper>
    </Grid>
  );
}
