import { ICardDetail } from '../../interfaces/card.interface';
import '../Card/Card.scss';

const Card = ({ card }: { card: ICardDetail }) => (
  <div className={`card card--${card?.current_phase?.color}`}>
    <p className="card__current-phase">{card?.current_phase?.name}</p>
    <p className="card__name">{card?.title}</p>
  </div>
);

export default Card;
