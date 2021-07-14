import CardList from "./card_list";

export const Singers = ({appStore: {singers, setSinger}}) => {

  return <CardList items={singers} setItem={setSinger}/>
  
}
