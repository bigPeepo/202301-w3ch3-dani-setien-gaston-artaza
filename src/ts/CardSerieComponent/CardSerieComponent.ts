import { type SeriesStructure } from "../types/types";

class CardSerieComponent implements SeriesStructure {
  id: number;
  name: string;
  creator: string;
  year: number;
  poster: string;
  isWatched: boolean;
  score: 0 | 1 | 5 | 2 | 3 | 4;
  emmies: number;

  setAsWatched() {
    this.isWatched = false;
  }

  isRated(score: 0 | 1 | 5 | 2 | 3 | 4) {
    this.score = score;
  }
}

export default CardSerieComponent;
