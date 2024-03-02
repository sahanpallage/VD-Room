import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { ImStarHalf } from "react-icons/im";

export const generateRating = (rating: number) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (rating >= i + 1) {
      stars.push(<AiFillStar key={i} className="text-accent" />);
    } else if (rating >= i + 0.5) {
      stars.push(<ImStarHalf key={i} className="text-accent" />);
    } else {
      stars.push(<AiOutlineStar key={i} className="text-accent" />);
    }
  }
  return <div className="flex gap-1">{stars}</div>;
};
