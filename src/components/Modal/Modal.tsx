import { ApolloQueryResult, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import CARDS from '../../graphql/cards';
import { ICard, ICardsResult } from '../../interfaces/card.interface';
import { IPipe } from '../../interfaces/pipe.interface';
import { PAGE_SIZE } from '../../utils/constants';
import Card from '../Card/Card';
import '../Card/Card.scss';
import './Modal.scss';

interface IProps {
  isModalOpen: Boolean;
  pipe: IPipe;
  setIsModalOpen: (data: boolean) => void;
}

const Modal = ({ isModalOpen, pipe, setIsModalOpen }: IProps) => {
  const [cards, setCards] = useState([]);
  const [hasNextPage, setHasNextPage] = useState<Boolean>();

  const { data, fetchMore } = useQuery(CARDS, {
    variables: {
      pipe_id: pipe.id,
      first: PAGE_SIZE,
    },
    onCompleted: (res) => {
      setCards(res?.cards?.edges);
      setHasNextPage(res?.cards?.pageInfo?.hasNextPage);
    },
  });

  const loadMoreCards = async () => {
    const response = (await fetchMore({
      variables: {
        pipe_id: pipe.id,
        after: data?.cards?.pageInfo.endCursor,
      },
    })) as ApolloQueryResult<ICardsResult>;

    // @ts-ignore
    setCards((prevState): any[] => [
      ...prevState,
      ...response?.data?.cards?.edges,
    ]);

    setHasNextPage(response?.data?.cards?.pageInfo?.hasNextPage);
  };

  const title = pipe.cards_count
    ? `Listing cards from pipe ${pipe?.name}`
    : 'No cards have been created for this pipe yet';

  return (
    <div className={`${isModalOpen ? 'show' : 'hide'} modal`}>
      <div className="modal__content">
        <div
          className="modal__content__close"
          onClick={() => setIsModalOpen(false)}
        ></div>
        <h3 className="modal__content__title">{title}</h3>
        <div className="modal__content__cards">
          {cards?.map((card: ICard) => (
            <Card card={card.node} key={`${card.node.title}-${card.node.id}`} />
          ))}
        </div>
        {hasNextPage && (
          <button
            className="modal__content__button"
            onClick={() => loadMoreCards()}
          >
            Load more cards
          </button>
        )}
      </div>
    </div>
  );
};

export default Modal;
