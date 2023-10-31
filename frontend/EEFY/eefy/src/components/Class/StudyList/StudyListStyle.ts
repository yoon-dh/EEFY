import styled, { css } from 'styled-components';

// 평점
interface ratingSize {
  $ratingSize: number;
}

export const StarRating = styled.div<ratingSize>`
  height: ${props => props.$ratingSize / 5}px;
  position: relative;
  width: ${props => props.$ratingSize}px;
  &:before {
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjAiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIGZpbGw9IiM3ZjhjOGQiID4gICAgPHBhdGggZD0iTSAyNSAyLjI3MzQzNzUgTCAxOC42MDkzNzUgMTguNDgwNDY5IEwgMC44MTA1NDY4OCAxOS40MTc5NjkgTCAxNC42NDg0MzggMzAuNDEyMTA5IEwgMTAuMDcwMzEyIDQ3LjIyMjY1NiBMIDI1IDM3Ljc3MTQ4NCBMIDM5LjkyOTY4OCA0Ny4yMjI2NTYgTCAzNS4zNTE1NjIgMzAuNDEyMTA5IEwgNDkuMTg5NDUzIDE5LjQxNzk2OSBMIDMxLjM5MDYyNSAxOC40ODA0NjkgTCAyNSAyLjI3MzQzNzUgeiI+PC9wYXRoPjwvc3ZnPg==');
    background-repeat: repeat-x;
    background-size: ${props => props.$ratingSize / 5}px;
    bottom: 0;
    content: '';
    display: block;
    height: ${props => props.$ratingSize / 5}px;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: ${props => props.$ratingSize}px;
  }

  span {
    display: block;
    text-indent: -10000px;
    width: ${props => props.$ratingSize}px;
    height: ${props => props.$ratingSize / 5}px;
    position: absolute;
    overflow: hidden;
    &:before {
      // active
      background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjAiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTAgNTAiIGZpbGw9IiNmMWM0MGYiID4gICAgPHBhdGggZD0iTSAyNSAyLjI3MzQzNzUgTCAxOC42MDkzNzUgMTguNDgwNDY5IEwgMC44MTA1NDY4OCAxOS40MTc5NjkgTCAxNC42NDg0MzggMzAuNDEyMTA5IEwgMTAuMDcwMzEyIDQ3LjIyMjY1NiBMIDI1IDM3Ljc3MTQ4NCBMIDM5LjkyOTY4OCA0Ny4yMjI2NTYgTCAzNS4zNTE1NjIgMzAuNDEyMTA5IEwgNDkuMTg5NDUzIDE5LjQxNzk2OSBMIDMxLjM5MDYyNSAxOC40ODA0NjkgTCAyNSAyLjI3MzQzNzUgeiI+PC9wYXRoPjwvc3ZnPg==');
      background-repeat: repeat-x;
      background-size: ${props => props.$ratingSize / 5}px;
      bottom: 0;
      content: '';
      display: block;
      height: ${props => props.$ratingSize / 5}px;
      left: 0;
      position: absolute;
      right: 0;
      text-indent: 10000px;
      top: 0;
    }
  }
`;
