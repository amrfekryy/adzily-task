import CardList from "./card_list";

export const Albums = ({appStore: {albums, setAlbum}}) => {

  return <CardList items={albums} setItem={setAlbum}/>
  
}
