import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export const Singers = ({appStore: {singers, setSinger}}) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {Object.keys(singers).map(id => {
        const singer = singers[id]

        const labelId = `checkbox-list-label-${id}`;

        return (
          <ListItem key={id} role={undefined} dense button 
            onClick={() => setSinger({type: singer.checked? 'uncheck' : 'check', id})}>
            <ListItemIcon>
              <Checkbox checked={singer.checked? true : false} />
            </ListItemIcon>
            <ListItemText id={labelId} primary={singer.name} />
          </ListItem>
        );
      })}
    </List>
  );
}
