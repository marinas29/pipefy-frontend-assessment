export interface ICardDetail {
  current_phase: {
    color: string;
    name: string;
  };
  id: number;
  title: string;
}

export interface ICard {
  cursor: string;
  node: ICardDetail;
}

export interface ICards {
  edges: [ICard];
  pageInfo: {
    endCursor: string;
    hasNextPage: Boolean;
    hasPreviousPage: Boolean;
    startCursor: string;
  };
}

export interface ICardsResult {
  cards: ICards;
}
