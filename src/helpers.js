import {useReducer, useState} from 'react'

const reducer = (state, {type, id, extra={}}) => {
  switch (type) {
    case 'check':
      return {...state, [id]: {...state[id], checked: true, ...extra}}
    case 'uncheck':
      return {...state, [id]: {...state[id], checked: false, ...extra}}
  }
}

export function useApp(initialState) {

  const [singers, dispatchSinger] = useReducer(reducer, initialState.singers)
  const [albums, dispatchAlbum] = useReducer(reducer, initialState.albums)
  const [songs, dispatchSong] = useReducer(reducer, initialState.songs)
  
  
  const setSong = ({type, id:song_id, extra}) => dispatchSong({type, id:song_id, extra})
  
  const setAlbum = ({type, id:album_id, extra}) => {
    dispatchAlbum({type, id:album_id, extra})
    
    Object.values(songs).map(song => {
      if (song.album_id == album_id) {
        setSong({type, id:song.id, extra: {show: type === 'check'}})
      }
    })
  }

  const setSinger = ({type, id:singer_id}) => {
    dispatchSinger({type, id:singer_id})
    
    Object.values(albums).map(album => {
      if (album.singer_id == singer_id) {
        setAlbum({type, id:album.id, extra: {show: type === 'check'}})
      }
    })
  }


  return {
    singers, 
    albums: Object.values(albums).reduce((filtered, album) => {
      if (album.show) filtered[album.id] = album
      return filtered
    }, {}), 
    songs: Object.values(songs).reduce((filtered, song) => {
      if (song.show) filtered[song.id] = song
      return filtered
    }, {}),
    setSinger, setAlbum, setSong
  }
}
