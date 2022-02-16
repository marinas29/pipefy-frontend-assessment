import React from 'react';
import { IPipe } from '../../interfaces/pipe.interface';
import './Card.scss';

const Card = ({ color, name, cards_count }: IPipe) => (
  <div
    className={`pipe-card pipe-card--${color}`}
  >
    <p className="pipe-card__name">{name}</p>
    <p className="pipe-card__count">{cards_count} cards</p>
  </div>
)

export default Card;
