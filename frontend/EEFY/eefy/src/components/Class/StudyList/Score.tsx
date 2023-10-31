'use client';
import { StarRating } from './StudyListStyle';

interface ScoreProps {
  score: number;
}

function Score({ score }: ScoreProps) {
  return (
    // 해당 지점이 true가 나온 경우, 거기 score가 매겨짐
    <StarRating $ratingSize={140}>
      <span style={{ width: `${score}%` }}></span>
    </StarRating>
  );
}

export default Score;
