import React from 'react';

import { Card }  from '../card/Card.jsx';

import './card-list.styles.css';
 const CardList = (props) => {
  return (
    <div className= 'card-list'>
      {props.monsters.map(monster => (<Card key={monster.id} monster={monster} />))}
    </div>
  )
}
export default CardList;