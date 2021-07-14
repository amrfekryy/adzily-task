import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CheckCard from './check_card';

export default function CardList ({items, setItem}) {

  return Object.values(items).map(item =>         
    <CheckCard key={item.name} {...item} 
      handleClick={() => setItem({type: item.checked? 'uncheck' : 'check', id:item.id})}
    />
  )
}
