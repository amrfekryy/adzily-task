import {useReducer} from 'react'

const reducer = (state, {type, id}) => {
  switch (type) {
    case 'check':
      return {...state, [id]: {...state[id], checked: true}}
    case 'uncheck':
      return {...state, [id]: {...state[id], checked: false}}
  }
}

export function useApp(initialState) {

  const [singers, dispatchSinger] = useReducer(reducer, initialState.singers)
  const [albums, dispatchAlbum] = useReducer(reducer, initialState.albums)
  const [songs, dispatchSong] = useReducer(reducer, initialState.songs)

  const setSinger = ({type, id}) => {
    dispatchSinger({type, id})
    Object.keys(albums).map(key => albums[key]['singer_id'] == id? dispatchAlbum({type, id:key}) : '')
    Object.keys(songs).map(key => songs[key]['singer_id'] == id? dispatchSong({type, id:key}) : '')
  }

  const setAlbum = ({type, id}) => {
    dispatchAlbum({type, id})
    Object.keys(songs).map(key => songs[key]['album_id'] == id? dispatchSong({type, id:key}) : '')
  }

  const setSong = ({type, id}) => dispatchSong({type, id})
  
  return {
    singers, albums, songs,
    setSinger, setAlbum, setSong
  }
}
