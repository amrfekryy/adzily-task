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

export const Albums = ({appStore: {albums, setAlbum}}) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {Object.keys(albums).map(id => {
        const album = albums[id]

        const labelId = `checkbox-list-label-${id}`;

        return (
          <ListItem key={id} role={undefined} dense button 
            onClick={() => setAlbum({type: album.checked? 'uncheck' : 'check', id})}>
            <ListItemIcon>
              <Checkbox checked={album.checked? true : false} />
            </ListItemIcon>
            <ListItemText id={labelId} primary={album.name} />
          </ListItem>
        );
      })}
    </List>
  );
}
