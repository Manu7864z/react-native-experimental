export interface Card {
  id: string;
  question: string;
  answer: string;
}

export interface Deck {
  id: string;
  title: string;
  description?: string;
  cards: Card[];
}
export interface Decks {
  [key: string]: Deck;
}
export interface DecksState {
  decks: Decks;
  loading: boolean;
  error: string | null;
  selectedDeck: Deck | null;
  selectedCard: Card | null;
  selectedDeckId: string | null;
  selectedCardId: string | null;
  selectedCardAnswer: string | null;
  selectedCardQuestion: string | null;
  selectedCardAnswerId: string | null;
}
