import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CheckCard from './check_card';

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: 220,
    overflow: 'auto',
    margin: theme.spacing(2)
  },
}));

export default function CardList ({items, setItem}) {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      className={classes.root}
    >
      {Object.values(items).map(item => 
        
        <CheckCard key={item.name} {...item} 
          handleClick={() => setItem({type: item.checked? 'uncheck' : 'check', id:item.id})}
        />
      )}
    </Grid>
  );
}
