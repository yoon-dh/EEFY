'use client';
import { StarRating } from './SpeakinigStyles';

interface RatingProps {
  score: number;
}

function Rating({ score }: RatingProps) {
  return (
    // 해당 지점이 true가 나온 경우, 거기 score가 매겨짐
    <StarRating $ratingSize={120}>
      <span style={{ width: `${score}%` }}></span>
    </StarRating>
  );
}

export default Rating;
