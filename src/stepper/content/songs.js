import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 250,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));

export const Songs = ({appStore: {albums, songs, setSong}}) => {
  const classes = useStyles();

  const groupedByAlbum = Object.values(songs).reduce((groups, song) => {
    groups[song.album_id] = groups[song.album_id] || []
    groups[song.album_id].push(song)
    return groups
  }, {})
  
  return (
    <List className={classes.root} subheader={<li />}>
      
      {Object.entries(groupedByAlbum).map(([album_id, songs]) => (
        <li key={`section-${album_id}`} className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubheader>{albums[album_id]?.name}</ListSubheader>
            {songs.map(song => (
              <ListItem key={song.id} role={undefined} dense button 
                onClick={() => setSong({type: song.checked? 'uncheck' : 'check', id: song.id})}>
                <FormControlLabel
                  control={
                    <Checkbox 
                      icon={<FavoriteBorderIcon />} 
                      checkedIcon={<FavoriteIcon />}
                      checked={song.checked}
                    />
                  }
                  label={song.name}
                />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}

    </List>
  );
}


